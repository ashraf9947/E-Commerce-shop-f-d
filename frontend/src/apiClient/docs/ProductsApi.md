# ProductsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productsCreate**](#productscreate) | **POST** /api/products/ | |
|[**productsDestroy**](#productsdestroy) | **DELETE** /api/products/{id}/ | |
|[**productsList**](#productslist) | **GET** /api/products/ | |
|[**productsPartialUpdate**](#productspartialupdate) | **PATCH** /api/products/{id}/ | |
|[**productsRetrieve**](#productsretrieve) | **GET** /api/products/{id}/ | |
|[**productsUpdate**](#productsupdate) | **PUT** /api/products/{id}/ | |

# **productsCreate**
> Product productsCreate(productRequest)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    ProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productRequest: ProductRequest; //

const { status, data } = await apiInstance.productsCreate(
    productRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productRequest** | **ProductRequest**|  | |


### Return type

**Product**

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

# **productsDestroy**
> productsDestroy()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; //A unique integer value identifying this product. (default to undefined)

const { status, data } = await apiInstance.productsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this product. | defaults to undefined|


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

# **productsList**
> Array<Product> productsList()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

const { status, data } = await apiInstance.productsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Product>**

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

# **productsPartialUpdate**
> Product productsPartialUpdate()


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    PatchedProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; //A unique integer value identifying this product. (default to undefined)
let patchedProductRequest: PatchedProductRequest; // (optional)

const { status, data } = await apiInstance.productsPartialUpdate(
    id,
    patchedProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedProductRequest** | **PatchedProductRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this product. | defaults to undefined|


### Return type

**Product**

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

# **productsRetrieve**
> Product productsRetrieve()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; //A unique integer value identifying this product. (default to undefined)

const { status, data } = await apiInstance.productsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this product. | defaults to undefined|


### Return type

**Product**

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

# **productsUpdate**
> Product productsUpdate(productRequest)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    ProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; //A unique integer value identifying this product. (default to undefined)
let productRequest: ProductRequest; //

const { status, data } = await apiInstance.productsUpdate(
    id,
    productRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productRequest** | **ProductRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this product. | defaults to undefined|


### Return type

**Product**

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

