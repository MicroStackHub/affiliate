# Affiliat API Endpoints
 
## Dashboard

### Get Dashboard Summary
```
GET /api/dashboard/summary
```
Returns overview statistics for the dashboard including earnings, referrals, clicks, and conversions.

**Response:**
```json
{
  "status": "success",
  "data": {
    "earnings": {
      "total": 12500.75,
      "pending": 750.25,
      "available": 11750.50,
      "currency": "INR"
    },
    "referrals": {
      "total": 156,
      "active": 124,
      "new": 12
    },
    "clicks": {
      "total": 3450,
      "today": 120,
      "conversion_rate": 4.52
    },
    "conversions": {
      "total": 156,
      "today": 5,
      "value": 450.25
    },
    "period": {
      "start_date": "2023-01-01",
      "end_date": "2023-01-31"
    }
  }
}
```

### Get Recent Activity
```
GET /api/dashboard/activity
```
Returns recent activities like new referrals, commissions earned, etc.

**Response:**
```json
{
  "status": "success",
  "data": {
    "activities": [
      {
        "id": "act_12345",
        "type": "new_referral",
        "description": "New referral from example.com",
        "amount": 25.00,
        "currency": "INR",
        "timestamp": "2023-01-15T14:30:45Z",
        "related_id": "ref_789"
      },
      {
        "id": "act_12344",
        "type": "commission_earned",
        "description": "Commission earned from Product X purchase",
        "amount": 42.50,
        "currency": "INR",
        "timestamp": "2023-01-15T12:15:30Z",
        "related_id": "ord_456"
      },
      {
        "id": "act_12343",
        "type": "payout_processed",
        "description": "Monthly payout processed",
        "amount": 1250.00,
        "currency": "INR",
        "timestamp": "2023-01-01T00:00:00Z",
        "related_id": "pay_123"
      }
    ],
    "pagination": {
      "total": 156,
      "page": 1,
      "limit": 10,
      "has_more": true
    }
  }
}
```

## Analytics

### Get Performance Metrics
```
GET /api/analytics/performance
```
Returns performance metrics over time (daily, weekly, monthly).

**Parameters:**
- `timeframe`: string (daily, weekly, monthly) - Default: monthly
- `start_date`: string (YYYY-MM-DD) - Optional
- `end_date`: string (YYYY-MM-DD) - Optional

**Response:**
```json
{
  "status": "success",
  "data": {
    "timeframe": "monthly",
    "period": {
      "start_date": "2023-01-01",
      "end_date": "2023-06-30"
    },
    "metrics": [
      {
        "date": "2023-01",
        "clicks": 1250,
        "conversions": 62,
        "conversion_rate": 4.96,
        "earnings": 1875.50,
        "cpc": 1.50,
        "epc": 1.50
      },
      {
        "date": "2023-02",
        "clicks": 1420,
        "conversions": 71,
        "conversion_rate": 5.00,
        "earnings": 2130.00,
        "cpc": 1.50,
        "epc": 1.50
      },
      {
        "date": "2023-03",
        "clicks": 1680,
        "conversions": 84,
        "conversion_rate": 5.00,
        "earnings": 2520.00,
        "cpc": 1.50,
        "epc": 1.50
      }
    ]
  }
}
```

### Get Traffic Sources
```
GET /api/analytics/traffic-sources
```
Returns data about where referral traffic is coming from.

**Parameters:**
- `start_date`: string (YYYY-MM-DD) - Optional
- `end_date`: string (YYYY-MM-DD) - Optional
- `limit`: integer - Default: 10

**Response:**
```json
{
  "status": "success",
  "data": {
    "period": {
      "start_date": "2023-01-01",
      "end_date": "2023-06-30"
    },
    "sources": [
      {
        "source": "google.com",
        "clicks": 2450,
        "conversions": 123,
        "conversion_rate": 5.02,
        "earnings": 3675.00
      },
      {
        "source": "facebook.com",
        "clicks": 1850,
        "conversions": 92,
        "conversion_rate": 4.97,
        "earnings": 2760.00
      },
      {
        "source": "instagram.com",
        "clicks": 1250,
        "conversions": 62,
        "conversion_rate": 4.96,
        "earnings": 1860.00
      },
      {
        "source": "direct",
        "clicks": 950,
        "conversions": 47,
        "conversion_rate": 4.95,
        "earnings": 1410.00
      }
    ],
    "pagination": {
      "total": 15,
      "limit": 10,
      "has_more": true
    }
  }
}
```

### Get Conversion Data
```
GET /api/analytics/conversions
```
Returns conversion rates and related metrics.

**Parameters:**
- `timeframe`: string (daily, weekly, monthly) - Default: monthly
- `start_date`: string (YYYY-MM-DD) - Optional
- `end_date`: string (YYYY-MM-DD) - Optional

**Response:**
```json
{
  "status": "success",
  "data": {
    "timeframe": "monthly",
    "period": {
      "start_date": "2023-01-01",
      "end_date": "2023-06-30"
    },
    "overall": {
      "clicks": 8500,
      "conversions": 425,
      "conversion_rate": 5.00,
      "average_order_value": 85.00,
      "total_revenue": 36125.00
    },
    "by_product": [
      {
        "product_id": "prod_123",
        "product_name": "Premium Subscription",
        "clicks": 3200,
        "conversions": 160,
        "conversion_rate": 5.00,
        "revenue": 16000.00
      },
      {
        "product_id": "prod_124",
        "product_name": "Basic Subscription",
        "clicks": 2800,
        "conversions": 140,
        "conversion_rate": 5.00,
        "revenue": 9800.00
      },
      {
        "product_id": "prod_125",
        "product_name": "Enterprise Subscription",
        "clicks": 2500,
        "conversions": 125,
        "conversion_rate": 5.00,
        "revenue": 10325.00
      }
    ]
  }
}
```

