# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**user** | **number** |  | [default to undefined]
**status** | [**StatusEnum**](StatusEnum.md) |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**items** | [**Array&lt;OrderItem&gt;**](OrderItem.md) |  | [readonly] [default to undefined]
**total** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Order } from './api';

const instance: Order = {
    id,
    user,
    status,
    created_at,
    items,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
