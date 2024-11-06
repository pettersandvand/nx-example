/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { NxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNullService } from './services/NxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNullService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class API {
    public readonly nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull: NxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNullService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull = new NxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNullService(this.request);
    }
}

