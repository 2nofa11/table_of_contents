export type googleBooksType = {
  kind: string;
  totalItems: number;
  items: (
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          industryIdentifiers: {
            type: string;
            identifier: string;
          }[];
          readingModes: {
            text: boolean;
            image: boolean;
          };
          pageCount: number;
          printType: string;
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
          categories?: undefined;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice?: undefined;
          retailPrice?: undefined;
          buyLink?: undefined;
          offers?: undefined;
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink?: undefined;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          industryIdentifiers: {
            type: string;
            identifier: string;
          }[];
          readingModes: {
            text: boolean;
            image: boolean;
          };
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
          pageCount?: undefined;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          industryIdentifiers: {
            type: string;
            identifier: string;
          }[];
          readingModes: {
            text: boolean;
            image: boolean;
          };
          pageCount: number;
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          readingModes: {
            text: boolean;
            image: boolean;
          };
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
          industryIdentifiers?: undefined;
          pageCount?: undefined;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          industryIdentifiers: {
            type: string;
            identifier: string;
          }[];
          readingModes: {
            text: boolean;
            image: boolean;
          };
          pageCount: number;
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink?: undefined;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          industryIdentifiers: {
            type: string;
            identifier: string;
          }[];
          readingModes: {
            text: boolean;
            image: boolean;
          };
          pageCount: number;
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink?: undefined;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
    | {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publisher: string;
          publishedDate: string;
          description: string;
          readingModes: {
            text: boolean;
            image: boolean;
          };
          pageCount: number;
          printType: string;
          categories: string[];
          maturityRating: string;
          allowAnonLogging: boolean;
          contentVersion: string;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
          };
          language: string;
          previewLink: string;
          infoLink: string;
          canonicalVolumeLink: string;
          industryIdentifiers?: undefined;
        };
        saleInfo: {
          country: string;
          saleability: string;
          isEbook: boolean;
          listPrice: {
            amount: number;
            currencyCode: string;
          };
          retailPrice: {
            amount: number;
            currencyCode: string;
          };
          buyLink: string;
          offers: {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }[];
        };
        accessInfo: {
          country: string;
          viewability: string;
          embeddable: boolean;
          publicDomain: boolean;
          textToSpeechPermission: string;
          epub: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
          };
          webReaderLink: string;
          accessViewStatus: string;
          quoteSharingAllowed: boolean;
        };
        searchInfo: {
          textSnippet: string;
        };
      }
  )[];
};