## Referrals

### Get Referrals List
```
GET /api/referrals
```
Returns a paginated list of referrals.

**Parameters:**
- `page`: integer - Default: 1
- `limit`: integer - Default: 20
- `status`: string (all, pending, active, converted) - Default: all
- `sort`: string (date_desc, date_asc, value_desc, value_asc) - Default: date_desc

**Response:**
```json
{
  "status": "success",
  "data": {
    "referrals": [
      {
        "id": "ref_12345",
        "source": "example.com",
        "referral_code": "ABC123",
        "status": "active",
        "date_referred": "2023-01-15T14:30:45Z",
        "last_activity": "2023-01-20T10:15:30Z",
        "conversion_status": "pending",
        "potential_value": 75.00,
        "earned_value": 0.00,
        "currency": "INR"
      },
      {
        "id": "ref_12344",
        "source": "facebook.com",
        "referral_code": "ABC122",
        "status": "active",
        "date_referred": "2023-01-14T09:45:22Z",
        "last_activity": "2023-01-19T16:30:10Z",
        "conversion_status": "converted",
        "potential_value": 50.00,
        "earned_value": 50.00,
        "currency": "INR"
      },
      {
        "id": "ref_12343",
        "source": "instagram.com",
        "referral_code": "ABC121",
        "status": "inactive",
        "date_referred": "2023-01-10T11:20:15Z",
        "last_activity": "2023-01-10T11:25:30Z",
        "conversion_status": "lost",
        "potential_value": 75.00,
        "earned_value": 0.00,
        "currency": "INR"
      }
    ],
    "pagination": {
      "total": 156,
      "page": 1,
      "limit": 20,
      "pages": 8,
      "has_more": true
    }
  }
}
```

### Get Referral Details
```
GET /api/referrals/{id}
```
Returns detailed information about a specific referral.

**Parameters:**
- `id`: string - Required (path parameter)

**Response:**
```json
{
  "status": "success",
  "data": {
    "referral": {
      "id": "ref_12345",
      "source": "example.com",
      "referral_code": "ABC123",
      "status": "active",
      "date_referred": "2023-01-15T14:30:45Z",
      "last_activity": "2023-01-20T10:15:30Z",
      "conversion_status": "pending",
      "potential_value": 75.00,
      "earned_value": 0.00,
      "currency": "INR",
      "user_info": {
        "email": "referred_user@example.com",
        "name": "Jane Smith",
        "country": "US",
        "signup_date": "2023-01-15T14:35:10Z"
      },
      "activity": [
        {
          "type": "signup",
          "timestamp": "2023-01-15T14:35:10Z",
          "description": "User signed up"
        },
        {
          "type": "product_view",
          "timestamp": "2023-01-15T14:40:22Z",
          "description": "Viewed Premium Plan",
          "product_id": "prod_123"
        },
        {
          "type": "cart_add",
          "timestamp": "2023-01-20T10:15:30Z",
          "description": "Added Premium Plan to cart",
          "product_id": "prod_123",
          "value": 75.00
        }
      ],
      "notes": "High-value potential customer"
    }
  }
}
```

## Affiliate Links

### Get Affiliate Links
```
GET /api/affiliate-links
```
Returns a list of the user's affiliate links.

**Parameters:**
- `page`: integer - Default: 1
- `limit`: integer - Default: 20
- `status`: string (all, active, inactive) - Default: all
- `sort`: string (date_desc, date_asc, clicks_desc, conversions_desc) - Default: date_desc

**Response:**
```json
{
  "status": "success",
  "data": {
    "links": [
      {
        "id": "link_12345",
        "name": "Summer Promotion",
        "url": "https://example.com/ref/ABC123",
        "short_url": "https://aff.li/ABC123",
        "target_url": "https://example.com/summer-sale",
        "campaign_id": "camp_456",
        "campaign_name": "Summer Sale 2023",
        "status": "active",
        "created_at": "2023-01-15T14:30:45Z",
        "last_used": "2023-01-20T10:15:30Z",
        "clicks": 245,
        "conversions": 12,
        "conversion_rate": 4.9,
        "earnings": 450.00,
        "currency": "USD"
      },
      {
        "id": "link_12344",
        "name": "Blog Post Link",
        "url": "https://example.com/ref/ABC122",
        "short_url": "https://aff.li/ABC122",
        "target_url": "https://example.com/product/premium",
        "campaign_id": "camp_123",
        "campaign_name": "Premium Product",
        "status": "active",
        "created_at": "2023-01-10T09:15:30Z",
        "last_used": "2023-01-19T16:30:10Z",
        "clicks": 189,
        "conversions": 9,
        "conversion_rate": 4.8,
        "earnings": 337.50,
        "currency": "USD"
      }
    ],
    "pagination": {
      "total": 15,
      "page": 1,
      "limit": 20,
      "pages": 1,
      "has_more": false
    }
  }
}
```

### Create Affiliate Link
```
POST /api/affiliate-links
```
Creates a new affiliate link.

