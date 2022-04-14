import RNFetchBlob from 'rn-fetch-blob'
import _ from 'lodash'

class FileSystemManager {
	dirs = {
		Documents: RNFetchBlob.fs.dirs.DocumentDir,
		Cache: `${RNFetchBlob.fs.dirs.CacheDir}/demo`,
		Download: RNFetchBlob.fs.dirs.DownloadDir,
		Root: `${RNFetchBlob.fs.dirs.DocumentDir}/demo`,
		Locales: `${RNFetchBlob.fs.dirs.DocumentDir}/demo/locales`
	}

	async init() {
		await this.setupDirectories()
	}

	async setupDirectories() {
		const directories = [this.dirs.Cache, this.dirs.Root, this.dirs.Locales]
		await _.map(directories, directory => this.setupDirectory({ path: directory }))
	}

	async setupDirectory({ path }) {
		const isDir = await RNFetchBlob.fs.isDir(path)
		if (!isDir) await RNFetchBlob.fs.mkdir(path)
	}

	async writeFile({ path, data, encoding = 'utf8' }) {
		await RNFetchBlob.fs.writeFile(path, data, encoding)
	}

	async appendFile({ path, data, encoding = 'utf8' }) {
		await RNFetchBlob.fs.appendFile(path, data, encoding)
	}

	readFile({ path, encoding = 'utf8' }) {
		return RNFetchBlob.fs.readFile(path, encoding)
	}

	fileExists({ path }) {
		return RNFetchBlob.fs.exists(path)
	}

	// Posible return formats = ['base64', 'json', 'text']
	async fetchFile({ path, progressCallback = _.noop, url, returnFormat }) {
		const _returnFormat = _.includes(['base64', 'json', 'text'], returnFormat) ? returnFormat : 'base64'
		const response = await RNFetchBlob.config({
			path,
			overwrite: true
		})
			.fetch('GET', url)
			.uploadProgress((received, total) => progressCallback(_.floor((received / total) * 100)))

		return response[_returnFormat]()
	}

	async deleteFolder({ path }) {
		await RNFetchBlob.fs.unlink(path)
	}
}

export default new FileSystemManager()
