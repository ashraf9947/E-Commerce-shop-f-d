# CheckoutApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkoutCreate**](#checkoutcreate) | **POST** /api/checkout/ | |

# **checkoutCreate**
> checkoutCreate()


### Example

```typescript
import {
    CheckoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CheckoutApi(configuration);

const { status, data } = await apiInstance.checkoutCreate();
```

### Parameters
This endpoint does not have any parameters.


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
|**201** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