**Request Body:**
```json
{
  "name": "New Promotion",
  "target_url": "https://example.com/new-product",
  "campaign_id": "camp_789",
  "custom_slug": "new-promo",  // Optional
  "utm_params": {  // Optional
    "source": "affiliate",
    "medium": "banner",
    "campaign": "spring2023"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "link": {
      "id": "link_12346",
      "name": "New Promotion",
      "url": "https://example.com/ref/ABC124",
      "short_url": "https://aff.li/new-promo",
      "target_url": "https://example.com/new-product?utm_source=affiliate&utm_medium=banner&utm_campaign=spring2023",
      "campaign_id": "camp_789",
      "campaign_name": "Spring Collection 2023",
      "status": "active",
      "created_at": "2023-01-25T11:30:45Z",
      "clicks": 0,
      "conversions": 0,
      "conversion_rate": 0,
      "earnings": 0.00,
      "currency": "USD"
    }
  }
}
```

### Update Affiliate Link
```
PUT /api/affiliate-links/{id}
```
Updates an existing affiliate link.

**Parameters:**
- `id`: string - Required (path parameter)

**Request Body:**
```json
{
  "name": "Updated Promotion Name",
  "target_url": "https://example.com/updated-product",
  "campaign_id": "camp_789",
  "status": "inactive",
  "utm_params": {
    "source": "affiliate",
    "medium": "email",
    "campaign": "spring2023"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "link": {
      "id": "link_12345",
      "name": "Updated Promotion Name",
      "url": "https://example.com/ref/ABC123",
      "short_url": "https://aff.li/ABC123",
      "target_url": "https://example.com/updated-product?utm_source=affiliate&utm_medium=email&utm_campaign=spring2023",
      "campaign_id": "camp_789",
      "campaign_name": "Spring Collection 2023",
      "status": "inactive",
      "created_at": "2023-01-15T14:30:45Z",
      "last_used": "2023-01-20T10:15:30Z",
      "clicks": 245,
      "conversions": 12,
      "conversion_rate": 4.9,
      "earnings": 450.00,
      "currency": "USD"
    }
  }
}
```

### Delete Affiliate Link
```
DELETE /api/affiliate-links/{id}
```
Deletes an affiliate link.

**Parameters:**
- `id`: string - Required (path parameter)

**Response:**
```json
{
  "status": "success",
  "data": {
    "message": "Affiliate link successfully deleted",
    "id": "link_12345"
  }
}
```

## Earnings

### Get Earnings Summary
```
GET /api/earnings/summary
```
Returns summary of earnings (total, pending, available).

**Parameters:**
- `period`: string (all_time, year_to_date, last_month, this_month) - Default: all_time

**Response:**
```json
{
  "status": "success",
  "data": {
    "period": "all_time",
    "earnings": {
      "total": 12500.75,
      "pending": 750.25,
      "available": 11750.50,
      "paid": 10000.00,
      "currency": "USD"
    },
    "stats": {
      "average_monthly": 1250.08,
      "highest_month": {
        "month": "2023-03",
        "amount": 2520.00
      },
      "lowest_month": {
        "month": "2023-01",
        "amount": 1875.50
      },
      "trend": "increasing"
    },
    "next_payout": {
      "date": "2023-02-01",
      "estimated_amount": 1750.50
    }
  }
}
```

### Get Earnings History
```
GET /api/earnings/history
```
Returns detailed earnings history with filtering options.

**Parameters:**
- `page`: integer - Default: 1
- `limit`: integer - Default: 20
- `start_date`: string (YYYY-MM-DD) - Optional
- `end_date`: string (YYYY-MM-DD) - Optional
- `status`: string (all, pending, paid) - Default: all
- `sort`: string (date_desc, date_asc, amount_desc, amount_asc) - Default: date_desc

**Response:**
```json
{
  "status": "success",
  "data": {
    "period": {
      "start_date": "2023-01-01",
      "end_date": "2023-01-31"
    },
    "transactions": [
      {
        "id": "trx_12345",
        "type": "commission",
        "status": "paid",
        "amount": 42.50,
        "currency": "USD",
        "date": "2023-01-15T14:30:45Z",
        "description": "Commission for Product X purchase",
        "reference": "ord_456",
        "payout_id": "pay_123",
        "source": {
          "referral_id": "ref_789",
          "link_id": "link_12345",
          "campaign_id": "camp_456"
        }
      },
      {
        "id": "trx_12344",
        "type": "commission",
        "status": "pending",
        "amount": 75.00,
        "currency": "USD",
        "date": "2023-01-20T10:15:30Z",
        "description": "Commission for Product Y purchase",
        "reference": "ord_457",
        "payout_id": null,
        "source": {
          "referral_id": "ref_790",
          "link_id": "link_12346",
          "campaign_id": "camp_456"
        }
      },
      {
        "id": "trx_12343",
        "type": "bonus",
        "status": "paid",
        "amount": 100.00,
        "currency": "USD",
        "date": "2023-01-10T09:45:22Z",
        "description": "Monthly performance bonus",
        "reference": "bonus_jan2023",
        "payout_id": "pay_123",
        "source": null
      }
    ],
    "summary": {
      "total_amount": 217.50,
      "pending_amount": 75.00,
      "paid_amount": 142.50,
      "transaction_count": 3
    },
    "pagination": {
      "total": 45,
      "page": 1,
      "limit": 20,
      "pages": 3,
      "has_more": true
    }
  }
}
```

