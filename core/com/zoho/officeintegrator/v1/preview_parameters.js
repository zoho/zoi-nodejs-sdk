import {StreamWrapper} from "../../../../../utils/util/stream_wrapper.js";
import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class PreviewParameters{

	url;
	document;
	documentInfo;
	permissions;
	keyModified = new Map();
	/**
	 * The method to get the url
	 * @returns {String} A String representing the url
	 */
	getUrl()	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param {String} url A String representing the url
	 */
	setUrl(url)	{
		if((url != null) && (!(Object.prototype.toString.call(url) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url EXPECTED TYPE: String", null, null);
		}
		this.url = url;
		this.keyModified.set("url", 1);

	}

	/**
	 * The method to get the document
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getDocument()	{
		return this.document;

	}

	/**
	 * The method to set the value to document
	 * @param {StreamWrapper} document An instance of StreamWrapper
	 */
	setDocument(document)	{
		if((document != null) && (!(document instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: document EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.document = document;
		this.keyModified.set("document", 1);

	}

	/**
	 * The method to get the documentInfo
	 * @returns {PreviewDocumentInfo} An instance of PreviewDocumentInfo
	 */
	getDocumentInfo()	{
		return this.documentInfo;

	}

	/**
	 * The method to set the value to documentInfo
	 * @param {PreviewDocumentInfo} documentInfo An instance of PreviewDocumentInfo
	 */
	async setDocumentInfo(documentInfo)	{
		const PreviewDocumentInfo = (await (import("./preview_document_info.js"))).MasterModel;
		if((documentInfo != null) && (!(documentInfo instanceof PreviewDocumentInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentInfo EXPECTED TYPE: PreviewDocumentInfo", null, null);
		}
		this.documentInfo = documentInfo;
		this.keyModified.set("document_info", 1);

	}

	/**
	 * The method to get the permissions
	 * @returns {Map} A Map representing the permissions
	 */
	getPermissions()	{
		return this.permissions;

	}

	/**
	 * The method to set the value to permissions
	 * @param {Map} permissions A Map representing the permissions
	 */
	setPermissions(permissions)	{
		if((permissions != null) && (!(Object.prototype.toString.call(permissions) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissions EXPECTED TYPE: Map", null, null);
		}
		this.permissions = permissions;
		this.keyModified.set("permissions", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}


}
export {
	PreviewParameters as MasterModel,
	PreviewParameters as PreviewParameters
}
