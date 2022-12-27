import { OpenDBType } from "../openDB-type";

export const mockData = {
  onix: {
    RecordReference: "9999999999999",
    NotificationType: "03",
    ProductIdentifier: { ProductIDType: "15", IDValue: "9784785300012" },
    DescriptiveDetail: {
      ProductComposition: "00",
      ProductForm: "BZ",
      Measure: [
        { MeasureType: "01", Measurement: "220", MeasureUnitCode: "mm" },
      ],
      TitleDetail: {
        TitleType: "01",
        TitleElement: {
          TitleElementLevel: "01",
          TitleText: {
            collationkey: "カガク ロンブン ノ カキカタ",
            content: "科学論文の書き方",
          },
        },
      },
      Contributor: [
        {
          SequenceNumber: "1",
          ContributorRole: ["A01"],
          PersonName: { collationkey: "", content: "田中 潔" },
        },
        {
          SequenceNumber: "2",
          ContributorRole: ["A01"],
          PersonName: { collationkey: "", content: "田中 義麿" },
        },
      ],
      Language: [
        { LanguageRole: "01", LanguageCode: "jpn", CountryCode: "JP" },
      ],
      Extent: [{ ExtentType: "11", ExtentValue: "365", ExtentUnit: "03" }],
    },
    CollateralDetail: {
      TextContent: [
        { TextType: "03", ContentAudience: "00", Text: "付: 参考文献350-358p" },
        {
          TextType: "04",
          ContentAudience: "00",
          Text: "ここに目次情報",
        },
      ],
    },
    PublishingDetail: {
      Imprint: {
        ImprintIdentifier: [{ ImprintIDType: "19", IDValue: "7853" }],
        ImprintName: "裳華房",
      },
      PublishingDate: [{ PublishingDateRole: "01", Date: "" }],
    },
    ProductSupply: {
      MarketPublishingDetail: {
        MarketPublishingStatus: "00",
        MarketPublishingStatusNote: "1;",
      },
      SupplyDetail: { ProductAvailability: "99" },
    },
  },
  hanmoto: {
    datecreated: "2019-04-18 01:35:45",
    dateshuppan: "",
    datemodified: "2019-04-18 01:35:45",
  },
  summary: {
    isbn: "9784785300012",
    title: "科学論文の書き方",
    volume: "",
    series: "",
    publisher: "裳華房",
    pubdate: "",
    cover: "",
    author: "田中潔／著 田中義麿／著",
  },
};

export const mockDataNoTOC = {
  ...mockData,
  onix: { CollateralDetail: { TextContent: [] } },
};