## Payouts

### Get Payout Methods
```
GET /api/payouts/methods
```
Returns available payout methods for the user.

**Response:**
```json
{
  "status": "success",
  "data": {
    "methods": [
      {
        "id": "method_123",
        "type": "bank_transfer",
        "name": "Bank Transfer",
        "is_default": true,
        "details": {
          "bank_name": "Example Bank",
          "account_name": "John Doe",
          "account_number_last4": "6789",
          "routing_number_last4": "1234"
        },
        "created_at": "2022-12-01T10:00:00Z",
        "updated_at": "2023-01-15T14:30:45Z"
      },
      {
        "id": "method_124",
        "type": "paypal",
        "name": "PayPal",
        "is_default": false,
        "details": {
          "email": "j***@example.com"
        },
        "created_at": "2022-12-15T11:30:00Z",
        "updated_at": "2022-12-15T11:30:00Z"
      }
    ],
    "available_methods": [
      {
        "type": "bank_transfer",
        "name": "Bank Transfer",
        "currencies": ["USD", "EUR", "GBP"],
        "min_amount": 50.00,
        "max_amount": 10000.00,
        "processing_time": "3-5 business days",
        "fee": {
          "fixed": 0.00,
          "percentage": 0.00
        }
      },
      {
        "type": "paypal",
        "name": "PayPal",
        "currencies": ["USD", "EUR", "GBP"],
        "min_amount": 10.00,
        "max_amount": 5000.00,
        "processing_time": "1-2 business days",
        "fee": {
          "fixed": 0.00,
          "percentage": 1.00
        }
      },
      {
        "type": "crypto",
        "name": "Cryptocurrency",
        "currencies": ["BTC", "ETH"],
        "min_amount": 25.00,
        "max_amount": 25000.00,
        "processing_time": "1-24 hours",
        "fee": {
          "fixed": 5.00,
          "percentage": 0.50
        }
      }
    ]
  }
}
```

### Get Payout History
```
GET /api/payouts/history
```
Returns history of past payouts.

**Parameters:**
- `page`: integer - Default: 1
- `limit`: integer - Default: 20
- `start_date`: string (YYYY-MM-DD) - Optional
- `end_date`: string (YYYY-MM-DD) - Optional
- `status`: string (all, pending, processing, completed, failed) - Default: all
- `sort`: string (date_desc, date_asc, amount_desc, amount_asc) - Default: date_desc

**Response:**
```json
{
  "status": "success",
  "data": {
    "payouts": [
      {
        "id": "pay_123",
        "amount": 1250.00,
        "currency": "USD",
        "status": "completed",
        "method": {
          "id": "method_123",
          "type": "bank_transfer",
          "name": "Bank Transfer",
          "details": {
            "bank_name": "Example Bank",
            "account_number_last4": "6789"
          }
        },
        "requested_at": "2023-01-01T00:00:00Z",
        "processed_at": "2023-01-03T10:15:30Z",
        "reference": "PAY-123456789",
        "fee": 0.00,
        "net_amount": 1250.00,
        "notes": "Monthly payout"
      },
      {
        "id": "pay_122",
        "amount": 975.50,
        "currency": "USD",
        "status": "completed",
        "method": {
          "id": "method_123",
          "type": "bank_transfer",
          "name": "Bank Transfer",
          "details": {
            "bank_name": "Example Bank",
            "account_number_last4": "6789"
          }
        },
        "requested_at": "2022-12-01T00:00:00Z",
        "processed_at": "2022-12-03T11:30:45Z",
        "reference": "PAY-123456788",
        "fee": 0.00,
        "net_amount": 975.50,
        "notes": "Monthly payout"
      }
    ],
    "summary": {
      "total_payouts": 2,
      "total_amount": 2225.50,
      "currency": "USD"
    },
    "pagination": {
      "total": 12,
      "page": 1,
      "limit": 20,
      "pages": 1,
      "has_more": false
    }
  }
}
```

### Request Payout
```
POST /api/payouts/request
```
Submits a request for a payout.

**Request Body:**
```json
{
  "amount": 1000.00,
  "currency": "USD",
  "method_id": "method_123",
  "notes": "Requested early payout"  // Optional
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "payout": {
      "id": "pay_124",
      "amount": 1000.00,
      "currency": "USD",
      "status": "pending",
      "method": {
        "id": "method_123",
        "type": "bank_transfer",
        "name": "Bank Transfer",
        "details": {
          "bank_name": "Example Bank",
          "account_number_last4": "6789"
        }
      },
      "requested_at": "2023-01-25T14:30:45Z",
      "processed_at": null,
      "reference": null,
      "fee": 0.00,
      "net_amount": 1000.00,
      "notes": "Requested early payout",
      "estimated_processing_time": "3-5 business days"
    }
  }
}
```

## Marketing Tools

### Get Banners & Ads
```
GET /api/marketing/banners
```
Returns available banner ads and creatives.

**Parameters:**
- `campaign_id`: string - Optional (filter by campaign)
- `size`: string - Optional (filter by size: small, medium, large, all)
- `type`: string - Optional (filter by type: image, html, animated)

