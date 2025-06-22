# RegisterApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**registerCreate**](#registercreate) | **POST** /api/register/ | |

# **registerCreate**
> registerCreate()


### Example

```typescript
import {
    RegisterApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegisterApi(configuration);

const { status, data } = await apiInstance.registerCreate();
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

