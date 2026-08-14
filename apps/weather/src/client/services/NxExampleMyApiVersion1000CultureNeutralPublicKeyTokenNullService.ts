/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeatherForecast } from '../models/WeatherForecast';
import type { weatherforecast2 } from '../models/weatherforecast2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNullService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns WeatherForecast OK
     * @throws ApiError
     */
    public getWeatherForecast(): CancelablePromise<Array<WeatherForecast>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/weatherforecast',
        });
    }
    /**
     * @returns weatherforecast2 OK
     * @throws ApiError
     */
    public getWeatherForecast2(): CancelablePromise<Array<weatherforecast2>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/weatherforeca3st2',
        });
    }
}