**Response:**
```json
{
  "status": "success",
  "data": {
    "banners": [
      {
        "id": "banner_123",
        "name": "Summer Sale Banner",
        "type": "image",
        "format": "jpg",
        "size": {
          "width": 728,
          "height": 90,
          "name": "leaderboard"
        },
        "url": "https://example.com/banners/summer_728x90.jpg",
        "thumbnail_url": "https://example.com/banners/summer_728x90_thumb.jpg",
        "campaign_id": "camp_456",
        "campaign_name": "Summer Sale 2023",
        "created_at": "2023-01-15T14:30:45Z",
        "html_code": "<a href=\"{{affiliate_link}}\"><img src=\"https://example.com/banners/summer_728x90.jpg\" alt=\"Summer Sale\" width=\"728\" height=\"90\"></a>"
      },
      {
        "id": "banner_124",
        "name": "Product Showcase",
        "type": "html",
        "format": "html",
        "size": {
          "width": 300,
          "height": 250,
          "name": "medium_rectangle"
        },
        "url": "https://example.com/banners/product_300x250.html",
        "thumbnail_url": "https://example.com/banners/product_300x250_thumb.jpg",
        "campaign_id": "camp_123",
        "campaign_name": "Premium Product",
        "created_at": "2023-01-10T09:15:30Z",
        "html_code": "<div class=\"banner\" style=\"width:300px;height:250px;\">...</div>"
      }
    ],
    "sizes": [
      {
        "name": "leaderboard",
        "width": 728,
        "height": 90,
        "description": "Leaderboard Banner"
      },
      {
        "name": "medium_rectangle",
        "width": 300,
        "height": 250,
        "description": "Medium Rectangle"
      },
      {
        "name": "wide_skyscraper",
        "width": 160,
        "height": 600,
        "description": "Wide Skyscraper"
      }
    ]
  }
}
```

### Get Social Media Templates
```
GET /api/marketing/social
```
Returns social media marketing templates.

**Parameters:**
- `platform`: string - Optional (filter by platform: facebook, twitter, instagram, linkedin, all)
- `campaign_id`: string - Optional (filter by campaign)

**Response:**
```json
{
  "status": "success",
  "data": {
    "templates": [
      {
        "id": "social_123",
        "name": "Summer Sale Announcement",
        "platform": "facebook",
        "type": "post",
        "content": "🔥 Summer Sale Alert! 🔥\n\nGet up to 50% off on all premium products. Limited time offer!\n\n{{affiliate_link}}",
        "image_url": "https://example.com/social/summer_fb.jpg",
        "campaign_id": "camp_456",
        "campaign_name": "Summer Sale 2023",
        "created_at": "2023-01-15T14:30:45Z"
      },
      {
        "id": "social_124",
        "name": "Product Feature",
        "platform": "instagram",
        "type": "post",
        "content": "Check out this amazing product that will transform your life! ✨\n\nClick the link in bio to learn more.\n\n#amazing #product #mustbuy",
        "image_url": "https://example.com/social/product_ig.jpg",
        "campaign_id": "camp_123",
        "campaign_name": "Premium Product",
        "created_at": "2023-01-10T09:15:30Z"
      }
    ],
    "platforms": [
      "facebook",
      "twitter",
      "instagram",
      "linkedin",
      "pinterest"
    ]
  }
}
```

### Get Email Templates
```
GET /api/marketing/emails
```
Returns email marketing templates.

**Parameters:**
- `campaign_id`: string - Optional (filter by campaign)
- `type`: string - Optional (filter by type: newsletter, promotion, announcement)

**Response:**
```json
{
  "status": "success",
  "data": {
    "templates": [
      {
        "id": "email_123",
        "name": "Summer Sale Announcement",
        "type": "promotion",
        "subject": "🔥 Summer Sale: Up to 50% Off!",
        "preview_text": "Limited time offer on all premium products",
        "html_content": "<!DOCTYPE html><html><head>...</head><body>...</body></html>",
        "text_content": "Summer Sale Alert! Get up to 50% off on all premium products. Limited time offer! {{affiliate_link}}",
        "campaign_id": "camp_456",
        "campaign_name": "Summer Sale 2023",
        "created_at": "2023-01-15T14:30:45Z",
        "thumbnail_url": "https://example.com/emails/summer_thumb.jpg"
      },
      {
        "id": "email_124",
        "name": "Product Newsletter",
        "type": "newsletter",
        "subject": "Discover Our Latest Products",
        "preview_text": "Check out what's new this month",
        "html_content": "<!DOCTYPE html><html><head>...</head><body>...</body></html>",
        "text_content": "Discover our latest products this month! {{affiliate_link}}",
        "campaign_id": "camp_123",
        "campaign_name": "Premium Product",
        "created_at": "2023-01-10T09:15:30Z",
        "thumbnail_url": "https://example.com/emails/newsletter_thumb.jpg"
      }
    ],
    "types": [
      "newsletter",
      "promotion",
      "announcement",
      "welcome",
      "follow_up"
    ]
  }
}
```

### Get Landing Pages
```
GET /api/marketing/landing-pages
```
Returns landing page templates.

**Parameters:**
- `campaign_id`: string - Optional (filter by campaign)
- `type`: string - Optional (filter by type: product, promotion, lead_capture)

