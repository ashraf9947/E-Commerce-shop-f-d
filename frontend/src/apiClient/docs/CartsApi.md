# CartsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cartsCreate**](#cartscreate) | **POST** /api/carts/ | |
|[**cartsDestroy**](#cartsdestroy) | **DELETE** /api/carts/{id}/ | |
|[**cartsList**](#cartslist) | **GET** /api/carts/ | |
|[**cartsMeRetrieve**](#cartsmeretrieve) | **GET** /api/carts/me/ | |
|[**cartsPartialUpdate**](#cartspartialupdate) | **PATCH** /api/carts/{id}/ | |
|[**cartsRetrieve**](#cartsretrieve) | **GET** /api/carts/{id}/ | |
|[**cartsUpdate**](#cartsupdate) | **PUT** /api/carts/{id}/ | |

# **cartsCreate**
> Cart cartsCreate(cartRequest)


### Example

```typescript
import {
    CartsApi,
    Configuration,
    CartRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

let cartRequest: CartRequest; //

const { status, data } = await apiInstance.cartsCreate(
    cartRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartRequest** | **CartRequest**|  | |


### Return type

**Cart**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsDestroy**
> cartsDestroy()


### Example

```typescript
import {
    CartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

let id: number; //A unique integer value identifying this cart. (default to undefined)

const { status, data } = await apiInstance.cartsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this cart. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsList**
> Array<Cart> cartsList()


### Example

```typescript
import {
    CartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

const { status, data } = await apiInstance.cartsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Cart>**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsMeRetrieve**
> Cart cartsMeRetrieve()


### Example

```typescript
import {
    CartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

const { status, data } = await apiInstance.cartsMeRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Cart**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsPartialUpdate**
> Cart cartsPartialUpdate()


### Example

```typescript
import {
    CartsApi,
    Configuration,
    PatchedCartRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

let id: number; //A unique integer value identifying this cart. (default to undefined)
let patchedCartRequest: PatchedCartRequest; // (optional)

const { status, data } = await apiInstance.cartsPartialUpdate(
    id,
    patchedCartRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCartRequest** | **PatchedCartRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this cart. | defaults to undefined|


### Return type

**Cart**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsRetrieve**
> Cart cartsRetrieve()


### Example

```typescript
import {
    CartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

let id: number; //A unique integer value identifying this cart. (default to undefined)

const { status, data } = await apiInstance.cartsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this cart. | defaults to undefined|


### Return type

**Cart**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cartsUpdate**
> Cart cartsUpdate(cartRequest)


### Example

```typescript
import {
    CartsApi,
    Configuration,
    CartRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartsApi(configuration);

let id: number; //A unique integer value identifying this cart. (default to undefined)
let cartRequest: CartRequest; //

const { status, data } = await apiInstance.cartsUpdate(
    id,
    cartRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartRequest** | **CartRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this cart. | defaults to undefined|


### Return type

**Cart**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

