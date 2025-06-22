# OrdersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ordersCreate**](#orderscreate) | **POST** /api/orders/ | |
|[**ordersDestroy**](#ordersdestroy) | **DELETE** /api/orders/{id}/ | |
|[**ordersList**](#orderslist) | **GET** /api/orders/ | |
|[**ordersPartialUpdate**](#orderspartialupdate) | **PATCH** /api/orders/{id}/ | |
|[**ordersRetrieve**](#ordersretrieve) | **GET** /api/orders/{id}/ | |
|[**ordersUpdate**](#ordersupdate) | **PUT** /api/orders/{id}/ | |

# **ordersCreate**
> Order ordersCreate(orderRequest)


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderRequest: OrderRequest; //

const { status, data } = await apiInstance.ordersCreate(
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**|  | |


### Return type

**Order**

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

# **ordersDestroy**
> ordersDestroy()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.ordersDestroy(
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

# **ordersList**
> Array<Order> ordersList()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

const { status, data } = await apiInstance.ordersList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Order>**

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

# **ordersPartialUpdate**
> Order ordersPartialUpdate()


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    PatchedOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; // (default to undefined)
let patchedOrderRequest: PatchedOrderRequest; // (optional)

const { status, data } = await apiInstance.ordersPartialUpdate(
    id,
    patchedOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedOrderRequest** | **PatchedOrderRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Order**

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

# **ordersRetrieve**
> Order ordersRetrieve()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.ordersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Order**

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

# **ordersUpdate**
> Order ordersUpdate(orderRequest)


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; // (default to undefined)
let orderRequest: OrderRequest; //

const { status, data } = await apiInstance.ordersUpdate(
    id,
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Order**

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