**Response:**
```json
{
  "status": "success",
  "data": {
    "templates": [
      {
        "id": "lp_123",
        "name": "Summer Sale Landing Page",
        "type": "promotion",
        "description": "A high-converting landing page for summer promotions",
        "preview_url": "https://example.com/previews/summer-lp",
        "thumbnail_url": "https://example.com/landing-pages/summer_thumb.jpg",
        "campaign_id": "camp_456",
        "campaign_name": "Summer Sale 2023",
        "created_at": "2023-01-15T14:30:45Z",
        "conversion_rate": 4.8,
        "features": [
          "Responsive design",
          "Call-to-action buttons",
          "Testimonial section",
          "Countdown timer"
        ]
      },
      {
        "id": "lp_124",
        "name": "Product Showcase",
        "type": "product",
        "description": "A detailed product showcase with features and benefits",
        "preview_url": "https://example.com/previews/product-lp",
        "thumbnail_url": "https://example.com/landing-pages/product_thumb.jpg",
        "campaign_id": "camp_123",
        "campaign_name": "Premium Product",
        "created_at": "2023-01-10T09:15:30Z",
        "conversion_rate": 5.2,
        "features": [
          "Product gallery",
          "Feature comparison",
          "Customer reviews",
          "FAQ section"
        ]
      }
    ],
    "types": [
      "product",
      "promotion",
      "lead_capture",
      "event",
      "webinar"
    ]
  }
}
```

## Profile

### Get User Profile
```
GET /api/profile
```
Returns the user's profile information.

**Response:**
```json
{
  "status": "success",
  "data": {
    "profile": {
      "id": "user_12345",
      "personal": {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com",
        "phone": "+1234567890",
        "profile_image": "https://example.com/profiles/john.jpg",
        "date_joined": "2022-10-15T00:00:00Z",
        "last_login": "2023-01-25T14:30:45Z"
      },
      "business": {
        "company_name": "JD Marketing",
        "website": "https://jdmarketing.example.com",
        "tax_id": "TAX-123456789",
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip": "10001",
          "country": "US"
        },
        "industry": "Digital Marketing",
        "company_size": "1-10"
      },
      "preferences": {
        "language": "en",
        "timezone": "America/New_York",
        "currency": "USD",
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        },
        "theme": "light",
        "dashboard_widgets": [
          "earnings_summary",
          "recent_referrals",
          "performance_chart",
          "top_links"
        ]
      },
      "affiliate": {
        "status": "active",
        "level": "gold",
        "commission_rate": 10.0,
        "referral_code": "JOHNDOE10",
        "default_link": "https://example.com/ref/JOHNDOE10",
        "total_earnings": 12500.75,
        "total_referrals": 156
      }
    }
  }
}
```

