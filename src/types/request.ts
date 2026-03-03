export type Response<type> = Promise<{
    isError: boolean;
    data?: type;
}>