# CartItemsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cartItemsCreate**](#cartitemscreate) | **POST** /api/cart-items/ | |
|[**cartItemsDestroy**](#cartitemsdestroy) | **DELETE** /api/cart-items/{id}/ | |
|[**cartItemsList**](#cartitemslist) | **GET** /api/cart-items/ | |
|[**cartItemsPartialUpdate**](#cartitemspartialupdate) | **PATCH** /api/cart-items/{id}/ | |
|[**cartItemsRetrieve**](#cartitemsretrieve) | **GET** /api/cart-items/{id}/ | |
|[**cartItemsUpdate**](#cartitemsupdate) | **PUT** /api/cart-items/{id}/ | |

# **cartItemsCreate**
> CartItem cartItemsCreate(cartItemRequest)


### Example

```typescript
import {
    CartItemsApi,
    Configuration,
    CartItemRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

let cartItemRequest: CartItemRequest; //

const { status, data } = await apiInstance.cartItemsCreate(
    cartItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartItemRequest** | **CartItemRequest**|  | |


### Return type

**CartItem**

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

# **cartItemsDestroy**
> cartItemsDestroy()


### Example

```typescript
import {
    CartItemsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cartItemsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **cartItemsList**
> Array<CartItem> cartItemsList()


### Example

```typescript
import {
    CartItemsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

const { status, data } = await apiInstance.cartItemsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CartItem>**

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

# **cartItemsPartialUpdate**
> CartItem cartItemsPartialUpdate()


### Example

```typescript
import {
    CartItemsApi,
    Configuration,
    PatchedCartItemRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

let id: string; // (default to undefined)
let patchedCartItemRequest: PatchedCartItemRequest; // (optional)

const { status, data } = await apiInstance.cartItemsPartialUpdate(
    id,
    patchedCartItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCartItemRequest** | **PatchedCartItemRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CartItem**

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

# **cartItemsRetrieve**
> CartItem cartItemsRetrieve()


### Example

```typescript
import {
    CartItemsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cartItemsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CartItem**

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

# **cartItemsUpdate**
> CartItem cartItemsUpdate(cartItemRequest)


### Example

```typescript
import {
    CartItemsApi,
    Configuration,
    CartItemRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartItemsApi(configuration);

let id: string; // (default to undefined)
let cartItemRequest: CartItemRequest; //

const { status, data } = await apiInstance.cartItemsUpdate(
    id,
    cartItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartItemRequest** | **CartItemRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CartItem**

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