### Update Personal Info
```
PUT /api/profile/personal
```
Updates the user's personal information.

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1987654321",
  "profile_image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD..."  // Optional, base64 encoded image
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "personal": {
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1987654321",
      "profile_image": "https://example.com/profiles/john_updated.jpg",
      "date_joined": "2022-10-15T00:00:00Z",
      "last_login": "2023-01-25T14:30:45Z"
    }
  }
}
```

### Update Business Details
```
PUT /api/profile/business
```
Updates the user's business details.

**Request Body:**
```json
{
  "company_name": "JD Digital Marketing",
  "website": "https://jddigital.example.com",
  "tax_id": "TAX-987654321",
  "address": {
    "street": "456 Market St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105",
    "country": "US"
  },
  "industry": "Digital Marketing & SEO",
  "company_size": "11-50"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "business": {
      "company_name": "JD Digital Marketing",
      "website": "https://jddigital.example.com",
      "tax_id": "TAX-987654321",
      "address": {
        "street": "456 Market St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105",
        "country": "US"
      },
      "industry": "Digital Marketing & SEO",
      "company_size": "11-50"
    }
  }
}
```

### Update Preferences
```
PUT /api/profile/preferences
```
Updates the user's preferences.

**Request Body:**
```json
{
  "language": "es",
  "timezone": "Europe/Madrid",
  "currency": "EUR",
  "notifications": {
    "email": true,
    "sms": true,
    "push": false
  },
  "theme": "dark",
  "dashboard_widgets": [
    "earnings_summary",
    "performance_chart",
    "recent_referrals",
    "payout_schedule"
  ]
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "preferences": {
      "language": "es",
      "timezone": "Europe/Madrid",
      "currency": "EUR",
      "notifications": {
        "email": true,
        "sms": true,
        "push": false
      },
      "theme": "dark",
      "dashboard_widgets": [
        "earnings_summary",
        "performance_chart",
        "recent_referrals",
        "payout_schedule"
      ]
    }
  }
}
```

## Settings

### Get Account Settings
```
GET /api/settings/account
```
Returns the user's account settings.

**Response:**
```json
{
  "status": "success",
  "data": {
    "account": {
      "id": "user_12345",
      "email": "john@example.com",
      "username": "johndoe",
      "created_at": "2022-10-15T00:00:00Z",
      "last_login": "2023-01-25T14:30:45Z",
      "security": {
        "password_last_changed": "2022-12-01T10:00:00Z",
        "two_factor_enabled": true,
        "two_factor_method": "app",
        "recovery_email": "recovery@example.com",
        "security_questions_set": true
      },
      "notifications": {
        "email": {
          "marketing": true,
          "account": true,
          "payments": true,
          "referrals": true,
          "performance": true
        },
        "sms": {
          "account": false,
          "payments": true,
          "referrals": false
        },
        "push": {
          "account": true,
          "payments": true,
          "referrals": true,
          "performance": false
        }
      },
      "api_access": {
        "enabled": true,
        "last_key_generated": "2023-01-10T09:15:30Z"
      },
      "account_status": "active"
    }
  }
}
```

### Update Password
```
PUT /api/settings/security/password
```
Updates the user's password.

**Request Body:**
```json
{
  "current_password": "oldPassword123",
  "new_password": "newSecurePassword456",
  "confirm_password": "newSecurePassword456"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "message": "Password successfully updated",
    "password_last_changed": "2023-01-25T14:30:45Z"
  }
}
```

### Update Two-Factor Authentication
```
PUT /api/settings/security/2fa
```
Enables or disables two-factor authentication.

**Request Body:**
```json
{
  "enabled": true,
  "method": "app",  // Options: app, sms, email
  "phone": "+1234567890",  // Required if method is sms
  "password": "currentPassword123"  // Required for verification
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "two_factor_enabled": true,
    "two_factor_method": "app",
    "setup_required": true,  // If true, additional setup is needed
    "setup_info": {
      "qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",  // For app method
      "secret_key": "ABCDEFGHIJKLMNOP",  // For app method
      "verification_required": true
    }
  }
}
```

### Update Notification Settings
```
PUT /api/settings/notifications
```
Updates notification preferences.

**Request Body:**
```json
{
  "email": {
    "marketing": false,
    "account": true,
    "payments": true,
    "referrals": true,
    "performance": true
  },
  "sms": {
    "account": true,
    "payments": true,
    "referrals": true
  },
  "push": {
    "account": true,
    "payments": true,
    "referrals": true,
    "performance": true
  }
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "notifications": {
      "email": {
        "marketing": false,
        "account": true,
        "payments": true,
        "referrals": true,
        "performance": true
      },
      "sms": {
        "account": true,
        "payments": true,
        "referrals": true
      },
      "push": {
        "account": true,
        "payments": true,
        "referrals": true,
        "performance": true
      }
    }
  }
}
```

### Delete Account
```
DELETE /api/settings/account
```
Initiates account deletion process.

**Request Body:**
```json
{
  "password": "currentPassword123",
  "reason": "switching_providers",  // Optional
  "feedback": "Found a better service for my needs",  // Optional
  "confirm_deletion": true  // Required, must be true
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "message": "Account deletion process initiated",
    "deletion_scheduled": "2023-02-01T00:00:00Z",  // 7 days grace period
    "can_cancel_until": "2023-02-01T00:00:00Z",
    "instructions": "You will receive an email with further instructions. Your account will be permanently deleted on the scheduled date unless you cancel the deletion process."
  }
}
```

## Support

### Get FAQs
```
GET /api/support/faqs
```
Returns frequently asked questions and answers.

**Parameters:**
- `category`: string - Optional (filter by category: general, account, payments, referrals, technical)
- `search`: string - Optional (search term in questions or answers)

**Response:**
```json
{
  "status": "success",
  "data": {
    "categories": [
      {
        "id": "cat_general",
        "name": "General",
        "faqs": [
          {
            "id": "faq_123",
            "question": "How does the affiliate program work?",
            "answer": "Our affiliate program allows you to earn commissions by referring customers to our products. You'll receive a unique referral link that you can share, and you'll earn a commission for each qualifying purchase made through your link.",
            "helpful_count": 156,
            "not_helpful_count": 12
          },
          {
            "id": "faq_124",
            "question": "When do I get paid?",
            "answer": "Payments are processed on the 1st of each month for all earnings that have cleared the 30-day holding period. You need a minimum balance of $50 to receive a payout.",
            "helpful_count": 142,
            "not_helpful_count": 8
          }
        ]
      },
      {
        "id": "cat_payments",
        "name": "Payments",
        "faqs": [
          {
            "id": "faq_125",
            "question": "What payment methods are available?",
            "answer": "We currently support bank transfers, PayPal, and cryptocurrency payments. You can set up your preferred payment method in your account settings.",
            "helpful_count": 98,
            "not_helpful_count": 5
          }
        ]
      }
    ]
  }
}
```

### Get Support Tickets
```
GET /api/support/tickets
```
Returns the user's support tickets.

**Parameters:**
- `page`: integer - Default: 1
- `limit`: integer - Default: 20
- `status`: string (all, open, closed, pending) - Default: all
- `sort`: string (date_desc, date_asc) - Default: date_desc

**Response:**
```json
{
  "status": "success",
  "data": {
    "tickets": [
      {
        "id": "ticket_12345",
        "subject": "Payment not received",
        "status": "open",
        "priority": "high",
        "category": "payments",
        "created_at": "2023-01-15T14:30:45Z",
        "updated_at": "2023-01-15T15:45:30Z",
        "last_response_at": "2023-01-15T15:45:30Z",
        "last_response_by": "support",
        "message_count": 3
      },
      {
        "id": "ticket_12344",
        "subject": "How to create custom affiliate links",
        "status": "closed",
        "priority": "medium",
        "category": "affiliate_links",
        "created_at": "2023-01-10T09:15:30Z",
        "updated_at": "2023-01-12T11:30:45Z",
        "last_response_at": "2023-01-12T11:30:45Z",
        "last_response_by": "user",
        "message_count": 4
      }
    ],
    "pagination": {
      "total": 12,
      "page": 1,
      "limit": 20,
      "pages": 1,
      "has_more": false
    }
  }
}
```

### Get Ticket Details
```
GET /api/support/tickets/{id}
```
Returns details of a specific support ticket.

**Parameters:**
- `id`: string - Required (path parameter)

**Response:**
```json
{
  "status": "success",
  "data": {
    "ticket": {
      "id": "ticket_12345",
      "subject": "Payment not received",
      "status": "open",
      "priority": "high",
      "category": "payments",
      "created_at": "2023-01-15T14:30:45Z",
      "updated_at": "2023-01-15T15:45:30Z",
      "messages": [
        {
          "id": "msg_123",
          "sender": {
            "type": "user",
            "id": "user_12345",
            "name": "John Doe"
          },
          "content": "I haven't received my January payout yet. It was supposed to be processed on January 1st.",
          "timestamp": "2023-01-15T14:30:45Z",
          "attachments": []
        },
        {
          "id": "msg_124",
          "sender": {
            "type": "support",
            "id": "agent_456",
            "name": "Sarah Support"
          },
          "content": "Hi John, I'm sorry to hear about the delay. Let me check the status of your payout right away.",
          "timestamp": "2023-01-15T15:15:20Z",
          "attachments": []
        },
        {
          "id": "msg_125",
          "sender": {
            "type": "support",
            "id": "agent_456",
            "name": "Sarah Support"
          },
          "content": "I've checked our payment system and found that there was a processing delay. Your payment has now been initiated and should arrive in your account within 1-2 business days. I apologize for the inconvenience.",
          "timestamp": "2023-01-15T15:45:30Z",
          "attachments": [
            {
              "id": "attach_123",
              "filename": "payment_confirmation.pdf",
              "size": 125640,
              "mime_type": "application/pdf",
              "url": "https://example.com/attachments/payment_confirmation.pdf"
            }
          ]
        }
      ],
      "related_entities": {
        "payout_id": "pay_123"
      }
    }
  }
}
```

### Create Support Ticket
```
POST /api/support/tickets
```
Creates a new support ticket.

**Request Body:**
```json
{
  "subject": "Issue with referral tracking",
  "category": "referrals",
  "priority": "medium",
  "message": "I referred a customer yesterday but the referral isn't showing up in my dashboard. The customer confirmed they made a purchase using my link.",
  "attachments": [
    {
      "filename": "screenshot.png",
      "content": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
      "mime_type": "image/png"
    }
  ],
  "related_entities": {
    "referral_code": "JOHNDOE10",
    "link_id": "link_12345"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "ticket": {
      "id": "ticket_12346",
      "subject": "Issue with referral tracking",
      "status": "open",
      "priority": "medium",
      "category": "referrals",
      "created_at": "2023-01-25T14:30:45Z",
      "updated_at": "2023-01-25T14:30:45Z",
      "messages": [
        {
          "id": "msg_126",
          "sender": {
            "type": "user",
            "id": "user_12345",
            "name": "John Doe"
          },
          "content": "I referred a customer yesterday but the referral isn't showing up in my dashboard. The customer confirmed they made a purchase using my link.",
          "timestamp": "2023-01-25T14:30:45Z",
          "attachments": [
            {
              "id": "attach_124",
              "filename": "screenshot.png",
              "size": 256480,
              "mime_type": "image/png",
              "url": "https://example.com/attachments/screenshot.png"
            }
          ]
        }
      ],
      "related_entities": {
        "referral_code": "JOHNDOE10",
        "link_id": "link_12345"
      },
      "estimated_response_time": "24 hours"
    }
  }
}
```

### Update Support Ticket
```
PUT /api/support/tickets/{id}
```
Updates an existing support ticket.

**Parameters:**
- `id`: string - Required (path parameter)

**Request Body:**
```json
{
  "status": "closed",  // Optional: update ticket status (open, closed, pending)
  "message": "Thank you for resolving my issue. I can now see the referral in my dashboard.",  // Optional: add a new message
  "attachments": [],  // Optional: add attachments to the message
  "priority": "low"  // Optional: update ticket priority
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "ticket": {
      "id": "ticket_12345",
      "subject": "Payment not received",
      "status": "closed",
      "priority": "low",
      "category": "payments",
      "created_at": "2023-01-15T14:30:45Z",
      "updated_at": "2023-01-25T16:45:30Z",
      "last_message": {
        "id": "msg_126",
        "sender": {
          "type": "user",
          "id": "user_12345",
          "name": "John Doe"
        },
        "content": "Thank you for resolving my issue. I can now see the referral in my dashboard.",
        "timestamp": "2023-01-25T16:45:30Z",
        "attachments": []
      },
      "message_count": 4
    }
  }
}
```

## Notes for Implementation

1. All endpoints should return appropriate HTTP status codes (200, 201, 400, 404, 500, etc.)
2. Pagination should be implemented for list endpoints using query parameters like `?page=1&limit=20`
3. Filtering and sorting should be supported where appropriate using query parameters
4. Consider implementing a consistent error response format, for example:
   ```json
   {
     "status": "error",
     "error": {
       "code": "validation_error",
       "message": "Invalid input parameters",
       "details": [
         {
           "field": "email",
           "message": "Must be a valid email address"
         }
       ]
     }
   }
   ```
5. API versioning should be considered for future compatibility (e.g., `/api/v1/dashboard/summary`)
6. Rate limiting should be implemented to prevent abuse
7. All responses should include appropriate CORS headers
8. Consider implementing GraphQL alongside REST for more flexible data fetching

Since authentication endpoints are not included, this API assumes some form of session or token-based authentication is already in place, with tokens being passed in request headers.