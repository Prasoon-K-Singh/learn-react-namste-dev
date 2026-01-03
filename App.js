import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData.card.card.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "831832",
          name: "Saba Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/9/ed1cdc6f-9d8e-4365-b5ce-35cc0e0b9481_8fb504a5-4f3b-46db-b0fd-81a3a3cdf949.jpg",
          locality: "Talaq Mahal",
          areaName: "Naveen Market",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Tandoor"],
          avgRating: 4.2,
          parentId: "254123",
          avgRatingString: "4.2",
          totalRatingsString: "783",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=831832&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "301698",
          name: "Barbeque Nation",
          cloudinaryImageId: "dpe0p9yyhxlsu6hapf6q",
          locality: "Swaroop Nagar",
          areaName: "Mall Road",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Barbecue",
            "Kebabs",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 4.3,
          parentId: "2438",
          avgRatingString: "4.3",
          totalRatingsString: "1.4K+",
          promoted: true,
          adTrackingId:
            "cid=b2440c26-7795-41ef-af4e-9da36b3050f4~p=6~adgrpid=b2440c26-7795-41ef-af4e-9da36b3050f4#ag32~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=301698~plpr=COLLECTION~eid=70c077ab-722e-42ef-a8dd-90fc65f213bd~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹98",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "5.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "b2440c26-7795-41ef-af4e-9da36b3050f4",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=301698&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "125424",
          name: "Ajmeri Darbar Chamanganj",
          cloudinaryImageId: "v8vwffojtsoarkcnsoih",
          locality: "Chaman Ganj",
          areaName: "Chaman Ganj",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Mughlai", "North Indian", "Tandoor"],
          avgRating: 4.3,
          parentId: "28360",
          avgRatingString: "4.3",
          totalRatingsString: "21K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=125424&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "126281",
          name: "UBQ-Meals,Thalis & Bowls",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/372a4395-5763-4925-81ae-48627317a513_126281.JPG",
          locality: "Ashok Nagar",
          areaName: "Mall Road",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Barbecue",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 4.3,
          parentId: "617376",
          avgRatingString: "4.3",
          totalRatingsString: "3.6K+",
          promoted: true,
          adTrackingId:
            "cid=5205115e-acc2-4440-b64a-dbb347157b37~p=9~adgrpid=5205115e-acc2-4440-b64a-dbb347157b37#ag32~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=126281~plpr=COLLECTION~eid=de1cdda4-deef-4c0c-9f0f-534409fb36a9~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "5205115e-acc2-4440-b64a-dbb347157b37",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=126281&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "370038",
          name: "Al Huboor",
          cloudinaryImageId: "edzoa0ornwv7iv7lt33g",
          locality: "Naveen Market Road",
          areaName: "Colonel Ganj",
          costForTwo: "₹300 for two",
          cuisines: ["Mughlai", "Biryani", "Afghani", "Tandoor"],
          avgRating: 4.2,
          parentId: "29155",
          avgRatingString: "4.2",
          totalRatingsString: "9.8K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=370038&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "241296",
          name: "Biryani By Kilo",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/11ca9f8c-cdc5-4d25-80e5-87375404815b_241296.JPG",
          locality: "Swaroop Nagar",
          areaName: "Fazalganj",
          costForTwo: "₹499 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "130",
          avgRatingString: "4.3",
          totalRatingsString: "8.7K+",
          promoted: true,
          adTrackingId:
            "cid=220a17cc-0802-4db8-89ac-a9de2146f860~p=10~adgrpid=220a17cc-0802-4db8-89ac-a9de2146f860#ag28~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=241296~plpr=COLLECTION~eid=9eea2bdc-f83d-4e9d-a030-e1c1d0cbb55a~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-04 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "681",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "220a17cc-0802-4db8-89ac-a9de2146f860",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=241296&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1053949",
          name: "Honest Bowl",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/24/5266e06d-a7a9-4df2-a220-6ad703819637_37105033-8292-4877-ba75-c340e2808ffd.jpeg",
          locality: "Permat",
          areaName: "Harsh Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "High Protein", "Biryani"],
          avgRating: 4.4,
          parentId: "612552",
          avgRatingString: "4.4",
          totalRatingsString: "156",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "High Protein",
                      imageId: "High%20Protein/rx%20tag%205.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1053949&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "361087",
          name: "The Good Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/5f45f33f-b4c0-48b5-b8da-7309819958fe_361087.jpg",
          locality: "Permat",
          areaName: "Harsh Nagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.5,
          parentId: "7918",
          avgRatingString: "4.5",
          totalRatingsString: "1.6K+",
          promoted: true,
          adTrackingId:
            "cid=70e256c0-08c2-4767-863c-fc2de64862c0~p=12~adgrpid=70e256c0-08c2-4767-863c-fc2de64862c0#ag27~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361087~plpr=COLLECTION~eid=ba1576c3-ebf5-4c45-9b55-9af5a3528037~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "70e256c0-08c2-4767-863c-fc2de64862c0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=361087&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1122295",
          name: "Al-Baik.Com",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/15/fe854f53-db3d-418d-bcb8-5891e914267a_1122295.jpg",
          locality: "Naveen Market",
          areaName: "Naveen Market",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese", "Burgers", "North Indian"],
          avgRating: 4.2,
          parentId: "6315",
          avgRatingString: "4.2",
          totalRatingsString: "15",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-04 01:15:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1122295&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "361088",
          name: "The Biryani Life",
          cloudinaryImageId: "vhnpz3qlvke8tqwtkyv3",
          locality: "Permat",
          areaName: "Harsh Nagar",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "8496",
          avgRatingString: "4.1",
          totalRatingsString: "800",
          promoted: true,
          adTrackingId:
            "cid=e87e8062-8d71-4de7-aee5-5826b6502e18~p=13~adgrpid=e87e8062-8d71-4de7-aee5-5826b6502e18#ag27~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361088~plpr=COLLECTION~eid=2889613b-ea3f-4922-ba3a-d77a94640d20~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "e87e8062-8d71-4de7-aee5-5826b6502e18",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=361088&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "91739",
          name: "Shahi Darbar",
          cloudinaryImageId: "ac5uvv0nmqnqdnc98w7a",
          locality: "Civil Lines",
          areaName: "Parade",
          costForTwo: "₹200 for two",
          cuisines: ["Mughlai", "Biryani"],
          avgRating: 4,
          parentId: "180675",
          avgRatingString: "4.0",
          totalRatingsString: "2.8K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "115",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=91739&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "575224",
          name: "Veg Darbar by Behrouz Biryani",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/c19eacc2-7db0-44be-852c-f4bb33bcd1a9_575224.JPG",
          locality: "Benajhabar Road",
          areaName: "Harsh Nagar",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "344904",
          avgRatingString: "4.4",
          totalRatingsString: "133",
          promoted: true,
          adTrackingId:
            "cid=b86bbbf6-85e1-4331-b816-7d690df01b2c~p=14~adgrpid=b86bbbf6-85e1-4331-b816-7d690df01b2c#ag37~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=575224~plpr=COLLECTION~eid=3d4ad36e-1d84-4494-9ca8-94863c107aae~srvts=1767451199459~collid=83639",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹289",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "b86bbbf6-85e1-4331-b816-7d690df01b2c",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=575224&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "106574",
          name: "Gupta Veg Biryani - Gumti No 5",
          cloudinaryImageId: "wv1gxrye22k3do92nam5",
          locality: "Lajpat Nagar",
          areaName: "Gumti No.5",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Tandoor", "Punjabi"],
          avgRating: 4.3,
          parentId: "613065",
          avgRatingString: "4.3",
          totalRatingsString: "7.1K+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-03 23:55:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "1 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=106574&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container"></div>
      <div className="res-container">
        {resList.map((resturant) => (
          <RestaurantCard
            key={resturant.card.card.info.id}
            resData={resturant}
          />
        ))}
        <RestaurantCard resData={resList[0]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
