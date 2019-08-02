export interface ApiError {
    status: number;
    message: string;
    messageInterpolateParams?: Object;
    errorCode?: string;
}
