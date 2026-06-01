import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ErrorResponse, HealthStatus, ListPropertiesParams, LocationVerifyInput, LocationVerifyResult, Package, Property, PropertyInput, PropertyStats, PropertyUpdate, User, UserInput, UserPackage, UserPackageInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListPropertiesUrl: (params?: ListPropertiesParams) => string;
/**
 * @summary List all verified properties
 */
export declare const listProperties: (params?: ListPropertiesParams, options?: RequestInit) => Promise<Property[]>;
export declare const getListPropertiesQueryKey: (params?: ListPropertiesParams) => readonly ["/api/properties", ...ListPropertiesParams[]];
export declare const getListPropertiesQueryOptions: <TData = Awaited<ReturnType<typeof listProperties>>, TError = ErrorType<unknown>>(params?: ListPropertiesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listProperties>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPropertiesQueryResult = NonNullable<Awaited<ReturnType<typeof listProperties>>>;
export type ListPropertiesQueryError = ErrorType<unknown>;
/**
 * @summary List all verified properties
 */
export declare function useListProperties<TData = Awaited<ReturnType<typeof listProperties>>, TError = ErrorType<unknown>>(params?: ListPropertiesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreatePropertyUrl: () => string;
/**
 * @summary List a new property
 */
export declare const createProperty: (propertyInput: PropertyInput, options?: RequestInit) => Promise<Property>;
export declare const getCreatePropertyMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProperty>>, TError, {
        data: BodyType<PropertyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createProperty>>, TError, {
    data: BodyType<PropertyInput>;
}, TContext>;
export type CreatePropertyMutationResult = NonNullable<Awaited<ReturnType<typeof createProperty>>>;
export type CreatePropertyMutationBody = BodyType<PropertyInput>;
export type CreatePropertyMutationError = ErrorType<ErrorResponse>;
/**
* @summary List a new property
*/
export declare const useCreateProperty: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProperty>>, TError, {
        data: BodyType<PropertyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createProperty>>, TError, {
    data: BodyType<PropertyInput>;
}, TContext>;
export declare const getListFeaturedPropertiesUrl: () => string;
/**
 * @summary Get featured/highlighted properties
 */
export declare const listFeaturedProperties: (options?: RequestInit) => Promise<Property[]>;
export declare const getListFeaturedPropertiesQueryKey: () => readonly ["/api/properties/featured"];
export declare const getListFeaturedPropertiesQueryOptions: <TData = Awaited<ReturnType<typeof listFeaturedProperties>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFeaturedProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listFeaturedProperties>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListFeaturedPropertiesQueryResult = NonNullable<Awaited<ReturnType<typeof listFeaturedProperties>>>;
export type ListFeaturedPropertiesQueryError = ErrorType<unknown>;
/**
 * @summary Get featured/highlighted properties
 */
export declare function useListFeaturedProperties<TData = Awaited<ReturnType<typeof listFeaturedProperties>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFeaturedProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPropertyStatsUrl: () => string;
/**
 * @summary Get aggregate property stats (for dashboard/homepage)
 */
export declare const getPropertyStats: (options?: RequestInit) => Promise<PropertyStats>;
export declare const getGetPropertyStatsQueryKey: () => readonly ["/api/properties/stats"];
export declare const getGetPropertyStatsQueryOptions: <TData = Awaited<ReturnType<typeof getPropertyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPropertyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPropertyStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPropertyStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getPropertyStats>>>;
export type GetPropertyStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get aggregate property stats (for dashboard/homepage)
 */
export declare function useGetPropertyStats<TData = Awaited<ReturnType<typeof getPropertyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPropertyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPropertyUrl: (id: number) => string;
/**
 * @summary Get a single property
 */
export declare const getProperty: (id: number, options?: RequestInit) => Promise<Property>;
export declare const getGetPropertyQueryKey: (id: number) => readonly [`/api/properties/${number}`];
export declare const getGetPropertyQueryOptions: <TData = Awaited<ReturnType<typeof getProperty>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProperty>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProperty>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPropertyQueryResult = NonNullable<Awaited<ReturnType<typeof getProperty>>>;
export type GetPropertyQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a single property
 */
export declare function useGetProperty<TData = Awaited<ReturnType<typeof getProperty>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProperty>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdatePropertyUrl: (id: number) => string;
/**
 * @summary Update a property listing
 */
export declare const updateProperty: (id: number, propertyUpdate: PropertyUpdate, options?: RequestInit) => Promise<Property>;
export declare const getUpdatePropertyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProperty>>, TError, {
        id: number;
        data: BodyType<PropertyUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateProperty>>, TError, {
    id: number;
    data: BodyType<PropertyUpdate>;
}, TContext>;
export type UpdatePropertyMutationResult = NonNullable<Awaited<ReturnType<typeof updateProperty>>>;
export type UpdatePropertyMutationBody = BodyType<PropertyUpdate>;
export type UpdatePropertyMutationError = ErrorType<unknown>;
/**
* @summary Update a property listing
*/
export declare const useUpdateProperty: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProperty>>, TError, {
        id: number;
        data: BodyType<PropertyUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateProperty>>, TError, {
    id: number;
    data: BodyType<PropertyUpdate>;
}, TContext>;
export declare const getDeletePropertyUrl: (id: number) => string;
/**
 * @summary Delete a property listing
 */
export declare const deleteProperty: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeletePropertyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteProperty>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteProperty>>, TError, {
    id: number;
}, TContext>;
export type DeletePropertyMutationResult = NonNullable<Awaited<ReturnType<typeof deleteProperty>>>;
export type DeletePropertyMutationError = ErrorType<unknown>;
/**
* @summary Delete a property listing
*/
export declare const useDeleteProperty: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteProperty>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteProperty>>, TError, {
    id: number;
}, TContext>;
export declare const getVerifyPropertyLocationUrl: (id: number) => string;
/**
 * @summary Verify that a property's location coordinates match the given address
 */
export declare const verifyPropertyLocation: (id: number, locationVerifyInput: LocationVerifyInput, options?: RequestInit) => Promise<LocationVerifyResult>;
export declare const getVerifyPropertyLocationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyPropertyLocation>>, TError, {
        id: number;
        data: BodyType<LocationVerifyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof verifyPropertyLocation>>, TError, {
    id: number;
    data: BodyType<LocationVerifyInput>;
}, TContext>;
export type VerifyPropertyLocationMutationResult = NonNullable<Awaited<ReturnType<typeof verifyPropertyLocation>>>;
export type VerifyPropertyLocationMutationBody = BodyType<LocationVerifyInput>;
export type VerifyPropertyLocationMutationError = ErrorType<unknown>;
/**
* @summary Verify that a property's location coordinates match the given address
*/
export declare const useVerifyPropertyLocation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyPropertyLocation>>, TError, {
        id: number;
        data: BodyType<LocationVerifyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof verifyPropertyLocation>>, TError, {
    id: number;
    data: BodyType<LocationVerifyInput>;
}, TContext>;
export declare const getListUsersUrl: () => string;
/**
 * @summary List all users
 */
export declare const listUsers: (options?: RequestInit) => Promise<User[]>;
export declare const getListUsersQueryKey: () => readonly ["/api/users"];
export declare const getListUsersQueryOptions: <TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
export type ListUsersQueryError = ErrorType<unknown>;
/**
 * @summary List all users
 */
export declare function useListUsers<TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateUserUrl: () => string;
/**
 * @summary Create / register a user
 */
export declare const createUser: (userInput: UserInput, options?: RequestInit) => Promise<User>;
export declare const getCreateUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<UserInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<UserInput>;
}, TContext>;
export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>;
export type CreateUserMutationBody = BodyType<UserInput>;
export type CreateUserMutationError = ErrorType<unknown>;
/**
* @summary Create / register a user
*/
export declare const useCreateUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<UserInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<UserInput>;
}, TContext>;
export declare const getGetUserUrl: (id: number) => string;
/**
 * @summary Get a user by ID
 */
export declare const getUser: (id: number, options?: RequestInit) => Promise<User>;
export declare const getGetUserQueryKey: (id: number) => readonly [`/api/users/${number}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<unknown>;
/**
 * @summary Get a user by ID
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetUserPropertiesUrl: (id: number) => string;
/**
 * @summary Get all properties listed by a user
 */
export declare const getUserProperties: (id: number, options?: RequestInit) => Promise<Property[]>;
export declare const getGetUserPropertiesQueryKey: (id: number) => readonly [`/api/users/${number}/properties`];
export declare const getGetUserPropertiesQueryOptions: <TData = Awaited<ReturnType<typeof getUserProperties>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUserProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUserProperties>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserPropertiesQueryResult = NonNullable<Awaited<ReturnType<typeof getUserProperties>>>;
export type GetUserPropertiesQueryError = ErrorType<unknown>;
/**
 * @summary Get all properties listed by a user
 */
export declare function useGetUserProperties<TData = Awaited<ReturnType<typeof getUserProperties>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUserProperties>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListPackagesUrl: () => string;
/**
 * @summary List all available subscription packages
 */
export declare const listPackages: (options?: RequestInit) => Promise<Package[]>;
export declare const getListPackagesQueryKey: () => readonly ["/api/packages"];
export declare const getListPackagesQueryOptions: <TData = Awaited<ReturnType<typeof listPackages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPackages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPackages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPackagesQueryResult = NonNullable<Awaited<ReturnType<typeof listPackages>>>;
export type ListPackagesQueryError = ErrorType<unknown>;
/**
 * @summary List all available subscription packages
 */
export declare function useListPackages<TData = Awaited<ReturnType<typeof listPackages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPackages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPackageUrl: (id: number) => string;
/**
 * @summary Get a single package
 */
export declare const getPackage: (id: number, options?: RequestInit) => Promise<Package>;
export declare const getGetPackageQueryKey: (id: number) => readonly [`/api/packages/${number}`];
export declare const getGetPackageQueryOptions: <TData = Awaited<ReturnType<typeof getPackage>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPackage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPackage>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPackageQueryResult = NonNullable<Awaited<ReturnType<typeof getPackage>>>;
export type GetPackageQueryError = ErrorType<unknown>;
/**
 * @summary Get a single package
 */
export declare function useGetPackage<TData = Awaited<ReturnType<typeof getPackage>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPackage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListUserPackagesUrl: () => string;
/**
 * @summary List all user package subscriptions
 */
export declare const listUserPackages: (options?: RequestInit) => Promise<UserPackage[]>;
export declare const getListUserPackagesQueryKey: () => readonly ["/api/user-packages"];
export declare const getListUserPackagesQueryOptions: <TData = Awaited<ReturnType<typeof listUserPackages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUserPackages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUserPackages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUserPackagesQueryResult = NonNullable<Awaited<ReturnType<typeof listUserPackages>>>;
export type ListUserPackagesQueryError = ErrorType<unknown>;
/**
 * @summary List all user package subscriptions
 */
export declare function useListUserPackages<TData = Awaited<ReturnType<typeof listUserPackages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUserPackages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getPurchasePackageUrl: () => string;
/**
 * @summary Subscribe a user to a package
 */
export declare const purchasePackage: (userPackageInput: UserPackageInput, options?: RequestInit) => Promise<UserPackage>;
export declare const getPurchasePackageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof purchasePackage>>, TError, {
        data: BodyType<UserPackageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof purchasePackage>>, TError, {
    data: BodyType<UserPackageInput>;
}, TContext>;
export type PurchasePackageMutationResult = NonNullable<Awaited<ReturnType<typeof purchasePackage>>>;
export type PurchasePackageMutationBody = BodyType<UserPackageInput>;
export type PurchasePackageMutationError = ErrorType<unknown>;
/**
* @summary Subscribe a user to a package
*/
export declare const usePurchasePackage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof purchasePackage>>, TError, {
        data: BodyType<UserPackageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof purchasePackage>>, TError, {
    data: BodyType<UserPackageInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map