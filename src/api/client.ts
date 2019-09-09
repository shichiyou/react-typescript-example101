/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.6.0 (NJsonSchema v10.0.23.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
      this.http = http ? http : <any>window;
      this.baseUrl = baseUrl ? baseUrl : "";
    }
  
    /**
     * @return Success
     */
    configuiration(): Promise<ConfigurationData> {
      let url_ = this.baseUrl + "/api/Configuiration";
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
          "Accept": "text/plain"
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processConfiguiration(_response);
      });
    }
  
    protected processConfiguiration(response: Response): Promise<ConfigurationData> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = ConfigurationData.fromJS(resultData200);
          return result200;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<ConfigurationData>(<any>null);
    }
  
    /**
     * @return Success
     */
    configuration(clientId: string): Promise<void> {
      let url_ = this.baseUrl + "/_configuration/{clientId}";
      if (clientId === undefined || clientId === null)
        throw new Error("The parameter 'clientId' must be defined.");
      url_ = url_.replace("{clientId}", encodeURIComponent("" + clientId));
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processConfiguration(_response);
      });
    }
  
    protected processConfiguration(response: Response): Promise<void> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          return;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<void>(<any>null);
    }
  
    /**
     * @return Success
     */
    posts(): Promise<string[]> {
      let url_ = this.baseUrl + "/api/Posts";
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
          "Accept": "text/plain"
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processPosts(_response);
      });
    }
  
    protected processPosts(response: Response): Promise<string[]> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
              result200!.push(item);
          }
          return result200;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<string[]>(<any>null);
    }
  
    /**
     * @param term (optional) 
     * @param page (optional) 
     * @param limit (optional) 
     * @return Success
     */
    storeInfos(term: string | undefined, page: number | undefined, limit: number | undefined): Promise<StoreInfoPagedCollectionResponse> {
      let url_ = this.baseUrl + "/api/StoreInfos?";
      if (term === null)
        throw new Error("The parameter 'term' cannot be null.");
      else if (term !== undefined)
        url_ += "Term=" + encodeURIComponent("" + term) + "&";
      if (page === null)
        throw new Error("The parameter 'page' cannot be null.");
      else if (page !== undefined)
        url_ += "Page=" + encodeURIComponent("" + page) + "&";
      if (limit === null)
        throw new Error("The parameter 'limit' cannot be null.");
      else if (limit !== undefined)
        url_ += "Limit=" + encodeURIComponent("" + limit) + "&";
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
          "Accept": "text/plain"
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processStoreInfos(_response);
      });
    }
  
    protected processStoreInfos(response: Response): Promise<StoreInfoPagedCollectionResponse> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = StoreInfoPagedCollectionResponse.fromJS(resultData200);
          return result200;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<StoreInfoPagedCollectionResponse>(<any>null);
    }
  
    /**
     * @param term (optional) 
     * @param page (optional) 
     * @param limit (optional) 
     * @return Success
     */
    values(term: string | undefined, page: number | undefined, limit: number | undefined): Promise<StorePropertiesPagedCollectionResponse> {
      let url_ = this.baseUrl + "/api/Values?";
      if (term === null)
        throw new Error("The parameter 'term' cannot be null.");
      else if (term !== undefined)
        url_ += "Term=" + encodeURIComponent("" + term) + "&";
      if (page === null)
        throw new Error("The parameter 'page' cannot be null.");
      else if (page !== undefined)
        url_ += "Page=" + encodeURIComponent("" + page) + "&";
      if (limit === null)
        throw new Error("The parameter 'limit' cannot be null.");
      else if (limit !== undefined)
        url_ += "Limit=" + encodeURIComponent("" + limit) + "&";
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
          "Accept": "text/plain"
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processValues(_response);
      });
    }
  
    protected processValues(response: Response): Promise<StorePropertiesPagedCollectionResponse> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = StorePropertiesPagedCollectionResponse.fromJS(resultData200);
          return result200;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<StorePropertiesPagedCollectionResponse>(<any>null);
    }
  
    /**
     * @return Success
     */
    weatherForecast(): Promise<WeatherForecast[]> {
      let url_ = this.baseUrl + "/WeatherForecast";
      url_ = url_.replace(/[?&]$/, "");
  
      let options_ = <RequestInit>{
        method: "GET",
        headers: {
          "Accept": "text/plain"
        }
      };
  
      return this.http.fetch(url_, options_).then((_response: Response) => {
        return this.processWeatherForecast(_response);
      });
    }
  
    protected processWeatherForecast(response: Response): Promise<WeatherForecast[]> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
        return response.text().then((_responseText) => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
              result200!.push(WeatherForecast.fromJS(item));
          }
          return result200;
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }
      return Promise.resolve<WeatherForecast[]>(<any>null);
    }
  }
  
  export class Defines implements IDefines {
    id?: string;
    propertyName?: string;
    displayName?: string;
    dataType?: string;
    displayOrder?: number;
  
    constructor(data?: IDefines) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.id = data["id"];
        this.propertyName = data["propertyName"];
        this.displayName = data["displayName"];
        this.dataType = data["dataType"];
        this.displayOrder = data["displayOrder"];
      }
    }
  
    static fromJS(data: any): Defines {
      data = typeof data === 'object' ? data : {};
      let result = new Defines();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["propertyName"] = this.propertyName;
      data["displayName"] = this.displayName;
      data["dataType"] = this.dataType;
      data["displayOrder"] = this.displayOrder;
      return data;
    }
  
    clone(): Defines {
      const json = this.toJSON();
      let result = new Defines();
      result.init(json);
      return result;
    }
  }
  
  export interface IDefines {
    id?: string;
    propertyName?: string;
    displayName?: string;
    dataType?: string;
    displayOrder?: number;
  }
  
  export class ConfigurationData implements IConfigurationData {
    storeCode?: string;
    ipAddress?: string;
    role?: string;
    propertiyDefines?: Defines[];
  
    constructor(data?: IConfigurationData) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.storeCode = data["storeCode"];
        this.ipAddress = data["ipAddress"];
        this.role = data["role"];
        if (Array.isArray(data["propertiyDefines"])) {
          this.propertiyDefines = [] as any;
          for (let item of data["propertiyDefines"])
            this.propertiyDefines!.push(Defines.fromJS(item));
        }
      }
    }
  
    static fromJS(data: any): ConfigurationData {
      data = typeof data === 'object' ? data : {};
      let result = new ConfigurationData();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["storeCode"] = this.storeCode;
      data["ipAddress"] = this.ipAddress;
      data["role"] = this.role;
      if (Array.isArray(this.propertiyDefines)) {
        data["propertiyDefines"] = [];
        for (let item of this.propertiyDefines)
          data["propertiyDefines"].push(item.toJSON());
      }
      return data;
    }
  
    clone(): ConfigurationData {
      const json = this.toJSON();
      let result = new ConfigurationData();
      result.init(json);
      return result;
    }
  }
  
  export interface IConfigurationData {
    storeCode?: string;
    ipAddress?: string;
    role?: string;
    propertiyDefines?: Defines[];
  }
  
  export class Properties implements IProperties {
    id?: string;
    storeCode?: string;
    propertyName?: string;
    propertyValue?: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    propertyId?: string | undefined;
  
    constructor(data?: IProperties) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.id = data["id"];
        this.storeCode = data["storeCode"];
        this.propertyName = data["propertyName"];
        this.propertyValue = data["propertyValue"];
        this.startDate = data["startDate"] ? new Date(data["startDate"].toString()) : <any>undefined;
        this.endDate = data["endDate"] ? new Date(data["endDate"].toString()) : <any>undefined;
        this.propertyId = data["propertyId"];
      }
    }
  
    static fromJS(data: any): Properties {
      data = typeof data === 'object' ? data : {};
      let result = new Properties();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["storeCode"] = this.storeCode;
      data["propertyName"] = this.propertyName;
      data["propertyValue"] = this.propertyValue;
      data["startDate"] = this.startDate ? this.startDate.toISOString() : <any>undefined;
      data["endDate"] = this.endDate ? this.endDate.toISOString() : <any>undefined;
      data["propertyId"] = this.propertyId;
      return data;
    }
  
    clone(): Properties {
      const json = this.toJSON();
      let result = new Properties();
      result.init(json);
      return result;
    }
  }
  
  export interface IProperties {
    id?: string;
    storeCode?: string;
    propertyName?: string;
    propertyValue?: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    propertyId?: string | undefined;
  }
  
  export class PropertyState implements IPropertyState {
    isActive?: boolean;
    effectiveDate?: Date;
    properties?: Properties[];
  
    constructor(data?: IPropertyState) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.isActive = data["isActive"];
        this.effectiveDate = data["effectiveDate"] ? new Date(data["effectiveDate"].toString()) : <any>undefined;
        if (Array.isArray(data["properties"])) {
          this.properties = [] as any;
          for (let item of data["properties"])
            this.properties!.push(Properties.fromJS(item));
        }
      }
    }
  
    static fromJS(data: any): PropertyState {
      data = typeof data === 'object' ? data : {};
      let result = new PropertyState();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["isActive"] = this.isActive;
      data["effectiveDate"] = this.effectiveDate ? this.effectiveDate.toISOString() : <any>undefined;
      if (Array.isArray(this.properties)) {
        data["properties"] = [];
        for (let item of this.properties)
          data["properties"].push(item.toJSON());
      }
      return data;
    }
  
    clone(): PropertyState {
      const json = this.toJSON();
      let result = new PropertyState();
      result.init(json);
      return result;
    }
  }
  
  export interface IPropertyState {
    isActive?: boolean;
    effectiveDate?: Date;
    properties?: Properties[];
  }
  
  export class StoreInfo implements IStoreInfo {
    id?: string;
    storeCode?: string;
    propertyDefines?: Defines[];
    propertyStatus?: PropertyState[];
  
    constructor(data?: IStoreInfo) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.id = data["id"];
        this.storeCode = data["storeCode"];
        if (Array.isArray(data["propertyDefines"])) {
          this.propertyDefines = [] as any;
          for (let item of data["propertyDefines"])
            this.propertyDefines!.push(Defines.fromJS(item));
        }
        if (Array.isArray(data["propertyStatus"])) {
          this.propertyStatus = [] as any;
          for (let item of data["propertyStatus"])
            this.propertyStatus!.push(PropertyState.fromJS(item));
        }
      }
    }
  
    static fromJS(data: any): StoreInfo {
      data = typeof data === 'object' ? data : {};
      let result = new StoreInfo();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["storeCode"] = this.storeCode;
      if (Array.isArray(this.propertyDefines)) {
        data["propertyDefines"] = [];
        for (let item of this.propertyDefines)
          data["propertyDefines"].push(item.toJSON());
      }
      if (Array.isArray(this.propertyStatus)) {
        data["propertyStatus"] = [];
        for (let item of this.propertyStatus)
          data["propertyStatus"].push(item.toJSON());
      }
      return data;
    }
  
    clone(): StoreInfo {
      const json = this.toJSON();
      let result = new StoreInfo();
      result.init(json);
      return result;
    }
  }
  
  export interface IStoreInfo {
    id?: string;
    storeCode?: string;
    propertyDefines?: Defines[];
    propertyStatus?: PropertyState[];
  }
  
  export class StoreInfoPagedCollectionResponse implements IStoreInfoPagedCollectionResponse {
    items?: StoreInfo[];
    nextPage?: string;
    previousPage?: string;
    totalItems?: number;
    totalPages?: number;
  
    constructor(data?: IStoreInfoPagedCollectionResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        if (Array.isArray(data["items"])) {
          this.items = [] as any;
          for (let item of data["items"])
            this.items!.push(StoreInfo.fromJS(item));
        }
        this.nextPage = data["nextPage"];
        this.previousPage = data["previousPage"];
        this.totalItems = data["totalItems"];
        this.totalPages = data["totalPages"];
      }
    }
  
    static fromJS(data: any): StoreInfoPagedCollectionResponse {
      data = typeof data === 'object' ? data : {};
      let result = new StoreInfoPagedCollectionResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      if (Array.isArray(this.items)) {
        data["items"] = [];
        for (let item of this.items)
          data["items"].push(item.toJSON());
      }
      data["nextPage"] = this.nextPage;
      data["previousPage"] = this.previousPage;
      data["totalItems"] = this.totalItems;
      data["totalPages"] = this.totalPages;
      return data;
    }
  
    clone(): StoreInfoPagedCollectionResponse {
      const json = this.toJSON();
      let result = new StoreInfoPagedCollectionResponse();
      result.init(json);
      return result;
    }
  }
  
  export interface IStoreInfoPagedCollectionResponse {
    items?: StoreInfo[];
    nextPage?: string;
    previousPage?: string;
    totalItems?: number;
    totalPages?: number;
  }
  
  export class StoreProperties implements IStoreProperties {
    storeCode?: string;
    properties?: Properties[];
  
    constructor(data?: IStoreProperties) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.storeCode = data["storeCode"];
        if (Array.isArray(data["properties"])) {
          this.properties = [] as any;
          for (let item of data["properties"])
            this.properties!.push(Properties.fromJS(item));
        }
      }
    }
  
    static fromJS(data: any): StoreProperties {
      data = typeof data === 'object' ? data : {};
      let result = new StoreProperties();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["storeCode"] = this.storeCode;
      if (Array.isArray(this.properties)) {
        data["properties"] = [];
        for (let item of this.properties)
          data["properties"].push(item.toJSON());
      }
      return data;
    }
  
    clone(): StoreProperties {
      const json = this.toJSON();
      let result = new StoreProperties();
      result.init(json);
      return result;
    }
  }
  
  export interface IStoreProperties {
    storeCode?: string;
    properties?: Properties[];
  }
  
  export class StorePropertiesPagedCollectionResponse implements IStorePropertiesPagedCollectionResponse {
    items?: StoreProperties[];
    nextPage?: string;
    previousPage?: string;
    totalItems?: number;
    totalPages?: number;
  
    constructor(data?: IStorePropertiesPagedCollectionResponse) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        if (Array.isArray(data["items"])) {
          this.items = [] as any;
          for (let item of data["items"])
            this.items!.push(StoreProperties.fromJS(item));
        }
        this.nextPage = data["nextPage"];
        this.previousPage = data["previousPage"];
        this.totalItems = data["totalItems"];
        this.totalPages = data["totalPages"];
      }
    }
  
    static fromJS(data: any): StorePropertiesPagedCollectionResponse {
      data = typeof data === 'object' ? data : {};
      let result = new StorePropertiesPagedCollectionResponse();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      if (Array.isArray(this.items)) {
        data["items"] = [];
        for (let item of this.items)
          data["items"].push(item.toJSON());
      }
      data["nextPage"] = this.nextPage;
      data["previousPage"] = this.previousPage;
      data["totalItems"] = this.totalItems;
      data["totalPages"] = this.totalPages;
      return data;
    }
  
    clone(): StorePropertiesPagedCollectionResponse {
      const json = this.toJSON();
      let result = new StorePropertiesPagedCollectionResponse();
      result.init(json);
      return result;
    }
  }
  
  export interface IStorePropertiesPagedCollectionResponse {
    items?: StoreProperties[];
    nextPage?: string;
    previousPage?: string;
    totalItems?: number;
    totalPages?: number;
  }
  
  export class WeatherForecast implements IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    readonly temperatureF?: number;
    summary?: string;
  
    constructor(data?: IWeatherForecast) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(data?: any) {
      if (data) {
        this.date = data["date"] ? new Date(data["date"].toString()) : <any>undefined;
        this.temperatureC = data["temperatureC"];
        (<any>this).temperatureF = data["temperatureF"];
        this.summary = data["summary"];
      }
    }
  
    static fromJS(data: any): WeatherForecast {
      data = typeof data === 'object' ? data : {};
      let result = new WeatherForecast();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["date"] = this.date ? this.date.toISOString() : <any>undefined;
      data["temperatureC"] = this.temperatureC;
      data["temperatureF"] = this.temperatureF;
      data["summary"] = this.summary;
      return data;
    }
  
    clone(): WeatherForecast {
      const json = this.toJSON();
      let result = new WeatherForecast();
      result.init(json);
      return result;
    }
  }
  
  export interface IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string;
  }
  
  export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;
  
    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
      super();
  
      this.message = message;
      this.status = status;
      this.response = response;
      this.headers = headers;
      this.result = result;
    }
  
    protected isApiException = true;
  
    static isApiException(obj: any): obj is ApiException {
      return obj.isApiException === true;
    }
  }
  
  function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
      throw result;
    else
      throw new ApiException(message, status, response, headers, null);
  }