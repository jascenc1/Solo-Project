const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// })
// .then(()=>console.log(`MongoDB Connected: ${conn.connection.host}`))
// .catch(err=>console.log(err));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err);
  }
}

const Schema = mongoose.Schema; 


// set a schema for the 'stocks' collection

const stocksSchema = new Schema({
  symbol: String,
  name: String,
  lastSale: String,
  marketCap: String,
  ipoYear: String,
  sector: String,
  industry: String,
  summaryQuote: String
});

// creates a model for the stocks collection that will be part of the export

const Stocks = mongoose.model('stocks', stocksSchema, 'stocks');

let test = [
  
{
  symbol: "VCVC",
  name: "10X Capital Venture Acquisition Corp",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vcvc"
  },
  {
  symbol: "VCVCU",
  name: "10X Capital Venture Acquisition Corp",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vcvcu"
  },
  {
  symbol: "TXG",
  name: "10x Genomics, Inc.",
  lastSale: "142.93",
  marketCap: "$15.27B",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/txg"
  },
  {
  symbol: "YI",
  name: "111, Inc.",
  lastSale: "6.84",
  marketCap: "$563.34M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/yi"
  },
  {
  symbol: "PIH",
  name: "1347 Property Insurance Holdings, Inc.",
  lastSale: "3.01",
  marketCap: "$14.86M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/pih"
  },
  {
  symbol: "PIHPP",
  name: "1347 Property Insurance Holdings, Inc.",
  lastSale: "23.4065",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/pihpp"
  },
  {
  symbol: "TURN",
  name: "180 Degree Capital Corp.",
  lastSale: "1.78",
  marketCap: "$55.4M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance/Investors Services",
  summaryQuote: "https://old.nasdaq.com/symbol/turn"
  },
  {
  symbol: "FLWS",
  name: "1-800-FLOWERS.COM, Inc.",
  lastSale: "25.825",
  marketCap: "$1.66B",
  ipoYear: "1999",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/flws"
  },
  {
  symbol: "BCOW",
  name: "1895 Bancorp of Wisconsin, Inc.",
  lastSale: "9.3",
  marketCap: "$45.35M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bcow"
  },
  {
  symbol: "ONEM",
  name: "1Life Healthcare, Inc.",
  lastSale: "31.47",
  marketCap: "$3.97B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/onem"
  },
  {
  symbol: "FCCY",
  name: "1st Constitution Bancorp (NJ)",
  lastSale: "13.05",
  marketCap: "$133.31M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fccy"
  },
  {
  symbol: "SRCE",
  name: "1st Source Corporation",
  lastSale: "33.89",
  marketCap: "$866.01M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/srce"
  },
  {
  symbol: "VNET",
  name: "21Vianet Group, Inc.",
  lastSale: "23.33",
  marketCap: "$3.1B",
  ipoYear: "2011",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/vnet"
  },
  {
  symbol: "TWOU",
  name: "2U, Inc.",
  lastSale: "37.34",
  marketCap: "$2.66B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/twou"
  },
  {
  symbol: "QFIN",
  name: "360 DigiTech, Inc.",
  lastSale: "11.99",
  marketCap: "$1.76B",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qfin"
  },
  {
  symbol: "KRKR",
  name: "36Kr Holdings Inc.",
  lastSale: "2.95",
  marketCap: "$110.61M",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/krkr"
  },
  {
  symbol: "FVAM",
  name: "5:01 Acquisition Corp.",
  lastSale: "10.04",
  marketCap: "$104.01M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fvam"
  },
  {
  symbol: "JOBS",
  name: "51job, Inc.",
  lastSale: "68.06",
  marketCap: "$4.57B",
  ipoYear: "2004",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jobs"
  },
  {
  symbol: "ETNB",
  name: "89bio, Inc.",
  lastSale: "24.59",
  marketCap: "$500.99M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/etnb"
  },
  {
  symbol: "EGHT",
  name: "8x8 Inc",
  lastSale: "16.62",
  marketCap: "$1.73B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eght"
  },
  {
  symbol: "NMTR",
  name: "9 Meters Biopharma, Inc.",
  lastSale: "0.7016",
  marketCap: "$99.93M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nmtr"
  },
  {
  symbol: "JFU",
  name: "9F Inc.",
  lastSale: "1.6",
  marketCap: "$312.31M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jfu"
  },
  {
  symbol: "AAON",
  name: "AAON, Inc.",
  lastSale: "60.1",
  marketCap: "$3.14B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/aaon"
  },
  {
  symbol: "ABCM",
  name: "Abcam plc",
  lastSale: "19.46",
  marketCap: "$4.21B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/abcm"
  },
  {
  symbol: "ABEO",
  name: "Abeona Therapeutics Inc.",
  lastSale: "1.18",
  marketCap: "$100.04M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/abeo"
  },
  {
  symbol: "ABMD",
  name: "ABIOMED, Inc.",
  lastSale: "290.51",
  marketCap: "$13.09B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/abmd"
  },
  {
  symbol: "AXAS",
  name: "Abraxas Petroleum Corporation",
  lastSale: "1.64",
  marketCap: "$13.86M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/axas"
  },
  {
  symbol: "ABST",
  name: "Absolute Software Corporation",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/abst"
  },
  {
  symbol: "ACIU",
  name: "AC Immune SA",
  lastSale: "4.94",
  marketCap: "$354.4M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aciu"
  },
  {
  symbol: "ACIA",
  name: "Acacia Communications, Inc.",
  lastSale: "67.5",
  marketCap: "$2.84B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/acia"
  },
  {
  symbol: "ACTG",
  name: "Acacia Research Corporation",
  lastSale: "3.2",
  marketCap: "$157.69M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/actg"
  },
  {
  symbol: "ASO",
  name: "Academy Sports and Outdoors, Inc.",
  lastSale: "14.88",
  marketCap: "$1.31B",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/aso"
  },
  {
  symbol: "ACHC",
  name: "Acadia Healthcare Company, Inc.",
  lastSale: "30.23",
  marketCap: "$2.69B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/achc"
  },
  {
  symbol: "ACAD",
  name: "ACADIA Pharmaceuticals Inc.",
  lastSale: "46.36",
  marketCap: "$7.36B",
  ipoYear: "1985",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acad"
  },
  {
  symbol: "ACAM",
  name: "Acamar Partners Acquisition Corp.",
  lastSale: "10.145",
  marketCap: "$387.51M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acam"
  },
  {
  symbol: "ACAMU",
  name: "Acamar Partners Acquisition Corp.",
  lastSale: "10.48",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acamu"
  },
  {
  symbol: "ACAMW",
  name: "Acamar Partners Acquisition Corp.",
  lastSale: "1.25",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acamw"
  },
  {
  symbol: "ACST",
  name: "Acasti Pharma, Inc.",
  lastSale: "0.1994",
  marketCap: "$19.32M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acst"
  },
  {
  symbol: "AXDX",
  name: "Accelerate Diagnostics, Inc.",
  lastSale: "9.95",
  marketCap: "$560.73M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/axdx"
  },
  {
  symbol: "ACCP",
  name: "Accelerated Pharma, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/accp"
  },
  {
  symbol: "XLRN",
  name: "Acceleron Pharma Inc.",
  lastSale: "108.45",
  marketCap: "$6.5B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/xlrn"
  },
  {
  symbol: "ACCD",
  name: "Accolade, Inc.",
  lastSale: "38.24",
  marketCap: "$1.88B",
  ipoYear: "2020",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/accd"
  },
  {
  symbol: "ARAY",
  name: "Accuray Incorporated",
  lastSale: "3",
  marketCap: "$273.6M",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/aray"
  },
  {
  symbol: "ACEV",
  name: "ACE Convergence Acquisition Corp.",
  lastSale: "9.67",
  marketCap: "$278.01M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acev"
  },
  {
  symbol: "ACEVU",
  name: "ACE Convergence Acquisition Corp.",
  lastSale: "9.96",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acevu"
  },
  {
  symbol: "ACEVW",
  name: "ACE Convergence Acquisition Corp.",
  lastSale: "0.61",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acevw"
  },
  {
  symbol: "ACLL",
  name: "ACell, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/acll"
  },
  {
  symbol: "ACRX",
  name: "AcelRx Pharmaceuticals, Inc.",
  lastSale: "1.75",
  marketCap: "$158.07M",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acrx"
  },
  {
  symbol: "ACER",
  name: "Acer Therapeutics Inc.",
  lastSale: "2.64",
  marketCap: "$31.45M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acer"
  },
  {
  symbol: "ACHV",
  name: "Achieve Life Sciences, Inc. ",
  lastSale: "8.18",
  marketCap: "$29.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/achv"
  },
  {
  symbol: "ACIW",
  name: "ACI Worldwide, Inc.",
  lastSale: "30.91",
  marketCap: "$3.6B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/aciw"
  },
  {
  symbol: "ACACU",
  name: "Acies Acquisition Corp.",
  lastSale: "9.91",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/acacu"
  },
  {
  symbol: "ACRS",
  name: "Aclaris Therapeutics, Inc.",
  lastSale: "4.02",
  marketCap: "$172.23M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acrs"
  },
  {
  symbol: "ACMR",
  name: "ACM Research, Inc.",
  lastSale: "69.29",
  marketCap: "$1.25B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/acmr"
  },
  {
  symbol: "ACNB",
  name: "ACNB Corporation",
  lastSale: "21.49",
  marketCap: "$186.87M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/acnb"
  },
  {
  symbol: "STWOU",
  name: "ACON S2 Acquisition Corp.",
  lastSale: "9.91",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/stwou"
  },
  {
  symbol: "ACOR",
  name: "Acorda Therapeutics, Inc.",
  lastSale: "0.8728",
  marketCap: "$41.87M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/acor"
  },
  {
  symbol: "ATVI",
  name: "Activision Blizzard, Inc",
  lastSale: "80.96",
  marketCap: "$62.49B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/atvi"
  },
  {
  symbol: "AFIB",
  name: "Acutus Medical, Inc.",
  lastSale: "25.91",
  marketCap: "$720.98M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/afib"
  },
  {
  symbol: "ADMS",
  name: "Adamas Pharmaceuticals, Inc.",
  lastSale: "3.47",
  marketCap: "$98.14M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adms"
  },
  {
  symbol: "ADMP",
  name: "Adamis Pharmaceuticals Corporation",
  lastSale: "0.7576",
  marketCap: "$70.96M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/admp"
  },
  {
  symbol: "AHCO",
  name: "AdaptHealth Corp. ",
  lastSale: "25.96",
  marketCap: "$2.19B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ahco"
  },
  {
  symbol: "ADAP",
  name: "Adaptimmune Therapeutics plc",
  lastSale: "4.78",
  marketCap: "$739.04M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/adap"
  },
  {
  symbol: "ADPT",
  name: "Adaptive Biotechnologies Corporation",
  lastSale: "51.22",
  marketCap: "$6.96B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/adpt"
  },
  {
  symbol: "ADXN",
  name: "Addex Therapeutics Ltd",
  lastSale: "12.455",
  marketCap: "$55.4M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adxn"
  },
  {
  symbol: "ADUS",
  name: "Addus HomeCare Corporation",
  lastSale: "102.34",
  marketCap: "$1.62B",
  ipoYear: "2009",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/adus"
  },
  {
  symbol: "AEY",
  name: "ADDvantage Technologies Group, Inc.",
  lastSale: "1.94",
  marketCap: "$22.87M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Office Equipment/Supplies/Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aey"
  },
  {
  symbol: "ADIL",
  name: "Adial Pharmaceuticals, Inc",
  lastSale: "1.82",
  marketCap: "$25.09M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adil"
  },
  {
  symbol: "ADILW",
  name: "Adial Pharmaceuticals, Inc",
  lastSale: "0.315",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adilw"
  },
  {
  symbol: "ACET",
  name: "Adicet Bio, Inc.",
  lastSale: "12.23",
  marketCap: "$239.58M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/acet"
  },
  {
  symbol: "ADTX",
  name: "ADiTx Therapeutics, Inc.",
  lastSale: "2.11",
  marketCap: "$19.96M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adtx"
  },
  {
  symbol: "ADMA",
  name: "ADMA Biologics Inc",
  lastSale: "2.13",
  marketCap: "$183.93M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/adma"
  },
  {
  symbol: "ADBE",
  name: "Adobe Inc.",
  lastSale: "478.56",
  marketCap: "$229.57B",
  ipoYear: "1986",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/adbe"
  },
  {
  symbol: "ADTN",
  name: "ADTRAN, Inc.",
  lastSale: "11.53",
  marketCap: "$552.96M",
  ipoYear: "1994",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/adtn"
  },
  {
  symbol: "ADES",
  name: "Advanced Emissions Solutions, Inc.",
  lastSale: "4.47",
  marketCap: "$82.96M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/ades"
  },
  {
  symbol: "AEIS",
  name: "Advanced Energy Industries, Inc.",
  lastSale: "69.5",
  marketCap: "$2.66B",
  ipoYear: "1995",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/aeis"
  },
  {
  symbol: "AMD",
  name: "Advanced Micro Devices, Inc.",
  lastSale: "78.88",
  marketCap: "$92.61B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amd"
  },
  {
  symbol: "ADXS",
  name: "Advaxis, Inc.",
  lastSale: "0.394",
  marketCap: "$26.09M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/adxs"
  },
  {
  symbol: "ADVM",
  name: "Adverum Biotechnologies, Inc.",
  lastSale: "12.18",
  marketCap: "$1.19B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/advm"
  },
  {
  symbol: "DWEQ",
  name: "AdvisorShares Dorsey Wright Alpha Equal Weight ETF",
  lastSale: "24.8798",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dweq"
  },
  {
  symbol: "DWAW",
  name: "AdvisorShares Dorsey Wright FSM All Cap World ETF",
  lastSale: "32.1",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwaw"
  },
  {
  symbol: "DWUS",
  name: "AdvisorShares Dorsey Wright FSM US Core ETF",
  lastSale: "31.22",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwus"
  },
  {
  symbol: "DWMC",
  name: "AdvisorShares Dorsey Wright Micro-Cap ETF",
  lastSale: "22.9598",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwmc"
  },
  {
  symbol: "DWSH",
  name: "AdvisorShares Dorsey Wright Short ETF",
  lastSale: "17.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwsh"
  },
  {
  symbol: "ACT",
  name: "AdvisorShares Vice ETF",
  lastSale: "27.8409",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/act"
  },
  {
  symbol: "AEGN",
  name: "Aegion Corp",
  lastSale: "14.95",
  marketCap: "$460.03M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/aegn"
  },
  {
  symbol: "AGLE",
  name: "Aeglea BioTherapeutics, Inc.",
  lastSale: "7.85",
  marketCap: "$350.11M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/agle"
  },
  {
  symbol: "AEHR",
  name: "Aehr Test Systems",
  lastSale: "1.2",
  marketCap: "$27.97M",
  ipoYear: "1997",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/aehr"
  },
  {
  symbol: "AMTX",
  name: "Aemetis, Inc",
  lastSale: "3.65",
  marketCap: "$76.75M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/amtx"
  },
  {
  symbol: "AERI",
  name: "Aerie Pharmaceuticals, Inc.",
  lastSale: "9.93",
  marketCap: "$461.89M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/aeri"
  },
  {
  symbol: "AVAV",
  name: "AeroVironment, Inc.",
  lastSale: "76.39",
  marketCap: "$1.84B",
  ipoYear: "2007",
  sector: "Capital Goods",
  industry: "Aerospace",
  summaryQuote: "https://old.nasdaq.com/symbol/avav"
  },
  {
  symbol: "ARPO",
  name: "Aerpio Pharmaceuticals, Inc.",
  lastSale: "1.3",
  marketCap: "$54.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arpo"
  },
  {
  symbol: "AIH",
  name: "Aesthetic Medical International Holdings Group Ltd.",
  lastSale: "5.49",
  marketCap: "$129.63M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/aih"
  },
  {
  symbol: "AEZS",
  name: "AEterna Zentaris Inc.",
  lastSale: "0.3461",
  marketCap: "$21.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aezs"
  },
  {
  symbol: "AEMD",
  name: "Aethlon Medical, Inc.",
  lastSale: "1.5",
  marketCap: "$18.11M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/aemd"
  },
  {
  symbol: "AFMD",
  name: "Affimed N.V.",
  lastSale: "3.31",
  marketCap: "$279.67M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/afmd"
  },
  {
  symbol: "AFYA",
  name: "Afya Limited",
  lastSale: "25.02",
  marketCap: "$2.33B",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/afya"
  },
  {
  symbol: "AGBA",
  name: "AGBA Acquisition Limited",
  lastSale: "10.31",
  marketCap: "$61.6M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agba"
  },
  {
  symbol: "AGBAR",
  name: "AGBA Acquisition Limited",
  lastSale: "0.2241",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agbar"
  },
  {
  symbol: "AGBAU",
  name: "AGBA Acquisition Limited",
  lastSale: "10.7",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agbau"
  },
  {
  symbol: "AGBAW",
  name: "AGBA Acquisition Limited",
  lastSale: "0.24",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agbaw"
  },
  {
  symbol: "AGEN",
  name: "Agenus Inc.",
  lastSale: "3.84",
  marketCap: "$704.42M",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/agen"
  },
  {
  symbol: "AGRX",
  name: "Agile Therapeutics, Inc.",
  lastSale: "2.93",
  marketCap: "$256.18M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/agrx"
  },
  {
  symbol: "AGYS",
  name: "Agilysys, Inc.",
  lastSale: "25.39",
  marketCap: "$598.94M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agys"
  },
  {
  symbol: "AGIO",
  name: "Agios Pharmaceuticals, Inc.",
  lastSale: "39",
  marketCap: "$2.7B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/agio"
  },
  {
  symbol: "AGMH",
  name: "AGM Group Holdings Inc.",
  lastSale: "14.75",
  marketCap: "$426.14M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agmh"
  },
  {
  symbol: "AGNC",
  name: "AGNC Investment Corp.",
  lastSale: "14.25",
  marketCap: "$7.92B",
  ipoYear: "2008",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/agnc"
  },
  {
  symbol: "AGNCM",
  name: "AGNC Investment Corp.",
  lastSale: "22.62",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/agncm"
  },
  {
  symbol: "AGNCN",
  name: "AGNC Investment Corp.",
  lastSale: "23.31",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/agncn"
  },
  {
  symbol: "AGNCO",
  name: "AGNC Investment Corp.",
  lastSale: "22.62",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/agnco"
  },
  {
  symbol: "AGNCP",
  name: "AGNC Investment Corp.",
  lastSale: "21.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/agncp"
  },
  {
  symbol: "API",
  name: "Agora, Inc.",
  lastSale: "42.6",
  marketCap: "$16.91B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/api"
  },
  {
  symbol: "AGFS",
  name: "AgroFresh Solutions, Inc.",
  lastSale: "2.13",
  marketCap: "$112.62M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agfs"
  },
  {
  symbol: "AIKI",
  name: "AIkido Pharma Inc.",
  lastSale: "0.5401",
  marketCap: "$18.86M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/aiki"
  },
  {
  symbol: "ALRN",
  name: "Aileron Therapeutics, Inc.",
  lastSale: "1.28",
  marketCap: "$51.04M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alrn"
  },
  {
  symbol: "AIRT",
  name: "Air T, Inc.",
  lastSale: "9.85",
  marketCap: "$28.39M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/airt"
  },
  {
  symbol: "AIRTP",
  name: "Air T, Inc.",
  lastSale: "21.79",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/airtp"
  },
  {
  symbol: "AIRTW",
  name: "Air T, Inc.",
  lastSale: "0.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/airtw"
  },
  {
  symbol: "ATSG",
  name: "Air Transport Services Group, Inc",
  lastSale: "29.57",
  marketCap: "$1.76B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atsg"
  },
  {
  symbol: "AIRG",
  name: "Airgain, Inc.",
  lastSale: "13.35",
  marketCap: "$128.88M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/airg"
  },
  {
  symbol: "ANTE",
  name: "AirNet Technology Inc.",
  lastSale: "1.16",
  marketCap: "$14.58M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/ante"
  },
  {
  symbol: "AKAM",
  name: "Akamai Technologies, Inc.",
  lastSale: "106.71",
  marketCap: "$17.36B",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/akam"
  },
  {
  symbol: "AKTX",
  name: "Akari Therapeutics Plc",
  lastSale: "1.66",
  marketCap: "$56.22M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aktx"
  },
  {
  symbol: "AKBA",
  name: "Akebia Therapeutics, Inc.",
  lastSale: "2.42",
  marketCap: "$346.83M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/akba"
  },
  {
  symbol: "KERN",
  name: "Akerna Corp.",
  lastSale: "2.93",
  marketCap: "$41.19M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kern"
  },
  {
  symbol: "KERNW",
  name: "Akerna Corp.",
  lastSale: "0.3324",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kernw"
  },
  {
  symbol: "AKRO",
  name: "Akero Therapeutics, Inc.",
  lastSale: "26.26",
  marketCap: "$911.24M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/akro"
  },
  {
  symbol: "AKER",
  name: "Akers Biosciences Inc.",
  lastSale: "2.06",
  marketCap: "$17.97M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/aker"
  },
  {
  symbol: "AKUS",
  name: "Akouos, Inc.",
  lastSale: "19.9",
  marketCap: "$683.98M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/akus"
  },
  {
  symbol: "AKTS",
  name: "Akoustis Technologies, Inc.",
  lastSale: "8.29",
  marketCap: "$317.16M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/akts"
  },
  {
  symbol: "AKU",
  name: "Akumin Inc.",
  lastSale: "3.66",
  marketCap: "$256.85M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/aku"
  },
  {
  symbol: "ALRM",
  name: "Alarm.com Holdings, Inc.",
  lastSale: "60.04",
  marketCap: "$2.94B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/alrm"
  },
  {
  symbol: "ALSK",
  name: "Alaska Communications Systems Group, Inc.",
  lastSale: "1.93",
  marketCap: "$103.58M",
  ipoYear: "1999",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/alsk"
  },
  {
  symbol: "ALAC",
  name: "Alberton Acquisition Corporation",
  lastSale: "10.7641",
  marketCap: "$158.12M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/alac"
  },
  {
  symbol: "ALACR",
  name: "Alberton Acquisition Corporation",
  lastSale: "0.3777",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/alacr"
  },
  {
  symbol: "ALACU",
  name: "Alberton Acquisition Corporation",
  lastSale: "12",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/alacu"
  },
  {
  symbol: "ALACW",
  name: "Alberton Acquisition Corporation",
  lastSale: "0.336",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/alacw"
  },
  {
  symbol: "ALBO",
  name: "Albireo Pharma, Inc.",
  lastSale: "32.65",
  marketCap: "$620.05M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/albo"
  },
  {
  symbol: "ALDX",
  name: "Aldeyra Therapeutics, Inc.",
  lastSale: "6.98",
  marketCap: "$269.66M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aldx"
  },
  {
  symbol: "ALEC",
  name: "Alector, Inc.",
  lastSale: "9.96",
  marketCap: "$789.45M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/alec"
  },
  {
  symbol: "ALRS",
  name: "Alerus Financial Corporation",
  lastSale: "21.97",
  marketCap: "$376.17M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/alrs"
  },
  {
  symbol: "ALXN",
  name: "Alexion Pharmaceuticals, Inc.",
  lastSale: "120",
  marketCap: "$26.3B",
  ipoYear: "1996",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alxn"
  },
  {
  symbol: "ALCO",
  name: "Alico, Inc.",
  lastSale: "30.81",
  marketCap: "$230.82M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/alco"
  },
  {
  symbol: "ALIT",
  name: "Alight Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/alit"
  },
  {
  symbol: "ALGN",
  name: "Align Technology, Inc.",
  lastSale: "455.09",
  marketCap: "$35.86B",
  ipoYear: "2001",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/algn"
  },
  {
  symbol: "ALGS",
  name: "Aligos Therapeutics, Inc.",
  lastSale: "15.5",
  marketCap: "$571.8M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/algs"
  },
  {
  symbol: "ALIM",
  name: "Alimera Sciences, Inc.",
  lastSale: "4.32",
  marketCap: "$21.74M",
  ipoYear: "2010",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alim"
  },
  {
  symbol: "ALYA",
  name: "Alithya Group inc.",
  lastSale: "2.74",
  marketCap: "$159.14M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/alya"
  },
  {
  symbol: "ALJJ",
  name: "ALJ Regional Holdings, Inc.",
  lastSale: "1.06",
  marketCap: "$44.7M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aljj"
  },
  {
  symbol: "ALKS",
  name: "Alkermes plc",
  lastSale: "15.91",
  marketCap: "$2.53B",
  ipoYear: "1991",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alks"
  },
  {
  symbol: "ALLK",
  name: "Allakos Inc.",
  lastSale: "93.53",
  marketCap: "$4.57B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/allk"
  },
  {
  symbol: "ABTX",
  name: "Allegiance Bancshares, Inc.",
  lastSale: "27.57",
  marketCap: "$563.3M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/abtx"
  },
  {
  symbol: "ALGT",
  name: "Allegiant Travel Company",
  lastSale: "132.29",
  marketCap: "$2.15B",
  ipoYear: "2006",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/algt"
  },
  {
  symbol: "ALNA",
  name: "Allena Pharmaceuticals, Inc.",
  lastSale: "1.31",
  marketCap: "$49.94M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/alna"
  },
  {
  symbol: "ARLP",
  name: "Alliance Resource Partners, L.P.",
  lastSale: "3.25",
  marketCap: "$413.38M",
  ipoYear: "1999",
  sector: "Energy",
  industry: "Coal Mining",
  summaryQuote: "https://old.nasdaq.com/symbol/arlp"
  },
  {
  symbol: "LNT",
  name: "Alliant Energy Corporation",
  lastSale: "57.16",
  marketCap: "$14.27B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/lnt"
  },
  {
  symbol: "AESE",
  name: "Allied Esports Entertainment, Inc.",
  lastSale: "1.05",
  marketCap: "$33.56M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/aese"
  },
  {
  symbol: "AHPI",
  name: "Allied Healthcare Products, Inc.",
  lastSale: "4.71",
  marketCap: "$18.9M",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/ahpi"
  },
  {
  symbol: "AMOT",
  name: "Allied Motion Technologies, Inc.",
  lastSale: "41.39",
  marketCap: "$403.32M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/amot"
  },
  {
  symbol: "ALLO",
  name: "Allogene Therapeutics, Inc.",
  lastSale: "35.93",
  marketCap: "$5B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/allo"
  },
  {
  symbol: "ALLT",
  name: "Allot Ltd.",
  lastSale: "9.735",
  marketCap: "$342.79M",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/allt"
  },
  {
  symbol: "ALVR",
  name: "AlloVir, Inc.",
  lastSale: "26.77",
  marketCap: "$1.68B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/alvr"
  },
  {
  symbol: "MDRX",
  name: "Allscripts Healthcare Solutions, Inc.",
  lastSale: "10.29",
  marketCap: "$1.68B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mdrx"
  },
  {
  symbol: "ALNY",
  name: "Alnylam Pharmaceuticals, Inc.",
  lastSale: "126.82",
  marketCap: "$14.71B",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alny"
  },
  {
  symbol: "AOSL",
  name: "Alpha and Omega Semiconductor Limited",
  lastSale: "15.95",
  marketCap: "$404.84M",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/aosl"
  },
  {
  symbol: "AHACU",
  name: "Alpha Healthcare Acquisition Corp.",
  lastSale: "9.89",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ahacu"
  },
  {
  symbol: "GOOG",
  name: "Alphabet Inc.",
  lastSale: "1604.26",
  marketCap: "$1091.16B",
  ipoYear: "2004",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/goog"
  },
  {
  symbol: "GOOGL",
  name: "Alphabet Inc.",
  lastSale: "1598.88",
  marketCap: "$1087.5B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/googl"
  },
  {
  symbol: "SMCP",
  name: "AlphaMark Actively Managed Small Cap ETF",
  lastSale: "22.13",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/smcp"
  },
  {
  symbol: "ATEC",
  name: "Alphatec Holdings, Inc.",
  lastSale: "8.67",
  marketCap: "$673.64M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/atec"
  },
  {
  symbol: "ALPN",
  name: "Alpine Immune Sciences, Inc.",
  lastSale: "7.84",
  marketCap: "$186.47M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alpn"
  },
  {
  symbol: "ALTA",
  name: "Altabancorp",
  lastSale: "22.03",
  marketCap: "$414.03M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/alta"
  },
  {
  symbol: "ALTR",
  name: "Altair Engineering Inc.",
  lastSale: "45.78",
  marketCap: "$3.35B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/altr"
  },
  {
  symbol: "ATHE",
  name: "Alterity Therapeutics Limited",
  lastSale: "1.56",
  marketCap: "$35.26M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/athe"
  },
  {
  symbol: "AGCUU",
  name: "Altimeter Growth Corp.",
  lastSale: "11.7",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/agcuu"
  },
  {
  symbol: "ALT",
  name: "Altimmune, Inc.",
  lastSale: "11.81",
  marketCap: "$388.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alt"
  },
  {
  symbol: "ASPS",
  name: "Altisource Portfolio Solutions S.A.",
  lastSale: "11.95",
  marketCap: "$186.8M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/asps"
  },
  {
  symbol: "ALTU",
  name: "Altitude Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/altu"
  },
  {
  symbol: "AIMC",
  name: "Altra Industrial Motion Corp.",
  lastSale: "43.64",
  marketCap: "$2.82B",
  ipoYear: "2006",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/aimc"
  },
  {
  symbol: "ALTM",
  name: "Altus Midstream Company",
  lastSale: "9.76",
  marketCap: "$158.57M",
  ipoYear: "2017",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/altm"
  },
  {
  symbol: "ALXO",
  name: "ALX Oncology Holdings Inc.",
  lastSale: "40.81",
  marketCap: "$1.51B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/alxo"
  },
  {
  symbol: "AMAG",
  name: "AMAG Pharmaceuticals, Inc.",
  lastSale: "13.7",
  marketCap: "$472.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/amag"
  },
  {
  symbol: "AMAL",
  name: "Amalgamated Bank",
  lastSale: "11.6",
  marketCap: "$360.17M",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/amal"
  },
  {
  symbol: "AMRN",
  name: "Amarin Corporation plc",
  lastSale: "4.83",
  marketCap: "$1.88B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/amrn"
  },
  {
  symbol: "AMRK",
  name: "A-Mark Precious Metals, Inc.",
  lastSale: "31.97",
  marketCap: "$224.91M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/amrk"
  },
  {
  symbol: "AMZN",
  name: "Amazon.com, Inc.",
  lastSale: "3286.33",
  marketCap: "$1646.09B",
  ipoYear: "1997",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/amzn"
  },
  {
  symbol: "AMBC",
  name: "Ambac Financial Group, Inc.",
  lastSale: "12.55",
  marketCap: "$574.9M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/ambc"
  },
  {
  symbol: "AMBA",
  name: "Ambarella, Inc.",
  lastSale: "56.49",
  marketCap: "$1.96B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amba"
  },
  {
  symbol: "AMCX",
  name: "AMC Networks Inc.",
  lastSale: "21.99",
  marketCap: "$1.14B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amcx"
  },
  {
  symbol: "AMCI",
  name: "AMCI Acquisition Corp.",
  lastSale: "10.27",
  marketCap: "$209.9M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amci"
  },
  {
  symbol: "AMCIU",
  name: "AMCI Acquisition Corp.",
  lastSale: "11.99",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amciu"
  },
  {
  symbol: "AMCIW",
  name: "AMCI Acquisition Corp.",
  lastSale: "0.3666",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amciw"
  },
  {
  symbol: "DOX",
  name: "Amdocs Limited",
  lastSale: "56.32",
  marketCap: "$7.49B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dox"
  },
  {
  symbol: "AMED",
  name: "Amedisys Inc",
  lastSale: "255.61",
  marketCap: "$8.3B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amed"
  },
  {
  symbol: "AMTB",
  name: "Amerant Bancorp Inc.",
  lastSale: "10.26",
  marketCap: "$432.55M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/amtb"
  },
  {
  symbol: "AMTBB",
  name: "Amerant Bancorp Inc.",
  lastSale: "7.99",
  marketCap: "$336.85M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/amtbb"
  },
  {
  symbol: "UHAL",
  name: "Amerco",
  lastSale: "357.22",
  marketCap: "$7B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Rental/Leasing Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/uhal"
  },
  {
  symbol: "AMRH",
  name: "Ameri Holdings, Inc.",
  lastSale: "1.29",
  marketCap: "$7.4M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amrh"
  },
  {
  symbol: "AMRHW",
  name: "Ameri Holdings, Inc.",
  lastSale: "0.0594",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amrhw"
  },
  {
  symbol: "ATAX",
  name: "America First Multifamily Investors, L.P.",
  lastSale: "3.91",
  marketCap: "$236.73M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atax"
  },
  {
  symbol: "AMOV",
  name: "America Movil, S.A.B. de C.V.",
  lastSale: "12.355",
  marketCap: "$41.02B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/amov"
  },
  {
  symbol: "AAL",
  name: "American Airlines Group, Inc.",
  lastSale: "11.23",
  marketCap: "$5.71B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aal"
  },
  {
  symbol: "AEP",
  name: "American Electric Power Company, Inc.",
  lastSale: "92.53",
  marketCap: "$45.93B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/aep"
  },
  {
  symbol: "AEPPL",
  name: "American Electric Power Company, Inc.",
  lastSale: "53.09",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/aeppl"
  },
  {
  symbol: "AEPPZ",
  name: "American Electric Power Company, Inc.",
  lastSale: "54.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/aeppz"
  },
  {
  symbol: "AFIN",
  name: "American Finance Trust, Inc.",
  lastSale: "5.75",
  marketCap: "$624.03M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/afin"
  },
  {
  symbol: "AFINP",
  name: "American Finance Trust, Inc.",
  lastSale: "23.89",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/afinp"
  },
  {
  symbol: "AMNB",
  name: "American National Bankshares, Inc.",
  lastSale: "22.4",
  marketCap: "$245.6M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/amnb"
  },
  {
  symbol: "ANAT",
  name: "American National Group, Inc.",
  lastSale: "69.05",
  marketCap: "$1.86B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/anat"
  },
  {
  symbol: "AOUT",
  name: "American Outdoor Brands, Inc.",
  lastSale: "15",
  marketCap: "$209.63M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Ordnance And Accessories",
  summaryQuote: "https://old.nasdaq.com/symbol/aout"
  },
  {
  symbol: "APEI",
  name: "American Public Education, Inc.",
  lastSale: "29.08",
  marketCap: "$430.3M",
  ipoYear: "2007",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/apei"
  },
  {
  symbol: "AREC",
  name: "American Resources Corporation",
  lastSale: "1.4865",
  marketCap: "$55.17M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/arec"
  },
  {
  symbol: "AMRB",
  name: "American River Bankshares",
  lastSale: "10.5",
  marketCap: "$62.35M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/amrb"
  },
  {
  symbol: "AMSWA",
  name: "American Software, Inc.",
  lastSale: "14.99",
  marketCap: "$486.88M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/amswa"
  },
  {
  symbol: "AMSC",
  name: "American Superconductor Corporation",
  lastSale: "14.6",
  marketCap: "$349.59M",
  ipoYear: "1991",
  sector: "Consumer Durables",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/amsc"
  },
  {
  symbol: "AVCT",
  name: "American Virtual Cloud Technologies, Inc. ",
  lastSale: "4.12",
  marketCap: "$80.9M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/avct"
  },
  {
  symbol: "AVCTW",
  name: "American Virtual Cloud Technologies, Inc. ",
  lastSale: "0.2799",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/avctw"
  },
  {
  symbol: "AMWD",
  name: "American Woodmark Corporation",
  lastSale: "82.73",
  marketCap: "$1.41B",
  ipoYear: "1986",
  sector: "Basic Industries",
  industry: "Forest Products",
  summaryQuote: "https://old.nasdaq.com/symbol/amwd"
  },
  {
  symbol: "CRMT",
  name: "America&#39;s Car-Mart, Inc.",
  lastSale: "87.83",
  marketCap: "$600.94M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/crmt"
  },
  {
  symbol: "ABCB",
  name: "Ameris Bancorp",
  lastSale: "28.07",
  marketCap: "$1.95B",
  ipoYear: "1994",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/abcb"
  },
  {
  symbol: "AMSF",
  name: "AMERISAFE, Inc.",
  lastSale: "57.21",
  marketCap: "$1.11B",
  ipoYear: "2005",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/amsf"
  },
  {
  symbol: "ASRV",
  name: "AmeriServ Financial Inc.",
  lastSale: "2.785",
  marketCap: "$47.51M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/asrv"
  },
  {
  symbol: "ASRVP",
  name: "AmeriServ Financial Inc.",
  lastSale: "27.513",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/asrvp"
  },
  {
  symbol: "ATLO",
  name: "Ames National Corporation",
  lastSale: "19.47",
  marketCap: "$177.62M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/atlo"
  },
  {
  symbol: "AMST",
  name: "Amesite Inc.",
  lastSale: "4.34",
  marketCap: "$88.2M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/amst"
  },
  {
  symbol: "AMGN",
  name: "Amgen Inc.",
  lastSale: "223.46",
  marketCap: "$130.88B",
  ipoYear: "1983",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/amgn"
  },
  {
  symbol: "FOLD",
  name: "Amicus Therapeutics, Inc.",
  lastSale: "18.93",
  marketCap: "$4.9B",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fold"
  },
  {
  symbol: "AMKR",
  name: "Amkor Technology, Inc.",
  lastSale: "11.25",
  marketCap: "$2.72B",
  ipoYear: "1998",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amkr"
  },
  {
  symbol: "AMPH",
  name: "Amphastar Pharmaceuticals, Inc.",
  lastSale: "19.88",
  marketCap: "$944.01M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/amph"
  },
  {
  symbol: "IBUY",
  name: "Amplify ETF Trust Amplify Online Retail ETF",
  lastSale: "96.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibuy"
  },
  {
  symbol: "AMHC",
  name: "Amplitude Healthcare Acquisition Corporation",
  lastSale: "9.8896",
  marketCap: "$123.62M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amhc"
  },
  {
  symbol: "AMHCU",
  name: "Amplitude Healthcare Acquisition Corporation",
  lastSale: "10.35",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amhcu"
  },
  {
  symbol: "AMHCW",
  name: "Amplitude Healthcare Acquisition Corporation",
  lastSale: "1.05",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/amhcw"
  },
  {
  symbol: "AMYT",
  name: "Amryt Pharma plc",
  lastSale: "12.85",
  marketCap: "$418.4M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/amyt"
  },
  {
  symbol: "ASYS",
  name: "Amtech Systems, Inc.",
  lastSale: "5.4",
  marketCap: "$75.86M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/asys"
  },
  {
  symbol: "AMRS",
  name: "Amyris, Inc.",
  lastSale: "2.82",
  marketCap: "$577.34M",
  ipoYear: "2010",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/amrs"
  },
  {
  symbol: "ADI",
  name: "Analog Devices, Inc.",
  lastSale: "120.29",
  marketCap: "$44.45B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/adi"
  },
  {
  symbol: "ANAB",
  name: "AnaptysBio, Inc.",
  lastSale: "27.93",
  marketCap: "$762.59M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/anab"
  },
  {
  symbol: "AVXL",
  name: "Anavex Life Sciences Corp.",
  lastSale: "5.67",
  marketCap: "$341.28M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/avxl"
  },
  {
  symbol: "ANCN",
  name: "Anchiano Therapeutics Ltd.",
  lastSale: "1.18",
  marketCap: "$8.76M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ancn"
  },
  {
  symbol: "ANDA",
  name: "Andina Acquisition Corp. III",
  lastSale: "10.1",
  marketCap: "$96.88M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/anda"
  },
  {
  symbol: "ANDAR",
  name: "Andina Acquisition Corp. III",
  lastSale: "0.3065",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/andar"
  },
  {
  symbol: "ANDAU",
  name: "Andina Acquisition Corp. III",
  lastSale: "10.78",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/andau"
  },
  {
  symbol: "ANDAW",
  name: "Andina Acquisition Corp. III",
  lastSale: "0.2138",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/andaw"
  },
  {
  symbol: "ANGI",
  name: "ANGI Homeservices Inc.",
  lastSale: "10.94",
  marketCap: "$5.43B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/angi"
  },
  {
  symbol: "ANGO",
  name: "AngioDynamics, Inc.",
  lastSale: "10.91",
  marketCap: "$414.07M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ango"
  },
  {
  symbol: "ANIP",
  name: "ANI Pharmaceuticals, Inc.",
  lastSale: "27.79",
  marketCap: "$342.24M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/anip"
  },
  {
  symbol: "ANIK",
  name: "Anika Therapeutics Inc.",
  lastSale: "34.4",
  marketCap: "$488.74M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/anik"
  },
  {
  symbol: "ANIX",
  name: "Anixa Biosciences, Inc.",
  lastSale: "2.2",
  marketCap: "$52.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/anix"
  },
  {
  symbol: "ANNX",
  name: "Annexon, Inc.",
  lastSale: "24.51",
  marketCap: "$935.01M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/annx"
  },
  {
  symbol: "ANPC",
  name: "AnPac Bio-Medical Science Co., Ltd.",
  lastSale: "3.56",
  marketCap: "$39.88M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/anpc"
  },
  {
  symbol: "ANSS",
  name: "ANSYS, Inc.",
  lastSale: "322.17",
  marketCap: "$27.64B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/anss"
  },
  {
  symbol: "ATRS",
  name: "Antares Pharma, Inc.",
  lastSale: "2.9",
  marketCap: "$481.67M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/atrs"
  },
  {
  symbol: "AEHL",
  name: "Antelope Enterprise Holdings Limited",
  lastSale: "2.27",
  marketCap: "$6.92M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/aehl"
  },
  {
  symbol: "ATEX",
  name: "Anterix Inc.",
  lastSale: "33.23",
  marketCap: "$574.76M",
  ipoYear: "2015",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/atex"
  },
  {
  symbol: "APA",
  name: "Apache Corporation",
  lastSale: "8.345",
  marketCap: "$3.15B",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/apa"
  },
  {
  symbol: "APLS",
  name: "Apellis Pharmaceuticals, Inc.",
  lastSale: "35.53",
  marketCap: "$2.69B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/apls"
  },
  {
  symbol: "APEX",
  name: "Apex Global Brands Inc.",
  lastSale: "6.75",
  marketCap: "$3.8M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/apex"
  },
  {
  symbol: "APXT",
  name: "Apex Technology Acquisition Corporation",
  lastSale: "10.27",
  marketCap: "$457.63M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/apxt"
  },
  {
  symbol: "APXTU",
  name: "Apex Technology Acquisition Corporation",
  lastSale: "11.24",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/apxtu"
  },
  {
  symbol: "APXTW",
  name: "Apex Technology Acquisition Corporation",
  lastSale: "1.49",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/apxtw"
  },
  {
  symbol: "APHA",
  name: "Aphria Inc.",
  lastSale: "4.68",
  marketCap: "$1.35B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/apha"
  },
  {
  symbol: "APOG",
  name: "Apogee Enterprises, Inc.",
  lastSale: "25",
  marketCap: "$659.64M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/apog"
  },
  {
  symbol: "APEN",
  name: "Apollo Endosurgery, Inc.",
  lastSale: "1.73",
  marketCap: "$40.96M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/apen"
  },
  {
  symbol: "AINV",
  name: "Apollo Investment Corporation",
  lastSale: "7.99",
  marketCap: "$521.42M",
  ipoYear: "2004",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ainv"
  },
  {
  symbol: "AMEH",
  name: "Apollo Medical Holdings, Inc.",
  lastSale: "18.07",
  marketCap: "$651.21M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ameh"
  },
  {
  symbol: "APPF",
  name: "AppFolio, Inc.",
  lastSale: "157.51",
  marketCap: "$5.4B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/appf"
  },
  {
  symbol: "APPN",
  name: "Appian Corporation",
  lastSale: "67.16",
  marketCap: "$4.69B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/appn"
  },
  {
  symbol: "AAPL",
  name: "Apple Inc.",
  lastSale: "116.6",
  marketCap: "$2021.53B",
  ipoYear: "1980",
  sector: "Technology",
  industry: "Computer Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/aapl"
  },
  {
  symbol: "APDN",
  name: "Applied DNA Sciences, Inc.",
  lastSale: "7.14",
  marketCap: "$38.99M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/apdn"
  },
  {
  symbol: "AGTC",
  name: "Applied Genetic Technologies Corporation",
  lastSale: "5.33",
  marketCap: "$137.82M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/agtc"
  },
  {
  symbol: "AMAT",
  name: "Applied Materials, Inc.",
  lastSale: "58.83",
  marketCap: "$53.73B",
  ipoYear: "1972",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/amat"
  },
  {
  symbol: "AMTI",
  name: "Applied Molecular Transport Inc.",
  lastSale: "32.14",
  marketCap: "$1.12B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/amti"
  },
  {
  symbol: "AAOI",
  name: "Applied Optoelectronics, Inc.",
  lastSale: "9.96",
  marketCap: "$226.83M",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/aaoi"
  },
  {
  symbol: "APLT",
  name: "Applied Therapeutics, Inc.",
  lastSale: "21.17",
  marketCap: "$474.96M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aplt"
  },
  {
  symbol: "AUVI",
  name: "Applied UV, Inc.",
  lastSale: "6.37",
  marketCap: "$41.68M",
  ipoYear: "2020",
  sector: "Consumer Durables",
  industry: "Building Products",
  summaryQuote: "https://old.nasdaq.com/symbol/auvi"
  },
  {
  symbol: "APRE",
  name: "Aprea Therapeutics, Inc.",
  lastSale: "25.67",
  marketCap: "$543.87M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/apre"
  },
  {
  symbol: "APVO",
  name: "Aptevo Therapeutics Inc.",
  lastSale: "6.82",
  marketCap: "$22.05M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/apvo"
  },
  {
  symbol: "APTX",
  name: "Aptinyx Inc.",
  lastSale: "2.97",
  marketCap: "$139.48M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aptx"
  },
  {
  symbol: "APM",
  name: "Aptorum Group Limited",
  lastSale: "2.06",
  marketCap: "$70.06M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/apm"
  },
  {
  symbol: "APTO",
  name: "Aptose Biosciences, Inc.",
  lastSale: "4.7",
  marketCap: "$411.17M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/apto"
  },
  {
  symbol: "APYX",
  name: "Apyx Medical Corporation",
  lastSale: "5.94",
  marketCap: "$203.25M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/apyx"
  },
  {
  symbol: "AQMS",
  name: "Aqua Metals, Inc.",
  lastSale: "0.9397",
  marketCap: "$57.49M",
  ipoYear: "2015",
  sector: "Basic Industries",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/aqms"
  },
  {
  symbol: "AQB",
  name: "AquaBounty Technologies, Inc.",
  lastSale: "4.01",
  marketCap: "$179.55M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/aqb"
  },
  {
  symbol: "AQST",
  name: "Aquestive Therapeutics, Inc.",
  lastSale: "5.4",
  marketCap: "$181.55M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aqst"
  },
  {
  symbol: "ARAV",
  name: "Aravive, Inc.",
  lastSale: "4.92",
  marketCap: "$79.1M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arav"
  },
  {
  symbol: "ABUS",
  name: "Arbutus Biopharma Corporation",
  lastSale: "2.89",
  marketCap: "$242.97M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/abus"
  },
  {
  symbol: "ABIO",
  name: "ARCA biopharma, Inc.",
  lastSale: "3.95",
  marketCap: "$36.74M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/abio"
  },
  {
  symbol: "RKDA",
  name: "Arcadia Biosciences, Inc.",
  lastSale: "3.35",
  marketCap: "$35.84M",
  ipoYear: "2015",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/rkda"
  },
  {
  symbol: "ARCB",
  name: "ArcBest Corporation",
  lastSale: "31.43",
  marketCap: "$799.73M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/arcb"
  },
  {
  symbol: "ACGL",
  name: "Arch Capital Group Ltd.",
  lastSale: "29.21",
  marketCap: "$11.86B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/acgl"
  },
  {
  symbol: "ACGLO",
  name: "Arch Capital Group Ltd.",
  lastSale: "26.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/acglo"
  },
  {
  symbol: "ACGLP",
  name: "Arch Capital Group Ltd.",
  lastSale: "25.73",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/acglp"
  },
  {
  symbol: "FUV",
  name: "Arcimoto, Inc.",
  lastSale: "5.79",
  marketCap: "$182.47M",
  ipoYear: "2017",
  sector: "Consumer Non-Durables",
  industry: "Motor Vehicles",
  summaryQuote: "https://old.nasdaq.com/symbol/fuv"
  },
  {
  symbol: "ACTCU",
  name: "ArcLight Clean Transition Corp.",
  lastSale: "9.94",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/actcu"
  },
  {
  symbol: "ARCE",
  name: "Arco Platform Limited",
  lastSale: "35.65",
  marketCap: "$2.05B",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/arce"
  },
  {
  symbol: "ARCT",
  name: "Arcturus Therapeutics Holdings Inc.",
  lastSale: "52.58",
  marketCap: "$1.29B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arct"
  },
  {
  symbol: "ARQT",
  name: "Arcutis Biotherapeutics, Inc.",
  lastSale: "21.25",
  marketCap: "$926.27M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arqt"
  },
  {
  symbol: "ARDX",
  name: "Ardelyx, Inc.",
  lastSale: "5.28",
  marketCap: "$470.66M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ardx"
  },
  {
  symbol: "ARNA",
  name: "Arena Pharmaceuticals, Inc.",
  lastSale: "87.14",
  marketCap: "$5.02B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arna"
  },
  {
  symbol: "ARCC",
  name: "Ares Capital Corporation",
  lastSale: "14.215",
  marketCap: "$6.01B",
  ipoYear: "2004",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/arcc"
  },
  {
  symbol: "ARGX",
  name: "argenx SE",
  lastSale: "258.83",
  marketCap: "$12.19B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/argx"
  },
  {
  symbol: "ARDS",
  name: "Aridis Pharmaceuticals Inc.",
  lastSale: "7",
  marketCap: "$62.46M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ards"
  },
  {
  symbol: "ARKR",
  name: "Ark Restaurants Corp.",
  lastSale: "10.76",
  marketCap: "$37.69M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/arkr"
  },
  {
  symbol: "ARRY",
  name: "Array Technologies, Inc.",
  lastSale: "38",
  marketCap: "$4.83B",
  ipoYear: "2020",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/arry"
  },
  {
  symbol: "DWCR",
  name: "Arrow DWA Country Rotation ETF",
  lastSale: "27.3042",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwcr"
  },
  {
  symbol: "DWAT",
  name: "Arrow DWA Tactical ETF",
  lastSale: "11.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwat"
  },
  {
  symbol: "AROW",
  name: "Arrow Financial Corporation",
  lastSale: "27.49",
  marketCap: "$425.8M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/arow"
  },
  {
  symbol: "ARWR",
  name: "Arrowhead Pharmaceuticals, Inc.",
  lastSale: "61.69",
  marketCap: "$6.31B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arwr"
  },
  {
  symbol: "ARTL",
  name: "Artelo Biosciences, Inc.",
  lastSale: "0.5651",
  marketCap: "$8.54M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/artl"
  },
  {
  symbol: "ARTLW",
  name: "Artelo Biosciences, Inc.",
  lastSale: "0.0497",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/artlw"
  },
  {
  symbol: "ARTNA",
  name: "Artesian Resources Corporation",
  lastSale: "36.21",
  marketCap: "$338.06M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/artna"
  },
  {
  symbol: "AACQ",
  name: "Artius Acquisition Inc.",
  lastSale: "9.685",
  marketCap: "$877.1M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aacq"
  },
  {
  symbol: "AACQU",
  name: "Artius Acquisition Inc.",
  lastSale: "10.05",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aacqu"
  },
  {
  symbol: "AACQW",
  name: "Artius Acquisition Inc.",
  lastSale: "1.2",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aacqw"
  },
  {
  symbol: "ARTW",
  name: "Art&#39;s-Way Manufacturing Co., Inc.",
  lastSale: "2.36",
  marketCap: "$10.46M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/artw"
  },
  {
  symbol: "ARVN",
  name: "Arvinas, Inc.",
  lastSale: "20.53",
  marketCap: "$805.55M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arvn"
  },
  {
  symbol: "ARYB",
  name: "ARYA Sciences Acquisition Corp II",
  lastSale: "10.1",
  marketCap: "$193.78M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aryb"
  },
  {
  symbol: "ARYBU",
  name: "ARYA Sciences Acquisition Corp II",
  lastSale: "10.39",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arybu"
  },
  {
  symbol: "ARYBW",
  name: "ARYA Sciences Acquisition Corp II",
  lastSale: "1.83",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/arybw"
  },
  {
  symbol: "ARYA",
  name: "ARYA Sciences Acquisition Corp III",
  lastSale: "10.47",
  marketCap: "$200.88M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/arya"
  },
  {
  symbol: "ASND",
  name: "Ascendis Pharma A/S",
  lastSale: "164.23",
  marketCap: "$8.77B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/asnd"
  },
  {
  symbol: "APWC",
  name: "Asia Pacific Wire ",
  lastSale: "1.32",
  marketCap: "$18.24M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/apwc"
  },
  {
  symbol: "ASLN",
  name: "ASLAN Pharmaceuticals Limited",
  lastSale: "1.71",
  marketCap: "$64.96M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/asln"
  },
  {
  symbol: "ASML",
  name: "ASML Holding N.V.",
  lastSale: "366.37",
  marketCap: "$153.28B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/asml"
  },
  {
  symbol: "ASPU",
  name: "Aspen Group Inc.",
  lastSale: "10.59",
  marketCap: "$238.24M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aspu"
  },
  {
  symbol: "AZPN",
  name: "Aspen Technology, Inc.",
  lastSale: "120.25",
  marketCap: "$8.14B",
  ipoYear: "1994",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/azpn"
  },
  {
  symbol: "AWH",
  name: "Aspira Women&#39;s Health Inc.",
  lastSale: "3.63",
  marketCap: "$377.61M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/awh"
  },
  {
  symbol: "ASMB",
  name: "Assembly Biosciences, Inc.",
  lastSale: "14.81",
  marketCap: "$486.58M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/asmb"
  },
  {
  symbol: "ASRT",
  name: "Assertio Holdings, Inc.",
  lastSale: "0.6866",
  marketCap: "$73.55M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/asrt"
  },
  {
  symbol: "ASTE",
  name: "Astec Industries, Inc.",
  lastSale: "53.09",
  marketCap: "$1.2B",
  ipoYear: "1986",
  sector: "Capital Goods",
  industry: "Construction/Ag Equipment/Trucks",
  summaryQuote: "https://old.nasdaq.com/symbol/aste"
  },
  {
  symbol: "AZN",
  name: "Astrazeneca PLC",
  lastSale: "52.48",
  marketCap: "$137.74B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/azn"
  },
  {
  symbol: "ATRO",
  name: "Astronics Corporation",
  lastSale: "7",
  marketCap: "$215.29M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/atro"
  },
  {
  symbol: "ALOT",
  name: "AstroNova, Inc.",
  lastSale: "8.07",
  marketCap: "$57.85M",
  ipoYear: "1983",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/alot"
  },
  {
  symbol: "ASTC",
  name: "Astrotech Corporation",
  lastSale: "2.08",
  marketCap: "$16.32M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/astc"
  },
  {
  symbol: "ASUR",
  name: "Asure Software Inc",
  lastSale: "7.71",
  marketCap: "$122.21M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/asur"
  },
  {
  symbol: "AACG",
  name: "ATA Creativity Global",
  lastSale: "1.12",
  marketCap: "$35.55M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aacg"
  },
  {
  symbol: "ATRA",
  name: "Atara Biotherapeutics, Inc.",
  lastSale: "14.13",
  marketCap: "$1.05B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/atra"
  },
  {
  symbol: "ATNX",
  name: "Athenex, Inc.",
  lastSale: "11.38",
  marketCap: "$1.06B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/atnx"
  },
  {
  symbol: "ATHX",
  name: "Athersys, Inc.",
  lastSale: "1.62",
  marketCap: "$319.79M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/athx"
  },
  {
  symbol: "ATHA",
  name: "Athira Pharma, Inc.",
  lastSale: "18.76",
  marketCap: "$578.17M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/atha"
  },
  {
  symbol: "ATIF",
  name: "ATIF Holdings Limited",
  lastSale: "1.21",
  marketCap: "$56.89M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atif"
  },
  {
  symbol: "AAME",
  name: "Atlantic American Corporation",
  lastSale: "2.13",
  marketCap: "$43.57M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/aame"
  },
  {
  symbol: "ACBI",
  name: "Atlantic Capital Bancshares, Inc.",
  lastSale: "13.66",
  marketCap: "$289.63M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/acbi"
  },
  {
  symbol: "AUB",
  name: "Atlantic Union Bankshares Corporation",
  lastSale: "25.13",
  marketCap: "$1.98B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/aub"
  },
  {
  symbol: "AUBAP",
  name: "Atlantic Union Bankshares Corporation",
  lastSale: "26.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/aubap"
  },
  {
  symbol: "AY",
  name: "Atlantica Sustainable Infrastructure plc",
  lastSale: "29.89",
  marketCap: "$3.04B",
  ipoYear: "2014",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/ay"
  },
  {
  symbol: "ATLC",
  name: "Atlanticus Holdings Corporation",
  lastSale: "12.2",
  marketCap: "$195.17M",
  ipoYear: "1995",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atlc"
  },
  {
  symbol: "AAWW",
  name: "Atlas Air Worldwide Holdings",
  lastSale: "62.12",
  marketCap: "$1.62B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aaww"
  },
  {
  symbol: "ATCX",
  name: "Atlas Technical Consultants, Inc.",
  lastSale: "6.65",
  marketCap: "$38.52M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atcx"
  },
  {
  symbol: "ATCXW",
  name: "Atlas Technical Consultants, Inc.",
  lastSale: "0.85",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/atcxw"
  },
  {
  symbol: "TEAM",
  name: "Atlassian Corporation Plc",
  lastSale: "213.01",
  marketCap: "$53.08B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/team"
  },
  {
  symbol: "ATNI",
  name: "ATN International, Inc.",
  lastSale: "44.64",
  marketCap: "$712.83M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/atni"
  },
  {
  symbol: "ATOM",
  name: "Atomera Incorporated",
  lastSale: "8.71",
  marketCap: "$172.68M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/atom"
  },
  {
  symbol: "ATOS",
  name: "Atossa Therapeutics, Inc.",
  lastSale: "1.6",
  marketCap: "$16.63M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/atos"
  },
  {
  symbol: "BCEL",
  name: "Atreca, Inc.",
  lastSale: "14.36",
  marketCap: "$517.38M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bcel"
  },
  {
  symbol: "ATRC",
  name: "AtriCure, Inc.",
  lastSale: "37.69",
  marketCap: "$1.69B",
  ipoYear: "2005",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/atrc"
  },
  {
  symbol: "ATRI",
  name: "Atrion Corporation",
  lastSale: "631.21",
  marketCap: "$1.15B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/atri"
  },
  {
  symbol: "LIFE",
  name: "aTyr Pharma, Inc.",
  lastSale: "3.22",
  marketCap: "$32.23M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/life"
  },
  {
  symbol: "AUBN",
  name: "Auburn National Bancorporation, Inc.",
  lastSale: "37.16",
  marketCap: "$132.52M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/aubn"
  },
  {
  symbol: "AUDC",
  name: "AudioCodes Ltd.",
  lastSale: "31.29",
  marketCap: "$1.02B",
  ipoYear: "1999",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/audc"
  },
  {
  symbol: "AEYE",
  name: "AudioEye, Inc.",
  lastSale: "16.8",
  marketCap: "$163.16M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/aeye"
  },
  {
  symbol: "AUPH",
  name: "Aurinia Pharmaceuticals Inc",
  lastSale: "16.05",
  marketCap: "$2.03B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/auph"
  },
  {
  symbol: "EARS",
  name: "Auris Medical Holding Ltd.",
  lastSale: "0.844",
  marketCap: "$5.98M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ears"
  },
  {
  symbol: "JG",
  name: "Aurora Mobile Limited",
  lastSale: "1.73",
  marketCap: "$200.2M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/jg"
  },
  {
  symbol: "ADSK",
  name: "Autodesk, Inc.",
  lastSale: "250.6",
  marketCap: "$54.95B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/adsk"
  },
  {
  symbol: "AUTL",
  name: "Autolus Therapeutics plc",
  lastSale: "11.18",
  marketCap: "$584.16M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/autl"
  },
  {
  symbol: "ADP",
  name: "Automatic Data Processing, Inc.",
  lastSale: "146.03",
  marketCap: "$62.77B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/adp"
  },
  {
  symbol: "AUTO",
  name: "AutoWeb, Inc.",
  lastSale: "3.53",
  marketCap: "$46.41M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/auto"
  },
  {
  symbol: "AVDL",
  name: "Avadel Pharmaceuticals plc",
  lastSale: "5.36",
  marketCap: "$312.06M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/avdl"
  },
  {
  symbol: "AHI",
  name: "Avadim Health, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Package Goods/Cosmetics",
  summaryQuote: "https://old.nasdaq.com/symbol/ahi"
  },
  {
  symbol: "AVCO",
  name: "Avalon GloboCare Corp.",
  lastSale: "1.14",
  marketCap: "$91.28M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/avco"
  },
  {
  symbol: "ATXI",
  name: "Avenue Therapeutics, Inc.",
  lastSale: "3.11",
  marketCap: "$51.95M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/atxi"
  },
  {
  symbol: "AVEO",
  name: "AVEO Pharmaceuticals, Inc.",
  lastSale: "5.68",
  marketCap: "$146.59M",
  ipoYear: "2010",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aveo"
  },
  {
  symbol: "AVNW",
  name: "Aviat Networks, Inc.",
  lastSale: "22.05",
  marketCap: "$119.58M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/avnw"
  },
  {
  symbol: "CDMO",
  name: "Avid Bioservices, Inc.",
  lastSale: "7.83",
  marketCap: "$443.2M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cdmo"
  },
  {
  symbol: "CDMOP",
  name: "Avid Bioservices, Inc.",
  lastSale: "26.1",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cdmop"
  },
  {
  symbol: "AVID",
  name: "Avid Technology, Inc.",
  lastSale: "8.72",
  marketCap: "$383.27M",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/avid"
  },
  {
  symbol: "RNA",
  name: "Avidity Biosciences, Inc.",
  lastSale: "27.3",
  marketCap: "$1.02B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rna"
  },
  {
  symbol: "AVGR",
  name: "Avinger, Inc.",
  lastSale: "0.266",
  marketCap: "$22.49M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/avgr"
  },
  {
  symbol: "CAR",
  name: "Avis Budget Group, Inc.",
  lastSale: "35.98",
  marketCap: "$2.51B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Rental/Leasing Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/car"
  },
  {
  symbol: "RCEL",
  name: "Avita Therapeutics, Inc.",
  lastSale: "23.14",
  marketCap: "$518.61M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/rcel"
  },
  {
  symbol: "AVT",
  name: "Avnet, Inc.",
  lastSale: "26.02",
  marketCap: "$2.57B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/avt"
  },
  {
  symbol: "AVRO",
  name: "AVROBIO, Inc.",
  lastSale: "16.1",
  marketCap: "$586.73M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/avro"
  },
  {
  symbol: "AWRE",
  name: "Aware, Inc.",
  lastSale: "2.63",
  marketCap: "$56.55M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/awre"
  },
  {
  symbol: "ACLS",
  name: "Axcelis Technologies, Inc.",
  lastSale: "22.33",
  marketCap: "$747.28M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/acls"
  },
  {
  symbol: "AXLA",
  name: "Axcella Health Inc.",
  lastSale: "4.75",
  marketCap: "$173.12M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/axla"
  },
  {
  symbol: "AXGN",
  name: "AxoGen, Inc.",
  lastSale: "12.54",
  marketCap: "$502.66M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/axgn"
  },
  {
  symbol: "AAXN",
  name: "Axon Enterprise, Inc.",
  lastSale: "101.05",
  marketCap: "$6.41B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Ordnance And Accessories",
  summaryQuote: "https://old.nasdaq.com/symbol/aaxn"
  },
  {
  symbol: "AXNX",
  name: "Axonics Modulation Technologies, Inc.",
  lastSale: "50.32",
  marketCap: "$1.99B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/axnx"
  },
  {
  symbol: "AXGT",
  name: "Axovant Gene Therapies Ltd.",
  lastSale: "3.78",
  marketCap: "$178.6M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/axgt"
  },
  {
  symbol: "AXSM",
  name: "Axsome Therapeutics, Inc.",
  lastSale: "68.07",
  marketCap: "$2.54B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/axsm"
  },
  {
  symbol: "AXTI",
  name: "AXT Inc",
  lastSale: "5.89",
  marketCap: "$241.47M",
  ipoYear: "1998",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/axti"
  },
  {
  symbol: "AYLA",
  name: "Ayala Pharmaceuticals, Inc.",
  lastSale: "13.27",
  marketCap: "$169.58M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ayla"
  },
  {
  symbol: "AYRO",
  name: "AYRO, Inc.",
  lastSale: "2.745",
  marketCap: "$66.66M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ayro"
  },
  {
  symbol: "AYTU",
  name: "Aytu BioScience, Inc.",
  lastSale: "0.9889",
  marketCap: "$124.44M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/aytu"
  },
  {
  symbol: "AZYO",
  name: "Aziyo Biologics, Inc.",
  lastSale: "11.17",
  marketCap: "$114.22M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/azyo"
  },
  {
  symbol: "AZRX",
  name: "AzurRx BioPharma, Inc.",
  lastSale: "0.7899",
  marketCap: "$22.51M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/azrx"
  },
  {
  symbol: "RILY",
  name: "B. Riley Financial, Inc.",
  lastSale: "25.57",
  marketCap: "$650.83M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rily"
  },
  {
  symbol: "RILYG",
  name: "B. Riley Financial, Inc.",
  lastSale: "24.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyg"
  },
  {
  symbol: "RILYH",
  name: "B. Riley Financial, Inc.",
  lastSale: "24.8",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyh"
  },
  {
  symbol: "RILYI",
  name: "B. Riley Financial, Inc.",
  lastSale: "24.8",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyi"
  },
  {
  symbol: "RILYL",
  name: "B. Riley Financial, Inc.",
  lastSale: "25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyl"
  },
  {
  symbol: "RILYM",
  name: "B. Riley Financial, Inc.",
  lastSale: "23.8",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilym"
  },
  {
  symbol: "RILYN",
  name: "B. Riley Financial, Inc.",
  lastSale: "23.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyn"
  },
  {
  symbol: "RILYO",
  name: "B. Riley Financial, Inc.",
  lastSale: "24.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyo"
  },
  {
  symbol: "RILYP",
  name: "B. Riley Financial, Inc.",
  lastSale: "23.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyp"
  },
  {
  symbol: "RILYZ",
  name: "B. Riley Financial, Inc.",
  lastSale: "24.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rilyz"
  },
  {
  symbol: "BOSC",
  name: "B.O.S. Better Online Solutions",
  lastSale: "2.654",
  marketCap: "$11.46M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/bosc"
  },
  {
  symbol: "BIDU",
  name: "Baidu, Inc.",
  lastSale: "134.89",
  marketCap: "$46.01B",
  ipoYear: "2005",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/bidu"
  },
  {
  symbol: "BCPC",
  name: "Balchem Corporation",
  lastSale: "101.94",
  marketCap: "$3.3B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/bcpc"
  },
  {
  symbol: "BLDP",
  name: "Ballard Power Systems, Inc.",
  lastSale: "15.19",
  marketCap: "$3.96B",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/bldp"
  },
  {
  symbol: "BANF",
  name: "BancFirst Corporation",
  lastSale: "44.12",
  marketCap: "$1.44B",
  ipoYear: "1993",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/banf"
  },
  {
  symbol: "BANFP",
  name: "BancFirst Corporation",
  lastSale: "27.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/banfp"
  },
  {
  symbol: "BAND",
  name: "Bandwidth Inc.",
  lastSale: "163.69",
  marketCap: "$3.96B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/band"
  },
  {
  symbol: "BFC",
  name: "Bank First Corporation",
  lastSale: "64.17",
  marketCap: "$496.02M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bfc"
  },
  {
  symbol: "BOCH",
  name: "Bank of Commerce Holdings (CA)",
  lastSale: "7.96",
  marketCap: "$133.66M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/boch"
  },
  {
  symbol: "BMRC",
  name: "Bank of Marin Bancorp",
  lastSale: "30.32",
  marketCap: "$412.22M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bmrc"
  },
  {
  symbol: "BMLP",
  name: "Bank Of Montreal",
  lastSale: "28.94",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Commercial Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bmlp"
  },
  {
  symbol: "BKSC",
  name: "Bank of South Carolina Corp.",
  lastSale: "16.7792",
  marketCap: "$92.61M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bksc"
  },
  {
  symbol: "BOTJ",
  name: "Bank of the James Financial Group, Inc.",
  lastSale: "10.25",
  marketCap: "$44.48M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/botj"
  },
  {
  symbol: "OZK",
  name: "Bank OZK",
  lastSale: "23.89",
  marketCap: "$3.09B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ozk"
  },
  {
  symbol: "BSVN",
  name: "Bank7 Corp.",
  lastSale: "9.36",
  marketCap: "$86.36M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bsvn"
  },
  {
  symbol: "BFIN",
  name: "BankFinancial Corporation",
  lastSale: "7.54",
  marketCap: "$111.95M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/bfin"
  },
  {
  symbol: "BWFG",
  name: "Bankwell Financial Group, Inc.",
  lastSale: "15.87",
  marketCap: "$125.17M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bwfg"
  },
  {
  symbol: "BANR",
  name: "Banner Corporation",
  lastSale: "37.58",
  marketCap: "$1.32B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/banr"
  },
  {
  symbol: "BZUN",
  name: "Baozun Inc.",
  lastSale: "37.9",
  marketCap: "$2.9B",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/bzun"
  },
  {
  symbol: "DFVL",
  name: "Barclays PLC",
  lastSale: "85.735",
  marketCap: "$6.1M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dfvl"
  },
  {
  symbol: "DFVS",
  name: "Barclays PLC",
  lastSale: "13.335",
  marketCap: "$1.82M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dfvs"
  },
  {
  symbol: "TAPR",
  name: "Barclays PLC",
  lastSale: "77",
  marketCap: "$46.71M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tapr"
  },
  {
  symbol: "BBSI",
  name: "Barrett Business Services, Inc.",
  lastSale: "58.94",
  marketCap: "$450.05M",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bbsi"
  },
  {
  symbol: "GOLD",
  name: "Barrick Gold Corporation",
  lastSale: "27.09",
  marketCap: "$48.17B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/gold"
  },
  {
  symbol: "BSET",
  name: "Bassett Furniture Industries, Incorporated",
  lastSale: "14.88",
  marketCap: "$148.45M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/bset"
  },
  {
  symbol: "ZTEST",
  name: "BATS BZX Exchange",
  lastSale: "10.1",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ztest"
  },
  {
  symbol: "BXRX",
  name: "Baudax Bio, Inc.",
  lastSale: "1.21",
  marketCap: "$22.23M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bxrx"
  },
  {
  symbol: "BCML",
  name: "BayCom Corp",
  lastSale: "11.65",
  marketCap: "$137.86M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bcml"
  },
  {
  symbol: "BBQ",
  name: "BBQ Holdings, Inc. ",
  lastSale: "4.185",
  marketCap: "$38.85M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/bbq"
  },
  {
  symbol: "BCBP",
  name: "BCB Bancorp, Inc. (NJ)",
  lastSale: "9.72",
  marketCap: "$166.03M",
  ipoYear: "2005",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/bcbp"
  },
  {
  symbol: "BLSA",
  name: "BCLS Acquisition Corp.",
  lastSale: "10.35",
  marketCap: "$166.38M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/blsa"
  },
  {
  symbol: "BCTG",
  name: "BCTG Acquisition Corp.",
  lastSale: "10.1",
  marketCap: "$215.91M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bctg"
  },
  {
  symbol: "BECN",
  name: "Beacon Roofing Supply, Inc.",
  lastSale: "33.01",
  marketCap: "$2.29B",
  ipoYear: "2004",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/becn"
  },
  {
  symbol: "BEEM",
  name: "Beam Global",
  lastSale: "15.46",
  marketCap: "$103.39M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/beem"
  },
  {
  symbol: "BEEMW",
  name: "Beam Global",
  lastSale: "9.29",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/beemw"
  },
  {
  symbol: "BEAM",
  name: "Beam Therapeutics Inc.",
  lastSale: "38.28",
  marketCap: "$2.11B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/beam"
  },
  {
  symbol: "BBGI",
  name: "Beasley Broadcast Group, Inc.",
  lastSale: "1.25",
  marketCap: "$36.61M",
  ipoYear: "2000",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/bbgi"
  },
  {
  symbol: "BBBY",
  name: "Bed Bath & Beyond Inc.",
  lastSale: "24.01",
  marketCap: "$3.03B",
  ipoYear: "1992",
  sector: "Consumer Services",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/bbby"
  },
  {
  symbol: "BGNE",
  name: "BeiGene, Ltd.",
  lastSale: "301.53",
  marketCap: "$27.33B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bgne"
  },
  {
  symbol: "BELFA",
  name: "Bel Fuse Inc.",
  lastSale: "11.03",
  marketCap: "$136.52M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/belfa"
  },
  {
  symbol: "BELFB",
  name: "Bel Fuse Inc.",
  lastSale: "10.28",
  marketCap: "$127.24M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/belfb"
  },
  {
  symbol: "BLPH",
  name: "Bellerophon Therapeutics, Inc.",
  lastSale: "8.25",
  marketCap: "$78.36M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/blph"
  },
  {
  symbol: "BLCM",
  name: "Bellicum Pharmaceuticals, Inc.",
  lastSale: "6.23",
  marketCap: "$31.52M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/blcm"
  },
  {
  symbol: "BLU",
  name: "BELLUS Health Inc.",
  lastSale: "2.5",
  marketCap: "$195.84M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/blu"
  },
  {
  symbol: "BNFT",
  name: "Benefitfocus, Inc.",
  lastSale: "10.82",
  marketCap: "$349.06M",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/bnft"
  },
  {
  symbol: "BNTC",
  name: "Benitec Biopharma Inc.",
  lastSale: "2.76",
  marketCap: "$12.16M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bntc"
  },
  {
  symbol: "BSY",
  name: "Bentley Systems, Incorporated",
  lastSale: "35.55",
  marketCap: "$9.29B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/bsy"
  },
  {
  symbol: "BLI",
  name: "Berkeley Lights, Inc.",
  lastSale: "74.75",
  marketCap: "$4.76B",
  ipoYear: "2020",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/bli"
  },
  {
  symbol: "BRY",
  name: "Berry Corporation (bry)",
  lastSale: "2.94",
  marketCap: "$234.82M",
  ipoYear: "2018",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/bry"
  },
  {
  symbol: "BWMX",
  name: "Betterware de Mexico, S.A.B de C.V.",
  lastSale: "24.17",
  marketCap: "$781.74M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/bwmx"
  },
  {
  symbol: "XAIR",
  name: "Beyond Air, Inc.",
  lastSale: "5.44",
  marketCap: "$93.28M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/xair"
  },
  {
  symbol: "BYND",
  name: "Beyond Meat, Inc.",
  lastSale: "161.95",
  marketCap: "$10.11B",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/bynd"
  },
  {
  symbol: "BYSI",
  name: "BeyondSpring, Inc.",
  lastSale: "15.07",
  marketCap: "$459.53M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bysi"
  },
  {
  symbol: "BGCP",
  name: "BGC Partners, Inc.",
  lastSale: "2.51",
  marketCap: "$902.68M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/bgcp"
  },
  {
  symbol: "BCYC",
  name: "Bicycle Therapeutics plc",
  lastSale: "18.83",
  marketCap: "$363.12M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bcyc"
  },
  {
  symbol: "BGFV",
  name: "Big 5 Sporting Goods Corporation",
  lastSale: "8.12",
  marketCap: "$177.84M",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/bgfv"
  },
  {
  symbol: "BRPA",
  name: "Big Rock Partners Acquisition Corp.",
  lastSale: "10.7837",
  marketCap: "$28.99M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brpa"
  },
  {
  symbol: "BRPAR",
  name: "Big Rock Partners Acquisition Corp.",
  lastSale: "0.2004",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brpar"
  },
  {
  symbol: "BRPAU",
  name: "Big Rock Partners Acquisition Corp.",
  lastSale: "10.2",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brpau"
  },
  {
  symbol: "BRPAW",
  name: "Big Rock Partners Acquisition Corp.",
  lastSale: "0.235",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brpaw"
  },
  {
  symbol: "BIGC",
  name: "BigCommerce Holdings, Inc.",
  lastSale: "83.8",
  marketCap: "$5.67B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/bigc"
  },
  {
  symbol: "BILI",
  name: "Bilibili Inc.",
  lastSale: "45.82",
  marketCap: "$15.83B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bili"
  },
  {
  symbol: "BASI",
  name: "Bioanalytical Systems, Inc.",
  lastSale: "5.08",
  marketCap: "$55.82M",
  ipoYear: "1997",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/basi"
  },
  {
  symbol: "BCDA",
  name: "BioCardia, Inc.",
  lastSale: "2.05",
  marketCap: "$25.47M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bcda"
  },
  {
  symbol: "BCDAW",
  name: "BioCardia, Inc.",
  lastSale: "0.62",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bcdaw"
  },
  {
  symbol: "BIOC",
  name: "Biocept, Inc.",
  lastSale: "4.43",
  marketCap: "$5.93M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/bioc"
  },
  {
  symbol: "BCRX",
  name: "BioCryst Pharmaceuticals, Inc.",
  lastSale: "3.71",
  marketCap: "$655.06M",
  ipoYear: "1994",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bcrx"
  },
  {
  symbol: "BDSI",
  name: "BioDelivery Sciences International, Inc.",
  lastSale: "3.24",
  marketCap: "$327.03M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bdsi"
  },
  {
  symbol: "BDSX",
  name: "Biodesix, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bdsx"
  },
  {
  symbol: "BFRA",
  name: "Biofrontera AG",
  lastSale: "7.13",
  marketCap: "$159.89M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bfra"
  },
  {
  symbol: "BIIB",
  name: "Biogen Inc.",
  lastSale: "255.3",
  marketCap: "$39.29B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/biib"
  },
  {
  symbol: "BHTG",
  name: "BioHiTech Global, Inc.",
  lastSale: "1.23",
  marketCap: "$28.61M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bhtg"
  },
  {
  symbol: "BKYI",
  name: "BIO-key International, Inc.",
  lastSale: "0.4304",
  marketCap: "$26.85M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/bkyi"
  },
  {
  symbol: "BIOL",
  name: "Biolase, Inc.",
  lastSale: "0.285",
  marketCap: "$26.27M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/biol"
  },
  {
  symbol: "BLFS",
  name: "BioLife Solutions, Inc.",
  lastSale: "30.24",
  marketCap: "$981.08M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/blfs"
  },
  {
  symbol: "BLRX",
  name: "BioLineRx Ltd.",
  lastSale: "1.47",
  marketCap: "$29.38M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/blrx"
  },
  {
  symbol: "BMRN",
  name: "BioMarin Pharmaceutical Inc.",
  lastSale: "76.18",
  marketCap: "$13.82B",
  ipoYear: "1999",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bmrn"
  },
  {
  symbol: "BMRA",
  name: "Biomerica, Inc.",
  lastSale: "5.41",
  marketCap: "$63.58M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/bmra"
  },
  {
  symbol: "BNGO",
  name: "Bionano Genomics, Inc.",
  lastSale: "0.5299",
  marketCap: "$76.65M",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/bngo"
  },
  {
  symbol: "BNGOW",
  name: "Bionano Genomics, Inc.",
  lastSale: "0.1681",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/bngow"
  },
  {
  symbol: "BVXV",
  name: "BiondVax Pharmaceuticals Ltd.",
  lastSale: "3.28",
  marketCap: "$37.81M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bvxv"
  },
  {
  symbol: "BNTX",
  name: "BioNTech SE",
  lastSale: "83.95",
  marketCap: "$19.99B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bntx"
  },
  {
  symbol: "BPTH",
  name: "Bio-Path Holdings, Inc.",
  lastSale: "3.72",
  marketCap: "$13.73M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bpth"
  },
  {
  symbol: "BSGM",
  name: "BioSig Technologies, Inc.",
  lastSale: "3.03",
  marketCap: "$90.3M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/bsgm"
  },
  {
  symbol: "BSTC",
  name: "BioSpecifics Technologies Corp",
  lastSale: "88.15",
  marketCap: "$647.46M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bstc"
  },
  {
  symbol: "TECH",
  name: "Bio-Techne Corp",
  lastSale: "266.2",
  marketCap: "$10.26B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tech"
  },
  {
  symbol: "BEAT",
  name: "BioTelemetry, Inc.",
  lastSale: "41.58",
  marketCap: "$1.42B",
  ipoYear: "2008",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/beat"
  },
  {
  symbol: "BIVI",
  name: "BioVie Inc.",
  lastSale: "8.03",
  marketCap: "$111.75M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bivi"
  },
  {
  symbol: "BTAI",
  name: "BioXcel Therapeutics, Inc.",
  lastSale: "48.09",
  marketCap: "$1.08B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/btai"
  },
  {
  symbol: "BTBT",
  name: "Bit Digital, Inc.",
  lastSale: "3.92",
  marketCap: "$171.3M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/btbt"
  },
  {
  symbol: "BJRI",
  name: "BJ&#39;s Restaurants, Inc.",
  lastSale: "28.99",
  marketCap: "$645.9M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/bjri"
  },
  {
  symbol: "BDTX",
  name: "Black Diamond Therapeutics, Inc.",
  lastSale: "32.72",
  marketCap: "$1.18B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bdtx"
  },
  {
  symbol: "BLKB",
  name: "Blackbaud, Inc.",
  lastSale: "58.49",
  marketCap: "$2.9B",
  ipoYear: "2004",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/blkb"
  },
  {
  symbol: "BL",
  name: "BlackLine, Inc.",
  lastSale: "95.02",
  marketCap: "$5.41B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/bl"
  },
  {
  symbol: "BKCC",
  name: "BlackRock Capital Investment Corporation",
  lastSale: "2.47",
  marketCap: "$173.33M",
  ipoYear: "2007",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bkcc"
  },
  {
  symbol: "TCPC",
  name: "BlackRock TCP Capital Corp.",
  lastSale: "9.53",
  marketCap: "$550.52M",
  ipoYear: "2012",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tcpc"
  },
  {
  symbol: "BLNK",
  name: "Blink Charging Co.",
  lastSale: "8.04",
  marketCap: "$255.25M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/blnk"
  },
  {
  symbol: "BLNKW",
  name: "Blink Charging Co.",
  lastSale: "4.1734",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/blnkw"
  },
  {
  symbol: "BLMN",
  name: "Bloomin&#39; Brands, Inc.",
  lastSale: "14.77",
  marketCap: "$1.29B",
  ipoYear: "2012",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/blmn"
  },
  {
  symbol: "BCOR",
  name: "Blucora, Inc.",
  lastSale: "11",
  marketCap: "$528.42M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bcor"
  },
  {
  symbol: "BLBD",
  name: "Blue Bird Corporation",
  lastSale: "11.58",
  marketCap: "$313.22M",
  ipoYear: "2014",
  sector: "Capital Goods",
  industry: "Construction/Ag Equipment/Trucks",
  summaryQuote: "https://old.nasdaq.com/symbol/blbd"
  },
  {
  symbol: "BHAT",
  name: "Blue Hat Interactive Entertainment Technology",
  lastSale: "0.865",
  marketCap: "$30.4M",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/bhat"
  },
  {
  symbol: "BLUE",
  name: "bluebird bio, Inc.",
  lastSale: "53.73",
  marketCap: "$3.56B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/blue"
  },
  {
  symbol: "BLCT",
  name: "BlueCity Holdings Limited",
  lastSale: "10.15",
  marketCap: "$361.86M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/blct"
  },
  {
  symbol: "BKEP",
  name: "Blueknight Energy Partners L.P., L.L.C.",
  lastSale: "1.38",
  marketCap: "$56.85M",
  ipoYear: "2011",
  sector: "Energy",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/bkep"
  },
  {
  symbol: "BKEPP",
  name: "Blueknight Energy Partners L.P., L.L.C.",
  lastSale: "5.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/bkepp"
  },
  {
  symbol: "BPMC",
  name: "Blueprint Medicines Corporation",
  lastSale: "105.09",
  marketCap: "$5.81B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bpmc"
  },
  {
  symbol: "ITEQ",
  name: "BlueStar Israel Technology ETF",
  lastSale: "57.5525",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iteq"
  },
  {
  symbol: "BMCH",
  name: "BMC Stock Holdings, Inc.",
  lastSale: "40.99",
  marketCap: "$2.75B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/bmch"
  },
  {
  symbol: "BSBK",
  name: "Bogota Financial Corp.",
  lastSale: "8",
  marketCap: "$105.26M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bsbk"
  },
  {
  symbol: "WIFI",
  name: "Boingo Wireless, Inc.",
  lastSale: "9.52",
  marketCap: "$423.34M",
  ipoYear: "2011",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/wifi"
  },
  {
  symbol: "BOKF",
  name: "BOK Financial Corporation",
  lastSale: "58.19",
  marketCap: "$4.09B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bokf"
  },
  {
  symbol: "BOKFL",
  name: "BOK Financial Corporation",
  lastSale: "25.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bokfl"
  },
  {
  symbol: "BNSO",
  name: "Bonso Electronics International, Inc.",
  lastSale: "4.76",
  marketCap: "$23.29M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/bnso"
  },
  {
  symbol: "BKNG",
  name: "Booking Holdings Inc.",
  lastSale: "1697.71",
  marketCap: "$69.52B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bkng"
  },
  {
  symbol: "BIMI",
  name: "BOQI International Medical Inc.",
  lastSale: "1.93",
  marketCap: "$20.04M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/bimi"
  },
  {
  symbol: "BRQS",
  name: "Borqs Technologies, Inc. ",
  lastSale: "1.05",
  marketCap: "$46.35M",
  ipoYear: "2015",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brqs"
  },
  {
  symbol: "BOMN",
  name: "Boston Omaha Corporation",
  lastSale: "16.59",
  marketCap: "$451.76M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/bomn"
  },
  {
  symbol: "BPFH",
  name: "Boston Private Financial Holdings, Inc.",
  lastSale: "6.17",
  marketCap: "$507.51M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bpfh"
  },
  {
  symbol: "EPAY",
  name: "Bottomline Technologies, Inc.",
  lastSale: "41.05",
  marketCap: "$1.85B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/epay"
  },
  {
  symbol: "BOWX",
  name: "BowX Acquisition Corp.",
  lastSale: "9.75",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bowx"
  },
  {
  symbol: "BOWXU",
  name: "BowX Acquisition Corp.",
  lastSale: "10.135",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bowxu"
  },
  {
  symbol: "BOWXW",
  name: "BowX Acquisition Corp.",
  lastSale: "1.3",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bowxw"
  },
  {
  symbol: "BOXL",
  name: "Boxlight Corporation",
  lastSale: "1.44",
  marketCap: "$73.26M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/boxl"
  },
  {
  symbol: "BBRX",
  name: "Braeburn Pharmaceuticals, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bbrx"
  },
  {
  symbol: "BCLI",
  name: "Brainstorm Cell Therapeutics Inc.",
  lastSale: "10.56",
  marketCap: "$333.35M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bcli"
  },
  {
  symbol: "BWAY",
  name: "Brainsway Ltd.",
  lastSale: "5.8",
  marketCap: "$64.53M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/bway"
  },
  {
  symbol: "BCTX",
  name: "BriaCell Therapeutics Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bctx"
  },
  {
  symbol: "BBI",
  name: "Brickell Biotech, Inc.",
  lastSale: "0.5266",
  marketCap: "$14.63M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/bbi"
  },
  {
  symbol: "BDGE",
  name: "Bridge Bancorp, Inc.",
  lastSale: "19.18",
  marketCap: "$378.78M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bdge"
  },
  {
  symbol: "BBIO",
  name: "BridgeBio Pharma, Inc.",
  lastSale: "39.76",
  marketCap: "$4.87B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/bbio"
  },
  {
  symbol: "BLIN ",
  name: "Bridgeline Digital, Inc.",
  lastSale: "2.24",
  marketCap: "$9.9M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/blin"
  },
  {
  symbol: "BTWNU",
  name: "Bridgetown Holdings Limited",
  lastSale: "10.09",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/btwnu"
  },
  {
  symbol: "BWB",
  name: "Bridgewater Bancshares, Inc.",
  lastSale: "11.13",
  marketCap: "$321.02M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bwb"
  },
  {
  symbol: "BRID",
  name: "Bridgford Foods Corporation",
  lastSale: "18.4",
  marketCap: "$167.01M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/brid"
  },
  {
  symbol: "BCOV",
  name: "Brightcove Inc.",
  lastSale: "13.44",
  marketCap: "$529.73M",
  ipoYear: "2012",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bcov"
  },
  {
  symbol: "BHF",
  name: "Brighthouse Financial, Inc.",
  lastSale: "29.63",
  marketCap: "$2.76B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/bhf"
  },
  {
  symbol: "BHFAL",
  name: "Brighthouse Financial, Inc.",
  lastSale: "27.04",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/bhfal"
  },
  {
  symbol: "BHFAO",
  name: "Brighthouse Financial, Inc.",
  lastSale: "27.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/bhfao"
  },
  {
  symbol: "BHFAP",
  name: "Brighthouse Financial, Inc.",
  lastSale: "26.42",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/bhfap"
  },
  {
  symbol: "BRLI",
  name: "Brilliant Acquisition Corporation",
  lastSale: "9.7934",
  marketCap: "$59.85M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brli"
  },
  {
  symbol: "BRLIR",
  name: "Brilliant Acquisition Corporation",
  lastSale: "0.25",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brlir"
  },
  {
  symbol: "BRLIU",
  name: "Brilliant Acquisition Corporation",
  lastSale: "10.24",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brliu"
  },
  {
  symbol: "BRLIW",
  name: "Brilliant Acquisition Corporation",
  lastSale: "0.1967",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/brliw"
  },
  {
  symbol: "AVGO",
  name: "Broadcom Inc.",
  lastSale: "359.6",
  marketCap: "$145.46B",
  ipoYear: "2009",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/avgo"
  },
  {
  symbol: "AVGOP",
  name: "Broadcom Inc.",
  lastSale: "1216.7223",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/avgop"
  },
  {
  symbol: "BYFC",
  name: "Broadway Financial Corporation",
  lastSale: "1.75",
  marketCap: "$49.07M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/byfc"
  },
  {
  symbol: "BWEN",
  name: "Broadwind, Inc.",
  lastSale: "4.12",
  marketCap: "$69.41M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/bwen"
  },
  {
  symbol: "BROG",
  name: "Brooge Energy Limited ",
  lastSale: "9",
  marketCap: "$986.29M",
  ipoYear: "2018",
  sector: "Energy",
  industry: "Integrated oil Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/brog"
  },
  {
  symbol: "BROGW",
  name: "Brooge Energy Limited ",
  lastSale: "0.46",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Energy",
  industry: "Integrated oil Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/brogw"
  },
  {
  symbol: "BPY",
  name: "Brookfield Property Partners L.P.",
  lastSale: "13.86",
  marketCap: "$12.8B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/bpy"
  },
  {
  symbol: "BPYPN",
  name: "Brookfield Property Partners L.P.",
  lastSale: "19.69",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/bpypn"
  },
  {
  symbol: "BPYPO",
  name: "Brookfield Property Partners L.P.",
  lastSale: "21.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/bpypo"
  },
  {
  symbol: "BPYPP",
  name: "Brookfield Property Partners L.P.",
  lastSale: "21.45",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/bpypp"
  },
  {
  symbol: "BPYU",
  name: "Brookfield Property REIT Inc.",
  lastSale: "14.58",
  marketCap: "$698.52M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/bpyu"
  },
  {
  symbol: "BPYUP",
  name: "Brookfield Property REIT Inc.",
  lastSale: "19.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/bpyup"
  },
  {
  symbol: "BRKL",
  name: "Brookline Bancorp, Inc.",
  lastSale: "9.565",
  marketCap: "$754.86M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/brkl"
  },
  {
  symbol: "BCAC",
  name: "Brookline Capital Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bcac"
  },
  {
  symbol: "BCACU",
  name: "Brookline Capital Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bcacu"
  },
  {
  symbol: "BRKS",
  name: "Brooks Automation, Inc.",
  lastSale: "47.77",
  marketCap: "$3.52B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/brks"
  },
  {
  symbol: "BRP",
  name: "BRP Group, Inc.",
  lastSale: "25.96",
  marketCap: "$2.06B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/brp"
  },
  {
  symbol: "DOOO",
  name: "BRP Inc.",
  lastSale: "57.33",
  marketCap: "$5.04B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/dooo"
  },
  {
  symbol: "BRKR",
  name: "Bruker Corporation",
  lastSale: "42.69",
  marketCap: "$6.54B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/brkr"
  },
  {
  symbol: "BMTC",
  name: "Bryn Mawr Bank Corporation",
  lastSale: "27.05",
  marketCap: "$539.87M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bmtc"
  },
  {
  symbol: "BSQR",
  name: "BSQUARE Corporation",
  lastSale: "1.16",
  marketCap: "$15.26M",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bsqr"
  },
  {
  symbol: "BLDR",
  name: "Builders FirstSource, Inc.",
  lastSale: "31.35",
  marketCap: "$3.66B",
  ipoYear: "2005",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/bldr"
  },
  {
  symbol: "BHSE",
  name: "Bull Horn Holdings Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bhse"
  },
  {
  symbol: "BHSEU",
  name: "Bull Horn Holdings Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/bhseu"
  },
  {
  symbol: "BTAQ",
  name: "Burgundy Technology Acquisition Corporation",
  lastSale: "9.7",
  marketCap: "$418.31M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/btaq"
  },
  {
  symbol: "BTAQU",
  name: "Burgundy Technology Acquisition Corporation",
  lastSale: "9.98",
  marketCap: "$430.39M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/btaqu"
  },
  {
  symbol: "BTAQW",
  name: "Burgundy Technology Acquisition Corporation",
  lastSale: "0.59",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/btaqw"
  },
  {
  symbol: "BNR",
  name: "Burning Rock Biotech Limited",
  lastSale: "30.87",
  marketCap: "$3.14B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/bnr"
  },
  {
  symbol: "BFST",
  name: "Business First Bancshares, Inc.",
  lastSale: "16.36",
  marketCap: "$338.12M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bfst"
  },
  {
  symbol: "CFFI",
  name: "C&F Financial Corporation",
  lastSale: "31.36",
  marketCap: "$114.42M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cffi"
  },
  {
  symbol: "CHRW",
  name: "C.H. Robinson Worldwide, Inc.",
  lastSale: "100.03",
  marketCap: "$13.49B",
  ipoYear: "1997",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/chrw"
  },
  {
  symbol: "CCCC",
  name: "C4 Therapeutics, Inc.",
  lastSale: "25.71",
  marketCap: "$1.11B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cccc"
  },
  {
  symbol: "CABA",
  name: "Cabaletta Bio, Inc.",
  lastSale: "11.84",
  marketCap: "$284.63M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/caba"
  },
  {
  symbol: "CDNS",
  name: "Cadence Design Systems, Inc.",
  lastSale: "109.84",
  marketCap: "$30.64B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/cdns"
  },
  {
  symbol: "CDZI",
  name: "Cadiz, Inc.",
  lastSale: "9.96",
  marketCap: "$346.6M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/cdzi"
  },
  {
  symbol: "CZR",
  name: "Caesars Entertainment, Inc.",
  lastSale: "48.47",
  marketCap: "$9.89B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/czr"
  },
  {
  symbol: "CSTE",
  name: "Caesarstone Ltd.",
  lastSale: "10.4",
  marketCap: "$358.12M",
  ipoYear: "2012",
  sector: "Capital Goods",
  industry: "Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/cste"
  },
  {
  symbol: "CLBS",
  name: "Caladrius Biosciences, Inc.",
  lastSale: "1.59",
  marketCap: "$30.72M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/clbs"
  },
  {
  symbol: "CHY",
  name: "Calamos Convertible and High Income Fund",
  lastSale: "12.08",
  marketCap: "$884.86M",
  ipoYear: "2003",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chy"
  },
  {
  symbol: "CHI",
  name: "Calamos Convertible Opportunities and Income Fund",
  lastSale: "11.42",
  marketCap: "$809.95M",
  ipoYear: "2002",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chi"
  },
  {
  symbol: "CCD",
  name: "Calamos Dynamic Convertible & Income Fund",
  lastSale: "23.72",
  marketCap: "$580.8M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ccd"
  },
  {
  symbol: "CHW",
  name: "Calamos Global Dynamic Income Fund",
  lastSale: "8.16",
  marketCap: "$484.27M",
  ipoYear: "2007",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chw"
  },
  {
  symbol: "CGO",
  name: "Calamos Global Total Return Fund",
  lastSale: "12.02",
  marketCap: "$105.97M",
  ipoYear: "2005",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cgo"
  },
  {
  symbol: "CPZ",
  name: "Calamos Long/Short Equity & Dynamic Income Trust",
  lastSale: "14.68",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cpz"
  },
  {
  symbol: "CSQ",
  name: "Calamos Strategic Total Return Fund",
  lastSale: "13.41",
  marketCap: "$2.08B",
  ipoYear: "2004",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/csq"
  },
  {
  symbol: "CAMP",
  name: "CalAmp Corp.",
  lastSale: "7.66",
  marketCap: "$268.25M",
  ipoYear: "1983",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/camp"
  },
  {
  symbol: "CVGW",
  name: "Calavo Growers, Inc.",
  lastSale: "68.62",
  marketCap: "$1.21B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/cvgw"
  },
  {
  symbol: "CALB",
  name: "California BanCorp",
  lastSale: "12.8",
  marketCap: "$104.31M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/calb"
  },
  {
  symbol: "CALA",
  name: "Calithera Biosciences, Inc.",
  lastSale: "3.66",
  marketCap: "$258.24M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cala"
  },
  {
  symbol: "CALT",
  name: "Calliditas Therapeutics AB",
  lastSale: "25.09",
  marketCap: "$626.52M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/calt"
  },
  {
  symbol: "CALM",
  name: "Cal-Maine Foods, Inc.",
  lastSale: "38.87",
  marketCap: "$1.9B",
  ipoYear: "1996",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/calm"
  },
  {
  symbol: "CLMT",
  name: "Calumet Specialty Products Partners, L.P.",
  lastSale: "3.72",
  marketCap: "$290.19M",
  ipoYear: "2006",
  sector: "Energy",
  industry: "Integrated oil Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/clmt"
  },
  {
  symbol: "CLXT",
  name: "Calyxt, Inc.",
  lastSale: "3.59",
  marketCap: "$132.59M",
  ipoYear: "2017",
  sector: "Basic Industries",
  industry: "Agricultural Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/clxt"
  },
  {
  symbol: "CMBM",
  name: "Cambium Networks Corporation",
  lastSale: "22.19",
  marketCap: "$569.99M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cmbm"
  },
  {
  symbol: "CATC",
  name: "Cambridge Bancorp",
  lastSale: "63.14",
  marketCap: "$437.45M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/catc"
  },
  {
  symbol: "CAC",
  name: "Camden National Corporation",
  lastSale: "31.96",
  marketCap: "$478.22M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cac"
  },
  {
  symbol: "CAMT",
  name: "Camtek Ltd.",
  lastSale: "18.49",
  marketCap: "$723.87M",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/camt"
  },
  {
  symbol: "CAN",
  name: "Canaan Inc.",
  lastSale: "2.01",
  marketCap: "$314.92M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/can"
  },
  {
  symbol: "CSIQ",
  name: "Canadian Solar Inc.",
  lastSale: "38.01",
  marketCap: "$2.24B",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/csiq"
  },
  {
  symbol: "CGIX",
  name: "Cancer Genetics, Inc.",
  lastSale: "3.66",
  marketCap: "$9.18M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/cgix"
  },
  {
  symbol: "CPHC",
  name: "Canterbury Park Holding Corporation",
  lastSale: "11.91",
  marketCap: "$56.09M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/cphc"
  },
  {
  symbol: "CBNK",
  name: "Capital Bancorp, Inc.",
  lastSale: "10.2",
  marketCap: "$140.97M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cbnk"
  },
  {
  symbol: "CCBG",
  name: "Capital City Bank Group",
  lastSale: "21.16",
  marketCap: "$355.07M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ccbg"
  },
  {
  symbol: "CPLP",
  name: "Capital Product Partners L.P.",
  lastSale: "7.28",
  marketCap: "$135.58M",
  ipoYear: "2007",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/cplp"
  },
  {
  symbol: "CSWC",
  name: "Capital Southwest Corporation",
  lastSale: "13.99",
  marketCap: "$260.05M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/cswc"
  },
  {
  symbol: "CSWCL",
  name: "Capital Southwest Corporation",
  lastSale: "25.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/cswcl"
  },
  {
  symbol: "CPTA",
  name: "Capitala Finance Corp.",
  lastSale: "8.9",
  marketCap: "$24.13M",
  ipoYear: "2013",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cpta"
  },
  {
  symbol: "CPTAG",
  name: "Capitala Finance Corp.",
  lastSale: "22.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cptag"
  },
  {
  symbol: "CPTAL",
  name: "Capitala Finance Corp.",
  lastSale: "22.7524",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cptal"
  },
  {
  symbol: "CFFN",
  name: "Capitol Federal Financial, Inc.",
  lastSale: "11.58",
  marketCap: "$1.64B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cffn"
  },
  {
  symbol: "CAPR",
  name: "Capricor Therapeutics, Inc.",
  lastSale: "4.39",
  marketCap: "$86.59M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/capr"
  },
  {
  symbol: "CSTR",
  name: "CapStar Financial Holdings, Inc.",
  lastSale: "10.76",
  marketCap: "$236.01M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cstr"
  },
  {
  symbol: "CPST",
  name: "Capstone Turbine Corporation",
  lastSale: "4.63",
  marketCap: "$51.27M",
  ipoYear: "2000",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/cpst"
  },
  {
  symbol: "CARA",
  name: "Cara Therapeutics, Inc.",
  lastSale: "13.76",
  marketCap: "$645.16M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cara"
  },
  {
  symbol: "CRDF",
  name: "Cardiff Oncology, Inc.",
  lastSale: "15.11",
  marketCap: "$475.97M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/crdf"
  },
  {
  symbol: "CSII",
  name: "Cardiovascular Systems, Inc.",
  lastSale: "38.23",
  marketCap: "$1.53B",
  ipoYear: "1981",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/csii"
  },
  {
  symbol: "CDLX",
  name: "Cardlytics, Inc.",
  lastSale: "84.21",
  marketCap: "$2.3B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/cdlx"
  },
  {
  symbol: "CATM",
  name: "Cardtronics plc",
  lastSale: "18.99",
  marketCap: "$844.62M",
  ipoYear: "2007",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/catm"
  },
  {
  symbol: "CDNA",
  name: "CareDx, Inc.",
  lastSale: "50.87",
  marketCap: "$2.49B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/cdna"
  },
  {
  symbol: "CTRE",
  name: "CareTrust REIT, Inc.",
  lastSale: "17.49",
  marketCap: "$1.67B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/ctre"
  },
  {
  symbol: "CARG",
  name: "CarGurus, Inc.",
  lastSale: "20.24",
  marketCap: "$2.29B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/carg"
  },
  {
  symbol: "PRTS",
  name: "CarParts.com, Inc.",
  lastSale: "14.155",
  marketCap: "$669.82M",
  ipoYear: "2007",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/prts"
  },
  {
  symbol: "TAST",
  name: "Carrols Restaurant Group, Inc.",
  lastSale: "6.305",
  marketCap: "$332.42M",
  ipoYear: "2006",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/tast"
  },
  {
  symbol: "CARE",
  name: "Carter Bank & Trust",
  lastSale: "6.87",
  marketCap: "$181.26M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/care"
  },
  {
  symbol: "CARV",
  name: "Carver Bancorp, Inc.",
  lastSale: "7.08",
  marketCap: "$21.27M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/carv"
  },
  {
  symbol: "CASA",
  name: "Casa Systems, Inc.",
  lastSale: "4.55",
  marketCap: "$378.26M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/casa"
  },
  {
  symbol: "CWST",
  name: "Casella Waste Systems, Inc.",
  lastSale: "57.34",
  marketCap: "$2.91B",
  ipoYear: "1997",
  sector: "Public Utilities",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cwst"
  },
  {
  symbol: "CASY",
  name: "Caseys General Stores, Inc.",
  lastSale: "180.48",
  marketCap: "$6.66B",
  ipoYear: "1983",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/casy"
  },
  {
  symbol: "CASI",
  name: "CASI Pharmaceuticals, Inc.",
  lastSale: "2.11",
  marketCap: "$261.52M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/casi"
  },
  {
  symbol: "CASS",
  name: "Cass Information Systems, Inc",
  lastSale: "40.31",
  marketCap: "$581.31M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cass"
  },
  {
  symbol: "SAVA",
  name: "Cassava Sciences, Inc.",
  lastSale: "9.11",
  marketCap: "$227.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sava"
  },
  {
  symbol: "CSTL",
  name: "Castle Biosciences, Inc.",
  lastSale: "51.24",
  marketCap: "$1.01B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/cstl"
  },
  {
  symbol: "CTRM",
  name: "Castor Maritime Inc.",
  lastSale: "0.1405",
  marketCap: "$18.44M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/ctrm"
  },
  {
  symbol: "CATB",
  name: "Catabasis Pharmaceuticals, Inc.",
  lastSale: "1.56",
  marketCap: "$29.77M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/catb"
  },
  {
  symbol: "CBIO",
  name: "Catalyst Biosciences, Inc. ",
  lastSale: "5.6",
  marketCap: "$123.55M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cbio"
  },
  {
  symbol: "CPRX",
  name: "Catalyst Pharmaceuticals, Inc.",
  lastSale: "3.12",
  marketCap: "$322.81M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cprx"
  },
  {
  symbol: "CATY",
  name: "Cathay General Bancorp",
  lastSale: "23.34",
  marketCap: "$1.86B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/caty"
  },
  {
  symbol: "CVCO",
  name: "Cavco Industries, Inc.",
  lastSale: "167.57",
  marketCap: "$1.54B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/cvco"
  },
  {
  symbol: "CBFV",
  name: "CB Financial Services, Inc.",
  lastSale: "20.21",
  marketCap: "$109.01M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cbfv"
  },
  {
  symbol: "CBAT",
  name: "CBAK Energy Technology, Inc.",
  lastSale: "2.88",
  marketCap: "$187.63M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/cbat"
  },
  {
  symbol: "CBMB",
  name: "CBM Bancorp, Inc.",
  lastSale: "12.76",
  marketCap: "$48.31M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cbmb"
  },
  {
  symbol: "CBOE",
  name: "Cboe Global Markets, Inc.",
  lastSale: "81.3",
  marketCap: "$9.09B",
  ipoYear: "2010",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cboe"
  },
  {
  symbol: "CBTX",
  name: "CBTX, Inc.",
  lastSale: "19.72",
  marketCap: "$492.03M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cbtx"
  },
  {
  symbol: "CDK",
  name: "CDK Global, Inc.",
  lastSale: "43.72",
  marketCap: "$5.31B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cdk"
  },
  {
  symbol: "CDW",
  name: "CDW Corporation",
  lastSale: "123.28",
  marketCap: "$17.59B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/cdw"
  },
  {
  symbol: "CECE",
  name: "CECO Environmental Corp.",
  lastSale: "7.4",
  marketCap: "$262.65M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Pollution Control Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cece"
  },
  {
  symbol: "CELC",
  name: "Celcuity Inc.",
  lastSale: "5.5",
  marketCap: "$56.59M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/celc"
  },
  {
  symbol: "CLDX",
  name: "Celldex Therapeutics, Inc.",
  lastSale: "15.85",
  marketCap: "$620.15M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/cldx"
  },
  {
  symbol: "APOP",
  name: "Cellect Biotechnology Ltd.",
  lastSale: "1.79",
  marketCap: "$7M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/apop"
  },
  {
  symbol: "APOPW",
  name: "Cellect Biotechnology Ltd.",
  lastSale: "0.1575",
  marketCap: "n/a",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/apopw"
  },
  {
  symbol: "CLRB",
  name: "Cellectar Biosciences, Inc.",
  lastSale: "1.17",
  marketCap: "$31.15M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/clrb"
  },
  {
  symbol: "CLRBZ",
  name: "Cellectar Biosciences, Inc.",
  lastSale: "0.1199",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/clrbz"
  },
  {
  symbol: "CLLS",
  name: "Cellectis S.A.",
  lastSale: "17.44",
  marketCap: "$740.96M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/clls"
  },
  {
  symbol: "CBMG",
  name: "Cellular Biomedicine Group, Inc.",
  lastSale: "18.27",
  marketCap: "$355.04M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cbmg"
  },
  {
  symbol: "CLSN",
  name: "Celsion Corporation",
  lastSale: "0.5702",
  marketCap: "$20.62M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/clsn"
  },
  {
  symbol: "CELH",
  name: "Celsius Holdings, Inc.",
  lastSale: "21.81",
  marketCap: "$1.56B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/celh"
  },
  {
  symbol: "CYAD",
  name: "Celyad SA",
  lastSale: "7.51",
  marketCap: "$104.71M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cyad"
  },
  {
  symbol: "CETX",
  name: "Cemtrex Inc.",
  lastSale: "1.09",
  marketCap: "$18.25M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/cetx"
  },
  {
  symbol: "CETXP",
  name: "Cemtrex Inc.",
  lastSale: "2.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/cetxp"
  },
  {
  symbol: "CETXW",
  name: "Cemtrex Inc.",
  lastSale: "0.0564",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/cetxw"
  },
  {
  symbol: "CDEV",
  name: "Centennial Resource Development, Inc.",
  lastSale: "0.5962",
  marketCap: "$165.93M",
  ipoYear: "2016",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/cdev"
  },
  {
  symbol: "CNTG",
  name: "Centogene N.V.",
  lastSale: "11.9",
  marketCap: "$260.15M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/cntg"
  },
  {
  symbol: "CENT",
  name: "Central Garden & Pet Company",
  lastSale: "41.12",
  marketCap: "$2.25B",
  ipoYear: "1993",
  sector: "Consumer Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/cent"
  },
  {
  symbol: "CENTA",
  name: "Central Garden & Pet Company",
  lastSale: "37.08",
  marketCap: "$2.03B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/centa"
  },
  {
  symbol: "CVCY",
  name: "Central Valley Community Bancorp",
  lastSale: "13.76",
  marketCap: "$171.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cvcy"
  },
  {
  symbol: "CNTX",
  name: "Centrexion Therapeutics Corporation",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cntx"
  },
  {
  symbol: "CENX",
  name: "Century Aluminum Company",
  lastSale: "7.19",
  marketCap: "$643.4M",
  ipoYear: "1996",
  sector: "Basic Industries",
  industry: "Aluminum",
  summaryQuote: "https://old.nasdaq.com/symbol/cenx"
  },
  {
  symbol: "CNBKA",
  name: "Century Bancorp, Inc.",
  lastSale: "72.63",
  marketCap: "$404.4M",
  ipoYear: "1987",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cnbka"
  },
  {
  symbol: "CNTY",
  name: "Century Casinos, Inc.",
  lastSale: "4.9",
  marketCap: "$144.92M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/cnty"
  },
  {
  symbol: "CRNT",
  name: "Ceragon Networks Ltd.",
  lastSale: "2.4",
  marketCap: "$194.73M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/crnt"
  },
  {
  symbol: "CERC",
  name: "Cerecor Inc.",
  lastSale: "2.15",
  marketCap: "$163.74M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cerc"
  },
  {
  symbol: "CRNC",
  name: "Cerence Inc.",
  lastSale: "63.35",
  marketCap: "$2.33B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/crnc"
  },
  {
  symbol: "CERN",
  name: "Cerner Corporation",
  lastSale: "72.74",
  marketCap: "$22.21B",
  ipoYear: "1986",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cern"
  },
  {
  symbol: "CERS",
  name: "Cerus Corporation",
  lastSale: "5.96",
  marketCap: "$990.38M",
  ipoYear: "1997",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/cers"
  },
  {
  symbol: "CEVA",
  name: "CEVA, Inc.",
  lastSale: "41.69",
  marketCap: "$923.8M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/ceva"
  },
  {
  symbol: "CFBK",
  name: "CF Bankshares Inc.",
  lastSale: "13.56",
  marketCap: "$89.04M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cfbk"
  },
  {
  symbol: "CFFA",
  name: "CF Finance Acquisition Corp.",
  lastSale: "10.36",
  marketCap: "$366.01M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/cffa"
  },
  {
  symbol: "CFFAU",
  name: "CF Finance Acquisition Corp.",
  lastSale: "10",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/cffau"
  },
  {
  symbol: "CFFAW",
  name: "CF Finance Acquisition Corp.",
  lastSale: "0.8",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/cffaw"
  },
  {
  symbol: "CFII",
  name: "CF Finance Acquisition Corp. II",
  lastSale: "9.75",
  marketCap: "$349.06M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cfii"
  },
  {
  symbol: "CFIIU",
  name: "CF Finance Acquisition Corp. II",
  lastSale: "9.96",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cfiiu"
  },
  {
  symbol: "CFIIW",
  name: "CF Finance Acquisition Corp. II",
  lastSale: "0.95",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cfiiw"
  },
  {
  symbol: "CSBR",
  name: "Champions Oncology, Inc.",
  lastSale: "8.96",
  marketCap: "$114.04M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/csbr"
  },
  {
  symbol: "CHNG",
  name: "Change Healthcare Inc.",
  lastSale: "14.75",
  marketCap: "$4.49B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chng"
  },
  {
  symbol: "CHNGU",
  name: "Change Healthcare Inc.",
  lastSale: "54.08",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chngu"
  },
  {
  symbol: "CTHR",
  name: "Charles & Colvard Ltd.",
  lastSale: "0.8699",
  marketCap: "$25.2M",
  ipoYear: "1997",
  sector: "Consumer Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/cthr"
  },
  {
  symbol: "GTLS",
  name: "Chart Industries, Inc.",
  lastSale: "87.16",
  marketCap: "$3.14B",
  ipoYear: "2006",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/gtls"
  },
  {
  symbol: "CHTR",
  name: "Charter Communications, Inc.",
  lastSale: "583.65",
  marketCap: "$119.59B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chtr"
  },
  {
  symbol: "CHKP",
  name: "Check Point Software Technologies Ltd.",
  lastSale: "119.46",
  marketCap: "$16.75B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/chkp"
  },
  {
  symbol: "CHEK",
  name: "Check-Cap Ltd.",
  lastSale: "0.3141",
  marketCap: "$14.52M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Medical Electronics",
  summaryQuote: "https://old.nasdaq.com/symbol/chek"
  },
  {
  symbol: "CHEKZ",
  name: "Check-Cap Ltd.",
  lastSale: "0.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Electronics",
  summaryQuote: "https://old.nasdaq.com/symbol/chekz"
  },
  {
  symbol: "CMPI",
  name: "Checkmate Pharmaceuticals, Inc.",
  lastSale: "12.15",
  marketCap: "$261.79M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cmpi"
  },
  {
  symbol: "CKPT",
  name: "Checkpoint Therapeutics, Inc.",
  lastSale: "2.43",
  marketCap: "$164.07M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ckpt"
  },
  {
  symbol: "CEMI",
  name: "Chembio Diagnostics, Inc.",
  lastSale: "5.02",
  marketCap: "$101.21M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cemi"
  },
  {
  symbol: "CCXI",
  name: "ChemoCentryx, Inc.",
  lastSale: "52.435",
  marketCap: "$3.61B",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ccxi"
  },
  {
  symbol: "CHMG",
  name: "Chemung Financial Corp",
  lastSale: "35.43",
  marketCap: "$168.15M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/chmg"
  },
  {
  symbol: "CHFS",
  name: "CHF Solutions, Inc.",
  lastSale: "7.08",
  marketCap: "$19.37M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/chfs"
  },
  {
  symbol: "CHMA",
  name: "Chiasma, Inc.",
  lastSale: "3.81",
  marketCap: "$220.23M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/chma"
  },
  {
  symbol: "CSSE",
  name: "Chicken Soup for the Soul Entertainment, Inc.",
  lastSale: "14.9",
  marketCap: "$188.47M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/csse"
  },
  {
  symbol: "CSSEN",
  name: "Chicken Soup for the Soul Entertainment, Inc.",
  lastSale: "25.2198",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/cssen"
  },
  {
  symbol: "CSSEP",
  name: "Chicken Soup for the Soul Entertainment, Inc.",
  lastSale: "23.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/cssep"
  },
  {
  symbol: "PLCE",
  name: "Children&#39;s Place, Inc. (The)",
  lastSale: "26.05",
  marketCap: "$380.01M",
  ipoYear: "1997",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/plce"
  },
  {
  symbol: "CMRX",
  name: "Chimerix, Inc.",
  lastSale: "2.74",
  marketCap: "$170.43M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cmrx"
  },
  {
  symbol: "CAAS",
  name: "China Automotive Systems, Inc.",
  lastSale: "3.03",
  marketCap: "$94.46M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/caas"
  },
  {
  symbol: "CBPO",
  name: "China Biologic Products Holdings, Inc.",
  lastSale: "116.22",
  marketCap: "$4.48B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cbpo"
  },
  {
  symbol: "CCRC",
  name: "China Customer Relations Centers, Inc.",
  lastSale: "4.86",
  marketCap: "$89.08M",
  ipoYear: "2015",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ccrc"
  },
  {
  symbol: "JRJC",
  name: "China Finance Online Co. Limited",
  lastSale: "8.88",
  marketCap: "$21.68M",
  ipoYear: "2004",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/jrjc"
  },
  {
  symbol: "HGSH",
  name: "China HGS Real Estate, Inc.",
  lastSale: "1.3614",
  marketCap: "$30.67M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/hgsh"
  },
  {
  symbol: "CIH",
  name: "China Index Holdings Limited",
  lastSale: "1.41",
  marketCap: "$126.53M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cih"
  },
  {
  symbol: "CJJD",
  name: "China Jo-Jo Drugstores, Inc.",
  lastSale: "0.945",
  marketCap: "$35.87M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cjjd"
  },
  {
  symbol: "CLEU",
  name: "China Liberal Education Holdings Limited",
  lastSale: "5.67",
  marketCap: "$35.91M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cleu"
  },
  {
  symbol: "CHNR",
  name: "China Natural Resources, Inc.",
  lastSale: "1.25",
  marketCap: "$42.49M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/chnr"
  },
  {
  symbol: "CREG",
  name: "China Recycling Energy Corporation",
  lastSale: "3.53",
  marketCap: "$9.36M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/creg"
  },
  {
  symbol: "SXTC",
  name: "China SXT Pharmaceuticals, Inc.",
  lastSale: "0.3315",
  marketCap: "$19.94M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sxtc"
  },
  {
  symbol: "CXDC",
  name: "China XD Plastics Company Limited",
  lastSale: "1.18",
  marketCap: "$83.25M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Containers/Packaging",
  summaryQuote: "https://old.nasdaq.com/symbol/cxdc"
  },
  {
  symbol: "PLIN",
  name: "China Xiangtai Food Co., Ltd.",
  lastSale: "0.9884",
  marketCap: "$23.62M",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Meat/Poultry/Fish",
  summaryQuote: "https://old.nasdaq.com/symbol/plin"
  },
  {
  symbol: "CD",
  name: "Chindata Group Holdings Limited",
  lastSale: "13.53",
  marketCap: "$4.86B",
  ipoYear: "2020",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cd"
  },
  {
  symbol: "KDNY",
  name: "Chinook Therapeutics, Inc.",
  lastSale: "14.45",
  marketCap: "$234.26M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kdny"
  },
  {
  symbol: "IMOS",
  name: "ChipMOS TECHNOLOGIES INC.",
  lastSale: "19.76",
  marketCap: "$718.51M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/imos"
  },
  {
  symbol: "COFS",
  name: "ChoiceOne Financial Services, Inc.",
  lastSale: "28.92",
  marketCap: "$225.21M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cofs"
  },
  {
  symbol: "CHPM",
  name: "CHP Merger Corp.",
  lastSale: "9.97",
  marketCap: "$373.88M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chpm"
  },
  {
  symbol: "CHPMU",
  name: "CHP Merger Corp.",
  lastSale: "10.52",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chpmu"
  },
  {
  symbol: "CHPMW",
  name: "CHP Merger Corp.",
  lastSale: "1.17",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/chpmw"
  },
  {
  symbol: "CDXC",
  name: "ChromaDex Corporation",
  lastSale: "4.84",
  marketCap: "$298.26M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/cdxc"
  },
  {
  symbol: "CHSCL",
  name: "CHS Inc",
  lastSale: "28.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/chscl"
  },
  {
  symbol: "CHSCM",
  name: "CHS Inc",
  lastSale: "26.5644",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/chscm"
  },
  {
  symbol: "CHSCN",
  name: "CHS Inc",
  lastSale: "27.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/chscn"
  },
  {
  symbol: "CHSCO",
  name: "CHS Inc",
  lastSale: "27.7476",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/chsco"
  },
  {
  symbol: "CHSCP",
  name: "CHS Inc",
  lastSale: "28.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/chscp"
  },
  {
  symbol: "CHDN",
  name: "Churchill Downs, Incorporated",
  lastSale: "164.17",
  marketCap: "$6.47B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/chdn"
  },
  {
  symbol: "CHUY",
  name: "Chuy&#39;s Holdings, Inc.",
  lastSale: "22.75",
  marketCap: "$447.95M",
  ipoYear: "2012",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/chuy"
  },
  {
  symbol: "CDTX",
  name: "Cidara Therapeutics, Inc.",
  lastSale: "2.91",
  marketCap: "$125.01M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cdtx"
  },
  {
  symbol: "CIIC",
  name: "CIIG Merger Corp.",
  lastSale: "10.14",
  marketCap: "$327.97M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ciic"
  },
  {
  symbol: "CIICU",
  name: "CIIG Merger Corp.",
  lastSale: "10.5524",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ciicu"
  },
  {
  symbol: "CIICW",
  name: "CIIG Merger Corp.",
  lastSale: "1.2",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ciicw"
  },
  {
  symbol: "CMCT",
  name: "CIM Commercial Trust Corporation",
  lastSale: "7.98",
  marketCap: "$118.32M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/cmct"
  },
  {
  symbol: "CMCTP",
  name: "CIM Commercial Trust Corporation",
  lastSale: "23.6753",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/cmctp"
  },
  {
  symbol: "CMPR",
  name: "Cimpress PLC",
  lastSale: "79.65",
  marketCap: "$2.07B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Publishing",
  summaryQuote: "https://old.nasdaq.com/symbol/cmpr"
  },
  {
  symbol: "CNNB",
  name: "Cincinnati Bancorp, Inc.",
  lastSale: "9.501",
  marketCap: "$28.27M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cnnb"
  },
  {
  symbol: "CINF",
  name: "Cincinnati Financial Corporation",
  lastSale: "73.85",
  marketCap: "$11.88B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/cinf"
  },
  {
  symbol: "CIDM",
  name: "Cinedigm Corp",
  lastSale: "0.531",
  marketCap: "$64.59M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Consumer Electronics/Video Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/cidm"
  },
  {
  symbol: "CTAS",
  name: "Cintas Corporation",
  lastSale: "324.01",
  marketCap: "$33.9B",
  ipoYear: "1983",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/ctas"
  },
  {
  symbol: "CRUS",
  name: "Cirrus Logic, Inc.",
  lastSale: "68.26",
  marketCap: "$3.99B",
  ipoYear: "1989",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/crus"
  },
  {
  symbol: "CSCO",
  name: "Cisco Systems, Inc.",
  lastSale: "36.87",
  marketCap: "$155.63B",
  ipoYear: "1990",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/csco"
  },
  {
  symbol: "CTRN",
  name: "Citi Trends, Inc.",
  lastSale: "27.12",
  marketCap: "$288.4M",
  ipoYear: "2005",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/ctrn"
  },
  {
  symbol: "CTXR",
  name: "Citius Pharmaceuticals, Inc.",
  lastSale: "1.02",
  marketCap: "$56.59M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ctxr"
  },
  {
  symbol: "CTXRW",
  name: "Citius Pharmaceuticals, Inc.",
  lastSale: "0.3569",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ctxrw"
  },
  {
  symbol: "CZNC",
  name: "Citizens & Northern Corp",
  lastSale: "17.23",
  marketCap: "$273.79M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cznc"
  },
  {
  symbol: "CZWI",
  name: "Citizens Community Bancorp, Inc.",
  lastSale: "7.82",
  marketCap: "$87.2M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/czwi"
  },
  {
  symbol: "CIZN",
  name: "Citizens Holding Company",
  lastSale: "21.27",
  marketCap: "$118.82M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cizn"
  },
  {
  symbol: "CTXS",
  name: "Citrix Systems, Inc.",
  lastSale: "119.47",
  marketCap: "$14.76B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ctxs"
  },
  {
  symbol: "CHCO",
  name: "City Holding Company",
  lastSale: "60.46",
  marketCap: "$969.18M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/chco"
  },
  {
  symbol: "CIVB",
  name: "Civista Bancshares, Inc. ",
  lastSale: "14.5",
  marketCap: "$231.21M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/civb"
  },
  {
  symbol: "CLAR",
  name: "Clarus Corporation",
  lastSale: "17.01",
  marketCap: "$527.75M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/clar"
  },
  {
  symbol: "CLNE",
  name: "Clean Energy Fuels Corp.",
  lastSale: "2.53",
  marketCap: "$502.69M",
  ipoYear: "2007",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/clne"
  },
  {
  symbol: "CLSK",
  name: "CleanSpark, Inc.",
  lastSale: "7.83",
  marketCap: "$135.88M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/clsk"
  },
  {
  symbol: "CACG",
  name: "ClearBridge All Cap Growth ETF",
  lastSale: "39.7161",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cacg"
  },
  {
  symbol: "YLDE",
  name: "ClearBridge Dividend Strategy ESG ETF",
  lastSale: "32.6923",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ylde"
  },
  {
  symbol: "LRGE",
  name: "ClearBridge Large Cap Growth ESG ETF",
  lastSale: "46.2133",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lrge"
  },
  {
  symbol: "CLFD",
  name: "Clearfield, Inc.",
  lastSale: "20.91",
  marketCap: "$285.36M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/clfd"
  },
  {
  symbol: "CLRO",
  name: "ClearOne, Inc.",
  lastSale: "1.8",
  marketCap: "$33.79M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/clro"
  },
  {
  symbol: "CLPT",
  name: "ClearPoint Neuro Inc.",
  lastSale: "7.12",
  marketCap: "$112.01M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/clpt"
  },
  {
  symbol: "CLSD",
  name: "Clearside Biomedical, Inc.",
  lastSale: "1.35",
  marketCap: "$62.56M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/clsd"
  },
  {
  symbol: "CLIR",
  name: "ClearSign Technologies Corporation",
  lastSale: "2.5",
  marketCap: "$73.3M",
  ipoYear: "2012",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/clir"
  },
  {
  symbol: "CBLI",
  name: "Cleveland BioLabs, Inc.",
  lastSale: "2.7",
  marketCap: "$35.14M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/cbli"
  },
  {
  symbol: "CLVS",
  name: "Clovis Oncology, Inc.",
  lastSale: "5.285",
  marketCap: "$466.15M",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/clvs"
  },
  {
  symbol: "CLPS",
  name: "CLPS Incorporation",
  lastSale: "3.19",
  marketCap: "$50.78M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/clps"
  },
  {
  symbol: "CMLF",
  name: "CM Life Sciences, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cmlf"
  },
  {
  symbol: "CMLFU",
  name: "CM Life Sciences, Inc.",
  lastSale: "10.4122",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cmlfu"
  },
  {
  symbol: "CMLFW",
  name: "CM Life Sciences, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cmlfw"
  },
  {
  symbol: "CCMP",
  name: "CMC Materials, Inc.",
  lastSale: "142.57",
  marketCap: "$4.14B",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/ccmp"
  },
  {
  symbol: "CME",
  name: "CME Group Inc.",
  lastSale: "159.47",
  marketCap: "$57.19B",
  ipoYear: "2002",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/cme"
  },
  {
  symbol: "CCNE",
  name: "CNB Financial Corporation",
  lastSale: "18.37",
  marketCap: "$310.43M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ccne"
  },
  {
  symbol: "CCNEP",
  name: "CNB Financial Corporation",
  lastSale: "25.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ccnep"
  },
  {
  symbol: "CNSP",
  name: "CNS Pharmaceuticals, Inc.",
  lastSale: "1.84",
  marketCap: "$30.64M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cnsp"
  },
  {
  symbol: "CCB",
  name: "Coastal Financial Corporation",
  lastSale: "14.7",
  marketCap: "$175.33M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ccb"
  },
  {
  symbol: "COKE",
  name: "Coca-Cola Consolidated, Inc.",
  lastSale: "239.21",
  marketCap: "$2.24B",
  ipoYear: "1972",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/coke"
  },
  {
  symbol: "COCP",
  name: "Cocrystal Pharma, Inc.",
  lastSale: "0.84",
  marketCap: "$57.59M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cocp"
  },
  {
  symbol: "CODA",
  name: "Coda Octopus Group, Inc.",
  lastSale: "5.87",
  marketCap: "$63.11M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/coda"
  },
  {
  symbol: "CCNC",
  name: "Code Chain New Continent Limited",
  lastSale: "1.77",
  marketCap: "$53.43M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ccnc"
  },
  {
  symbol: "CDXS",
  name: "Codexis, Inc.",
  lastSale: "14.4",
  marketCap: "$851.43M",
  ipoYear: "2010",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/cdxs"
  },
  {
  symbol: "CODX",
  name: "Co-Diagnostics, Inc.",
  lastSale: "14.23",
  marketCap: "$399.62M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/codx"
  },
  {
  symbol: "CDAK",
  name: "Codiak BioSciences, Inc.",
  lastSale: "9.31",
  marketCap: "$173.11M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cdak"
  },
  {
  symbol: "CVLY",
  name: "Codorus Valley Bancorp, Inc",
  lastSale: "13.33",
  marketCap: "$130.57M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cvly"
  },
  {
  symbol: "JVA",
  name: "Coffee Holding Co., Inc.",
  lastSale: "3.865",
  marketCap: "$22.06M",
  ipoYear: "2005",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/jva"
  },
  {
  symbol: "COGT",
  name: "Cogent Biosciences, Inc.",
  lastSale: "3.21",
  marketCap: "$136.33M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cogt"
  },
  {
  symbol: "CCOI",
  name: "Cogent Communications Holdings, Inc.",
  lastSale: "56.03",
  marketCap: "$2.65B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ccoi"
  },
  {
  symbol: "CGNX",
  name: "Cognex Corporation",
  lastSale: "66.7",
  marketCap: "$11.54B",
  ipoYear: "1989",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/cgnx"
  },
  {
  symbol: "CTSH",
  name: "Cognizant Technology Solutions Corporation",
  lastSale: "73.39",
  marketCap: "$39.8B",
  ipoYear: "1998",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ctsh"
  },
  {
  symbol: "CWBR",
  name: "CohBar, Inc.",
  lastSale: "0.9224",
  marketCap: "$53.47M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cwbr"
  },
  {
  symbol: "COHR",
  name: "Coherent, Inc.",
  lastSale: "126.38",
  marketCap: "$3.07B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/cohr"
  },
  {
  symbol: "CHRS",
  name: "Coherus BioSciences, Inc.",
  lastSale: "17.83",
  marketCap: "$1.27B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/chrs"
  },
  {
  symbol: "COHU",
  name: "Cohu, Inc.",
  lastSale: "18.07",
  marketCap: "$756.46M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/cohu"
  },
  {
  symbol: "CGRO",
  name: "Collective Growth Corporation",
  lastSale: "9.745",
  marketCap: "$185.28M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cgro"
  },
  {
  symbol: "CGROU",
  name: "Collective Growth Corporation",
  lastSale: "10.05",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cgrou"
  },
  {
  symbol: "CGROW",
  name: "Collective Growth Corporation",
  lastSale: "0.75",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cgrow"
  },
  {
  symbol: "CLCT",
  name: "Collectors Universe, Inc.",
  lastSale: "59.29",
  marketCap: "$547.83M",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/clct"
  },
  {
  symbol: "COLL",
  name: "Collegium Pharmaceutical, Inc.",
  lastSale: "18.36",
  marketCap: "$633.89M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/coll"
  },
  {
  symbol: "CIGI",
  name: "Colliers International Group Inc. ",
  lastSale: "71.51",
  marketCap: "$2.86B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/cigi"
  },
  {
  symbol: "CLGN",
  name: "CollPlant Biotechnologies Ltd.",
  lastSale: "7",
  marketCap: "$45.97M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/clgn"
  },
  {
  symbol: "CBAN",
  name: "Colony Bankcorp, Inc.",
  lastSale: "12.29",
  marketCap: "$116.74M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cban"
  },
  {
  symbol: "CSCW",
  name: "Color Star Technology Co. Ltd.",
  lastSale: "0.5696",
  marketCap: "$30.85M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/cscw"
  },
  {
  symbol: "COLB",
  name: "Columbia Banking System, Inc.",
  lastSale: "26.6",
  marketCap: "$1.91B",
  ipoYear: "1992",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/colb"
  },
  {
  symbol: "CLBK",
  name: "Columbia Financial, Inc.",
  lastSale: "12.88",
  marketCap: "$1.48B",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/clbk"
  },
  {
  symbol: "COLM",
  name: "Columbia Sportswear Company",
  lastSale: "96.02",
  marketCap: "$6.35B",
  ipoYear: "1998",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/colm"
  },
  {
  symbol: "CMCO",
  name: "Columbus McKinnon Corporation",
  lastSale: "35.33",
  marketCap: "$843.75M",
  ipoYear: "1996",
  sector: "Capital Goods",
  industry: "Construction/Ag Equipment/Trucks",
  summaryQuote: "https://old.nasdaq.com/symbol/cmco"
  },
  {
  symbol: "CMCSA",
  name: "Comcast Corporation",
  lastSale: "43.44",
  marketCap: "$198.44B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cmcsa"
  },
  {
  symbol: "CBSH",
  name: "Commerce Bancshares, Inc.",
  lastSale: "61.33",
  marketCap: "$6.84B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cbsh"
  },
  {
  symbol: "CVGI",
  name: "Commercial Vehicle Group, Inc.",
  lastSale: "5.35",
  marketCap: "$174.65M",
  ipoYear: "2004",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/cvgi"
  },
  {
  symbol: "COMM",
  name: "CommScope Holding Company, Inc.",
  lastSale: "8.96",
  marketCap: "$1.76B",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/comm"
  },
  {
  symbol: "JCS",
  name: "Communications Systems, Inc.",
  lastSale: "4.11",
  marketCap: "$38.45M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/jcs"
  },
  {
  symbol: "ESXB",
  name: "Community Bankers Trust Corporation.",
  lastSale: "5.34",
  marketCap: "$119.14M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/esxb"
  },
  {
  symbol: "CFBI",
  name: "Community First Bancshares, Inc.",
  lastSale: "7.7",
  marketCap: "$58.3M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cfbi"
  },
  {
  symbol: "CTBI",
  name: "Community Trust Bancorp, Inc.",
  lastSale: "31.33",
  marketCap: "$557.74M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ctbi"
  },
  {
  symbol: "CWBC",
  name: "Community West Bancshares",
  lastSale: "8.25",
  marketCap: "$69.9M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cwbc"
  },
  {
  symbol: "CVLT",
  name: "Commvault Systems, Inc.",
  lastSale: "42.46",
  marketCap: "$1.97B",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/cvlt"
  },
  {
  symbol: "CMPS",
  name: "COMPASS Pathways Plc",
  lastSale: "35.62",
  marketCap: "$1.24B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cmps"
  },
  {
  symbol: "CGEN",
  name: "Compugen Ltd.",
  lastSale: "13.98",
  marketCap: "$1.16B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cgen"
  },
  {
  symbol: "CPSI",
  name: "Computer Programs and Systems, Inc.",
  lastSale: "29.02",
  marketCap: "$421.14M",
  ipoYear: "2002",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cpsi"
  },
  {
  symbol: "CTG",
  name: "Computer Task Group, Incorporated",
  lastSale: "5.77",
  marketCap: "$87.55M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ctg"
  },
  {
  symbol: "SCOR",
  name: "comScore, Inc.",
  lastSale: "1.95",
  marketCap: "$141.75M",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/scor"
  },
  {
  symbol: "CHCI",
  name: "Comstock Holding Companies, Inc.",
  lastSale: "2.59",
  marketCap: "$20.92M",
  ipoYear: "2004",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/chci"
  },
  {
  symbol: "CMTL",
  name: "Comtech Telecommunications Corp.",
  lastSale: "15.68",
  marketCap: "$391.91M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cmtl"
  },
  {
  symbol: "CNCE",
  name: "Concert Pharmaceuticals, Inc.",
  lastSale: "11.83",
  marketCap: "$351.09M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cnce"
  },
  {
  symbol: "BBCP",
  name: "Concrete Pumping Holdings, Inc. ",
  lastSale: "3.7",
  marketCap: "$215.34M",
  ipoYear: "2017",
  sector: "Basic Industries",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/bbcp"
  },
  {
  symbol: "CDOR",
  name: "Condor Hospitality Trust, Inc.",
  lastSale: "2.85",
  marketCap: "$34.23M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/cdor"
  },
  {
  symbol: "CNDT",
  name: "Conduent Incorporated",
  lastSale: "3.43",
  marketCap: "$717.65M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cndt"
  },
  {
  symbol: "CFMS",
  name: "ConforMIS, Inc.",
  lastSale: "0.69",
  marketCap: "$53.51M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/cfms"
  },
  {
  symbol: "CNFR",
  name: "Conifer Holdings, Inc.",
  lastSale: "2.679",
  marketCap: "$25.71M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/cnfr"
  },
  {
  symbol: "CNFRL",
  name: "Conifer Holdings, Inc.",
  lastSale: "21.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/cnfrl"
  },
  {
  symbol: "CNMD",
  name: "CONMED Corporation",
  lastSale: "80.84",
  marketCap: "$2.31B",
  ipoYear: "1987",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/cnmd"
  },
  {
  symbol: "CNOB",
  name: "ConnectOne Bancorp, Inc.",
  lastSale: "15.42",
  marketCap: "$612.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cnob"
  },
  {
  symbol: "CONN",
  name: "Conn&#39;s, Inc.",
  lastSale: "10.41",
  marketCap: "$303.29M",
  ipoYear: "2003",
  sector: "Consumer Services",
  industry: "Consumer Electronics/Video Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/conn"
  },
  {
  symbol: "CNSL",
  name: "Consolidated Communications Holdings, Inc.",
  lastSale: "4.71",
  marketCap: "$374.02M",
  ipoYear: "2005",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cnsl"
  },
  {
  symbol: "CWCO",
  name: "Consolidated Water Co. Ltd.",
  lastSale: "10.48",
  marketCap: "$158.48M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/cwco"
  },
  {
  symbol: "CNST",
  name: "Constellation Pharmaceuticals, Inc.",
  lastSale: "22.8",
  marketCap: "$1.08B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cnst"
  },
  {
  symbol: "ROAD",
  name: "Construction Partners, Inc.",
  lastSale: "20.28",
  marketCap: "$1.05B",
  ipoYear: "2018",
  sector: "Basic Industries",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/road"
  },
  {
  symbol: "CPSS",
  name: "Consumer Portfolio Services, Inc.",
  lastSale: "3.8",
  marketCap: "$85.52M",
  ipoYear: "1992",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cpss"
  },
  {
  symbol: "CFRX",
  name: "ContraFect Corporation",
  lastSale: "5.34",
  marketCap: "$148.5M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cfrx"
  },
  {
  symbol: "CPTI",
  name: "ConversionPoint Holdings, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cpti"
  },
  {
  symbol: "CPAA",
  name: "Conyers Park II Acquisition Corp.",
  lastSale: "8.66",
  marketCap: "$487.13M",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cpaa"
  },
  {
  symbol: "CPAAU",
  name: "Conyers Park II Acquisition Corp.",
  lastSale: "10.15",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cpaau"
  },
  {
  symbol: "CPAAW",
  name: "Conyers Park II Acquisition Corp.",
  lastSale: "1.06",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cpaaw"
  },
  {
  symbol: "CPRT",
  name: "Copart, Inc.",
  lastSale: "112.1",
  marketCap: "$26.45B",
  ipoYear: "1994",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/cprt"
  },
  {
  symbol: "CRBP",
  name: "Corbus Pharmaceuticals Holdings, Inc.",
  lastSale: "0.992",
  marketCap: "$81.06M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/crbp"
  },
  {
  symbol: "CORT",
  name: "Corcept Therapeutics Incorporated",
  lastSale: "17.8",
  marketCap: "$2.06B",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cort"
  },
  {
  symbol: "CORE",
  name: "Core-Mark Holding Company, Inc.",
  lastSale: "28.34",
  marketCap: "$1.28B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/core"
  },
  {
  symbol: "CSOD",
  name: "Cornerstone OnDemand, Inc.",
  lastSale: "38.75",
  marketCap: "$2.5B",
  ipoYear: "2011",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/csod"
  },
  {
  symbol: "CRSR",
  name: "Corsair Gaming, Inc.",
  lastSale: "25.79",
  marketCap: "$2.37B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/crsr"
  },
  {
  symbol: "CRTX",
  name: "Cortexyme, Inc.",
  lastSale: "50.7",
  marketCap: "$1.5B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/crtx"
  },
  {
  symbol: "CLDB",
  name: "Cortland Bancorp",
  lastSale: "15.155",
  marketCap: "$64M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/cldb"
  },
  {
  symbol: "CRVL",
  name: "CorVel Corp.",
  lastSale: "91.7",
  marketCap: "$1.64B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/crvl"
  },
  {
  symbol: "KOR",
  name: "Corvus Gold Inc.",
  lastSale: "2.31",
  marketCap: "$286.41M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/kor"
  },
  {
  symbol: "CRVS",
  name: "Corvus Pharmaceuticals, Inc.",
  lastSale: "4.09",
  marketCap: "$114.67M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/crvs"
  },
  {
  symbol: "CSGP",
  name: "CoStar Group, Inc.",
  lastSale: "828.88",
  marketCap: "$32.63B",
  ipoYear: "1998",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/csgp"
  },
  {
  symbol: "COST",
  name: "Costco Wholesale Corporation",
  lastSale: "372.72",
  marketCap: "$164.45B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Department/Specialty Retail Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/cost"
  },
  {
  symbol: "CPAH",
  name: "CounterPath Corporation",
  lastSale: "2.85",
  marketCap: "$18.27M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/cpah"
  },
  {
  symbol: "ICBK",
  name: "County Bancorp, Inc.",
  lastSale: "18.92",
  marketCap: "$119.53M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/icbk"
  },
  {
  symbol: "COUP",
  name: "Coupa Software Incorporated",
  lastSale: "292.03",
  marketCap: "$20.11B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/coup"
  },
  {
  symbol: "CVLG",
  name: "Covenant Logistics Group, Inc.",
  lastSale: "15.44",
  marketCap: "$264.55M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cvlg"
  },
  {
  symbol: "CVET",
  name: "Covetrus, Inc.",
  lastSale: "25.54",
  marketCap: "$3.25B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cvet"
  },
  {
  symbol: "COWN",
  name: "Cowen Inc.",
  lastSale: "20.03",
  marketCap: "$554.3M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/cown"
  },
  {
  symbol: "COWNL",
  name: "Cowen Inc.",
  lastSale: "26.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/cownl"
  },
  {
  symbol: "COWNZ",
  name: "Cowen Inc.",
  lastSale: "25.3",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/cownz"
  },
  {
  symbol: "CPSH",
  name: "CPS Technologies Corp.",
  lastSale: "1.78",
  marketCap: "$23.67M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/cpsh"
  },
  {
  symbol: "CRAI",
  name: "CRA International,Inc.",
  lastSale: "39.3",
  marketCap: "$307.56M",
  ipoYear: "1998",
  sector: "Miscellaneous",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/crai"
  },
  {
  symbol: "CBRL",
  name: "Cracker Barrel Old Country Store, Inc.",
  lastSale: "121.3",
  marketCap: "$2.87B",
  ipoYear: "1981",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/cbrl"
  },
  {
  symbol: "CRTD",
  name: "Creatd Inc.",
  lastSale: "2.88",
  marketCap: "$24.49M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/crtd"
  },
  {
  symbol: "CRTDW",
  name: "Creatd Inc.",
  lastSale: "0.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/crtdw"
  },
  {
  symbol: "CREX",
  name: "Creative Realities, Inc.",
  lastSale: "1.08",
  marketCap: "$11.26M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/crex"
  },
  {
  symbol: "CREXW",
  name: "Creative Realities, Inc.",
  lastSale: "0.1506",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/crexw"
  },
  {
  symbol: "CACC",
  name: "Credit Acceptance Corporation",
  lastSale: "324.58",
  marketCap: "$5.73B",
  ipoYear: "1992",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cacc"
  },
  {
  symbol: "GLDI",
  name: "Credit Suisse AG",
  lastSale: "9.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/gldi"
  },
  {
  symbol: "SLVO",
  name: "Credit Suisse AG",
  lastSale: "6.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/slvo"
  },
  {
  symbol: "USOI",
  name: "Credit Suisse AG",
  lastSale: "4.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/usoi"
  },
  {
  symbol: "CREE",
  name: "Cree, Inc.",
  lastSale: "68",
  marketCap: "$7.46B",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/cree"
  },
  {
  symbol: "CRSA",
  name: "Crescent Acquisition Corp",
  lastSale: "10.02",
  marketCap: "$313.13M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/crsa"
  },
  {
  symbol: "CRSAU",
  name: "Crescent Acquisition Corp",
  lastSale: "10.3",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/crsau"
  },
  {
  symbol: "CRSAW",
  name: "Crescent Acquisition Corp",
  lastSale: "0.677",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/crsaw"
  },
  {
  symbol: "CCAP",
  name: "Crescent Capital BDC, Inc.",
  lastSale: "12.8",
  marketCap: "$360.54M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ccap"
  },
  {
  symbol: "CRESY",
  name: "Cresud S.A.C.I.F. y A.",
  lastSale: "2.98",
  marketCap: "$149.49M",
  ipoYear: "1997",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/cresy"
  },
  {
  symbol: "CXDO",
  name: "Crexendo, Inc.",
  lastSale: "6.63",
  marketCap: "$112.69M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cxdo"
  },
  {
  symbol: "CRNX",
  name: "Crinetics Pharmaceuticals, Inc.",
  lastSale: "13.17",
  marketCap: "$433.08M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/crnx"
  },
  {
  symbol: "CRSP",
  name: "CRISPR Therapeutics AG",
  lastSale: "98.12",
  marketCap: "$6.89B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/crsp"
  },
  {
  symbol: "CRTO",
  name: "Criteo S.A.",
  lastSale: "14",
  marketCap: "$840.36M",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/crto"
  },
  {
  symbol: "CROX",
  name: "Crocs, Inc.",
  lastSale: "54.82",
  marketCap: "$3.7B",
  ipoYear: "2006",
  sector: "Consumer Non-Durables",
  industry: "Shoe Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/crox"
  },
  {
  symbol: "CRON",
  name: "Cronos Group Inc.",
  lastSale: "5.58",
  marketCap: "$1.95B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/cron"
  },
  {
  symbol: "CCRN",
  name: "Cross Country Healthcare, Inc.",
  lastSale: "7.02",
  marketCap: "$263.71M",
  ipoYear: "2001",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ccrn"
  },
  {
  symbol: "CFB",
  name: "CrossFirst Bankshares, Inc.",
  lastSale: "8.93",
  marketCap: "$466.11M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cfb"
  },
  {
  symbol: "CRWD",
  name: "CrowdStrike Holdings, Inc.",
  lastSale: "133.48",
  marketCap: "$29.29B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/crwd"
  },
  {
  symbol: "CRWS",
  name: "Crown Crafts, Inc.",
  lastSale: "5.88",
  marketCap: "$59.9M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/crws"
  },
  {
  symbol: "CYRX",
  name: "CryoPort, Inc.",
  lastSale: "47.03",
  marketCap: "$1.86B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cyrx"
  },
  {
  symbol: "CSGS",
  name: "CSG Systems International, Inc.",
  lastSale: "39.34",
  marketCap: "$1.3B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/csgs"
  },
  {
  symbol: "CCLP",
  name: "CSI Compressco LP",
  lastSale: "0.898",
  marketCap: "$42.52M",
  ipoYear: "2011",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/cclp"
  },
  {
  symbol: "CSPI",
  name: "CSP Inc.",
  lastSale: "7.7299",
  marketCap: "$33.06M",
  ipoYear: "1982",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/cspi"
  },
  {
  symbol: "CSWI",
  name: "CSW Industrials, Inc.",
  lastSale: "84.5",
  marketCap: "$1.24B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/cswi"
  },
  {
  symbol: "CSX",
  name: "CSX Corporation",
  lastSale: "78.09",
  marketCap: "$59.72B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Railroads",
  summaryQuote: "https://old.nasdaq.com/symbol/csx"
  },
  {
  symbol: "CTIC",
  name: "CTI BioPharma Corp.",
  lastSale: "3.26",
  marketCap: "$240.32M",
  ipoYear: "1997",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ctic"
  },
  {
  symbol: "CUE",
  name: "Cue Biopharma, Inc.",
  lastSale: "12.07",
  marketCap: "$356.02M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cue"
  },
  {
  symbol: "CPIX",
  name: "Cumberland Pharmaceuticals Inc.",
  lastSale: "2.99",
  marketCap: "$45.26M",
  ipoYear: "2009",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cpix"
  },
  {
  symbol: "CMLS",
  name: "Cumulus Media Inc.",
  lastSale: "5.38",
  marketCap: "$109.31M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/cmls"
  },
  {
  symbol: "CVAC",
  name: "CureVac N.V.",
  lastSale: "49.89",
  marketCap: "$8.88B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cvac"
  },
  {
  symbol: "CURI",
  name: "CuriosityStream Inc. ",
  lastSale: "8.6",
  marketCap: "$326.39M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/curi"
  },
  {
  symbol: "CURIW",
  name: "CuriosityStream Inc. ",
  lastSale: "1.07",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/curiw"
  },
  {
  symbol: "CRIS",
  name: "Curis, Inc.",
  lastSale: "1.14",
  marketCap: "$61.41M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/cris"
  },
  {
  symbol: "CUTR",
  name: "Cutera, Inc.",
  lastSale: "20.2",
  marketCap: "$355.39M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/cutr"
  },
  {
  symbol: "CVBF",
  name: "CVB Financial Corporation",
  lastSale: "17.71",
  marketCap: "$2.4B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cvbf"
  },
  {
  symbol: "CVV",
  name: "CVD Equipment Corporation",
  lastSale: "3.74",
  marketCap: "$24.84M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/cvv"
  },
  {
  symbol: "CYAN",
  name: "Cyanotech Corporation",
  lastSale: "3.02",
  marketCap: "$18.21M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/cyan"
  },
  {
  symbol: "CYBR",
  name: "CyberArk Software Ltd.",
  lastSale: "104.89",
  marketCap: "$4.06B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/cybr"
  },
  {
  symbol: "CYBE",
  name: "CyberOptics Corporation",
  lastSale: "25.15",
  marketCap: "$182.41M",
  ipoYear: "1987",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/cybe"
  },
  {
  symbol: "CYCC",
  name: "Cyclacel Pharmaceuticals, Inc.",
  lastSale: "3.38",
  marketCap: "$16.44M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cycc"
  },
  {
  symbol: "CYCCP",
  name: "Cyclacel Pharmaceuticals, Inc.",
  lastSale: "5.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cyccp"
  },
  {
  symbol: "CYCN",
  name: "Cyclerion Therapeutics, Inc.",
  lastSale: "2.5",
  marketCap: "$84.8M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cycn"
  },
  {
  symbol: "CBAY",
  name: "CymaBay Therapeutics Inc.",
  lastSale: "8.84",
  marketCap: "$608.96M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cbay"
  },
  {
  symbol: "CYRN",
  name: "CYREN Ltd.",
  lastSale: "0.8545",
  marketCap: "$51.62M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/cyrn"
  },
  {
  symbol: "CONE",
  name: "CyrusOne Inc",
  lastSale: "74.33",
  marketCap: "$8.69B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/cone"
  },
  {
  symbol: "CYTK",
  name: "Cytokinetics, Incorporated",
  lastSale: "16.33",
  marketCap: "$1.15B",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/cytk"
  },
  {
  symbol: "CTMX",
  name: "CytomX Therapeutics, Inc.",
  lastSale: "6.63",
  marketCap: "$306.25M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ctmx"
  },
  {
  symbol: "CTSO",
  name: "Cytosorbents Corporation",
  lastSale: "8.43",
  marketCap: "$363.82M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ctso"
  },
  {
  symbol: "DADA",
  name: "Dada Nexus Limited",
  lastSale: "32.68",
  marketCap: "$7.34B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/dada"
  },
  {
  symbol: "DJCO",
  name: "Daily Journal Corp. (S.C.)",
  lastSale: "274.75",
  marketCap: "$379.36M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Newspapers/Magazines",
  summaryQuote: "https://old.nasdaq.com/symbol/djco"
  },
  {
  symbol: "DAKT",
  name: "Daktronics, Inc.",
  lastSale: "3.98",
  marketCap: "$177.57M",
  ipoYear: "1994",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/dakt"
  },
  {
  symbol: "DARE",
  name: "Dare Bioscience, Inc.",
  lastSale: "0.9901",
  marketCap: "$31.24M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dare"
  },
  {
  symbol: "DRIO",
  name: "DarioHealth Corp.",
  lastSale: "12.55",
  marketCap: "$95.27M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/drio"
  },
  {
  symbol: "DRIOW",
  name: "DarioHealth Corp.",
  lastSale: "0.035",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/driow"
  },
  {
  symbol: "DSKE",
  name: "Daseke, Inc.",
  lastSale: "5.06",
  marketCap: "$327.53M",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dske"
  },
  {
  symbol: "DSKEW",
  name: "Daseke, Inc.",
  lastSale: "0.2",
  marketCap: "n/a",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dskew"
  },
  {
  symbol: "DAIO",
  name: "Data I/O Corporation",
  lastSale: "3.77",
  marketCap: "$31.63M",
  ipoYear: "1981",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/daio"
  },
  {
  symbol: "DDOG",
  name: "Datadog, Inc.",
  lastSale: "101.33",
  marketCap: "$30.74B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ddog"
  },
  {
  symbol: "DTSS",
  name: "Datasea Inc.",
  lastSale: "3.6",
  marketCap: "$75.4M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/dtss"
  },
  {
  symbol: "PLAY",
  name: "Dave & Buster&#39;s Entertainment, Inc.",
  lastSale: "18.3",
  marketCap: "$870.99M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/play"
  },
  {
  symbol: "DTEA",
  name: "DAVIDsTEA Inc.",
  lastSale: "1.11",
  marketCap: "$29.09M",
  ipoYear: "2015",
  sector: "Consumer Non-Durables",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/dtea"
  },
  {
  symbol: "DFNL",
  name: "Davis Select Financial ETF",
  lastSale: "19.52",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dfnl"
  },
  {
  symbol: "DINT",
  name: "Davis Select International ETF",
  lastSale: "21.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dint"
  },
  {
  symbol: "DUSA",
  name: "Davis Select U.S. Equity ETF",
  lastSale: "25.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dusa"
  },
  {
  symbol: "DWLD",
  name: "Davis Select Worldwide ETF",
  lastSale: "26.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwld"
  },
  {
  symbol: "DWSN",
  name: "Dawson Geophysical Company",
  lastSale: "2.08",
  marketCap: "$48.57M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/dwsn"
  },
  {
  symbol: "DBVT",
  name: "DBV Technologies S.A.",
  lastSale: "1.45",
  marketCap: "$158.98M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/dbvt"
  },
  {
  symbol: "DCRBU",
  name: "Decarbonization Plus Acquisition Corporation",
  lastSale: "9.91",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dcrbu"
  },
  {
  symbol: "DCPH",
  name: "Deciphera Pharmaceuticals, Inc.",
  lastSale: "61",
  marketCap: "$3.44B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dcph"
  },
  {
  symbol: "DFHT",
  name: "Deerfield Healthcare Technology Acquisitions Corp.",
  lastSale: "10.25",
  marketCap: "$184.18M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfht"
  },
  {
  symbol: "DFHTU",
  name: "Deerfield Healthcare Technology Acquisitions Corp.",
  lastSale: "10.445",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfhtu"
  },
  {
  symbol: "DFHTW",
  name: "Deerfield Healthcare Technology Acquisitions Corp.",
  lastSale: "1.65",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfhtw"
  },
  {
  symbol: "IBBJ",
  name: "Defiance Nasdaq Junior Biotechnology ETF",
  lastSale: "28.3286",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibbj"
  },
  {
  symbol: "TACO",
  name: "Del Taco Restaurants, Inc.",
  lastSale: "8.26",
  marketCap: "$308.3M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/taco"
  },
  {
  symbol: "DCTH",
  name: "Delcath Systems, Inc.",
  lastSale: "10.78",
  marketCap: "$44.09M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/dcth"
  },
  {
  symbol: "DNLI",
  name: "Denali Therapeutics Inc.",
  lastSale: "45.88",
  marketCap: "$5.47B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/dnli"
  },
  {
  symbol: "DENN",
  name: "Denny&#39;s Corporation",
  lastSale: "10.6",
  marketCap: "$675.31M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/denn"
  },
  {
  symbol: "XRAY",
  name: "DENTSPLY SIRONA Inc.",
  lastSale: "47.54",
  marketCap: "$10.39B",
  ipoYear: "1987",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/xray"
  },
  {
  symbol: "DRMT",
  name: "Dermavant Sciences Ltd.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/drmt"
  },
  {
  symbol: "DMTK",
  name: "DermTech, Inc.",
  lastSale: "12.23",
  marketCap: "$238.5M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/dmtk"
  },
  {
  symbol: "DXLG",
  name: "Destination XL Group, Inc.",
  lastSale: "0.284",
  marketCap: "$14.64M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/dxlg"
  },
  {
  symbol: "DSWL",
  name: "Deswell Industries, Inc.",
  lastSale: "2.74",
  marketCap: "$43.61M",
  ipoYear: "1995",
  sector: "Consumer Non-Durables",
  industry: "Plastic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/dswl"
  },
  {
  symbol: "DXCM",
  name: "DexCom, Inc.",
  lastSale: "380.63",
  marketCap: "$36.44B",
  ipoYear: "2005",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/dxcm"
  },
  {
  symbol: "DFPH",
  name: "DFP Healthcare Acquisitions Corp.",
  lastSale: "10.1",
  marketCap: "$290.38M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfph"
  },
  {
  symbol: "DFPHU",
  name: "DFP Healthcare Acquisitions Corp.",
  lastSale: "10.35",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfphu"
  },
  {
  symbol: "DFPHW",
  name: "DFP Healthcare Acquisitions Corp.",
  lastSale: "1.7",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dfphw"
  },
  {
  symbol: "DMAC",
  name: "DiaMedica Therapeutics Inc.",
  lastSale: "4.25",
  marketCap: "$79.64M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dmac"
  },
  {
  symbol: "DHIL",
  name: "Diamond Hill Investment Group, Inc.",
  lastSale: "136.91",
  marketCap: "$440.03M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/dhil"
  },
  {
  symbol: "FANG",
  name: "Diamondback Energy, Inc.",
  lastSale: "26.57",
  marketCap: "$4.19B",
  ipoYear: "2012",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/fang"
  },
  {
  symbol: "DRNA",
  name: "Dicerna Pharmaceuticals, Inc.",
  lastSale: "21.23",
  marketCap: "$1.58B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/drna"
  },
  {
  symbol: "DFFN",
  name: "Diffusion Pharmaceuticals Inc.",
  lastSale: "0.8327",
  marketCap: "$53.29M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dffn"
  },
  {
  symbol: "DGII",
  name: "Digi International Inc.",
  lastSale: "15.45",
  marketCap: "$448.6M",
  ipoYear: "1989",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/dgii"
  },
  {
  symbol: "DMRC",
  name: "Digimarc Corporation",
  lastSale: "30.56",
  marketCap: "$468.07M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dmrc"
  },
  {
  symbol: "EQOS",
  name: "Diginex Limited",
  lastSale: "7.5",
  marketCap: "$237.87M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eqos"
  },
  {
  symbol: "EQOSW",
  name: "Diginex Limited",
  lastSale: "0.85",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eqosw"
  },
  {
  symbol: "DRAD",
  name: "Digirad Corporation",
  lastSale: "2.63",
  marketCap: "$12.36M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/drad"
  },
  {
  symbol: "DRADP",
  name: "Digirad Corporation",
  lastSale: "7.54",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/dradp"
  },
  {
  symbol: "DGLY",
  name: "Digital Ally, Inc.",
  lastSale: "2.3",
  marketCap: "$61.14M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/dgly"
  },
  {
  symbol: "APPS",
  name: "Digital Turbine, Inc.",
  lastSale: "31.49",
  marketCap: "$2.76B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/apps"
  },
  {
  symbol: "DCOM",
  name: "Dime Community Bancshares, Inc.",
  lastSale: "12.38",
  marketCap: "$409.16M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/dcom"
  },
  {
  symbol: "DCOMP",
  name: "Dime Community Bancshares, Inc.",
  lastSale: "23.89",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/dcomp"
  },
  {
  symbol: "DIOD",
  name: "Diodes Incorporated",
  lastSale: "60.49",
  marketCap: "$3.14B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/diod"
  },
  {
  symbol: "DRTT",
  name: "DIRTT Environmental Solutions Ltd.",
  lastSale: "1.43",
  marketCap: "$121.09M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/drtt"
  },
  {
  symbol: "DISCA",
  name: "Discovery, Inc.",
  lastSale: "20.1",
  marketCap: "$10.19B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/disca"
  },
  {
  symbol: "DISCB",
  name: "Discovery, Inc.",
  lastSale: "33.78",
  marketCap: "$17.12B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/discb"
  },
  {
  symbol: "DISCK",
  name: "Discovery, Inc.",
  lastSale: "18.23",
  marketCap: "$9.24B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/disck"
  },
  {
  symbol: "DISH",
  name: "DISH Network Corporation",
  lastSale: "26",
  marketCap: "$13.66B",
  ipoYear: "1995",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dish"
  },
  {
  symbol: "DHC",
  name: "Diversified Healthcare Trust ",
  lastSale: "3.07",
  marketCap: "$730.51M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/dhc"
  },
  {
  symbol: "DHCNI",
  name: "Diversified Healthcare Trust ",
  lastSale: "18.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/dhcni"
  },
  {
  symbol: "DHCNL",
  name: "Diversified Healthcare Trust ",
  lastSale: "19.87",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/dhcnl"
  },
  {
  symbol: "DLHC",
  name: "DLH Holdings Corp.",
  lastSale: "9.45",
  marketCap: "$116.75M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dlhc"
  },
  {
  symbol: "BOOM",
  name: "DMC Global Inc.",
  lastSale: "34.3",
  marketCap: "$506.74M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/boom"
  },
  {
  symbol: "DOCU",
  name: "DocuSign, Inc.",
  lastSale: "222.185",
  marketCap: "$41.14B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/docu"
  },
  {
  symbol: "DOGZ",
  name: "Dogness (International) Corporation",
  lastSale: "2.45",
  marketCap: "$63.49M",
  ipoYear: "2017",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/dogz"
  },
  {
  symbol: "DLTR",
  name: "Dollar Tree, Inc.",
  lastSale: "92.82",
  marketCap: "$22.03B",
  ipoYear: "1995",
  sector: "Consumer Services",
  industry: "Department/Specialty Retail Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/dltr"
  },
  {
  symbol: "DLPN",
  name: "Dolphin Entertainment, Inc.",
  lastSale: "0.6585",
  marketCap: "$21.42M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dlpn"
  },
  {
  symbol: "DLPNW",
  name: "Dolphin Entertainment, Inc.",
  lastSale: "0.0498",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/dlpnw"
  },
  {
  symbol: "DOMO",
  name: "Domo, Inc.",
  lastSale: "35.11",
  marketCap: "$1.03B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/domo"
  },
  {
  symbol: "DGICA",
  name: "Donegal Group, Inc.",
  lastSale: "14.51",
  marketCap: "$422.4M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/dgica"
  },
  {
  symbol: "DGICB",
  name: "Donegal Group, Inc.",
  lastSale: "12.75",
  marketCap: "$371.16M",
  ipoYear: "1986",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/dgicb"
  },
  {
  symbol: "DMLP",
  name: "Dorchester Minerals, L.P.",
  lastSale: "10.32",
  marketCap: "$357.9M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/dmlp"
  },
  {
  symbol: "DORM",
  name: "Dorman Products, Inc.",
  lastSale: "88.08",
  marketCap: "$2.86B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/dorm"
  },
  {
  symbol: "DDI",
  name: "DoubleDown Interactive Co., Ltd.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ddi"
  },
  {
  symbol: "DOYU",
  name: "DouYu International Holdings Limited",
  lastSale: "15.23",
  marketCap: "$4.89B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/doyu"
  },
  {
  symbol: "DKNG",
  name: "DraftKings Inc.",
  lastSale: "38.7",
  marketCap: "$14.64B",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/dkng"
  },
  {
  symbol: "LYL",
  name: "Dragon Victory International Limited",
  lastSale: "2.55",
  marketCap: "$29.12M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Finance/Investors Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lyl"
  },
  {
  symbol: "DBX",
  name: "Dropbox, Inc.",
  lastSale: "19.03",
  marketCap: "$7.87B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/dbx"
  },
  {
  symbol: "DSPG",
  name: "DSP Group, Inc.",
  lastSale: "13.76",
  marketCap: "$323.57M",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/dspg"
  },
  {
  symbol: "DCT",
  name: "Duck Creek Technologies, Inc.",
  lastSale: "44.95",
  marketCap: "$5.87B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/dct"
  },
  {
  symbol: "DSAC",
  name: "Duddell Street Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dsac"
  },
  {
  symbol: "DLTH",
  name: "Duluth Holdings Inc.",
  lastSale: "16.78",
  marketCap: "$550.66M",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/dlth"
  },
  {
  symbol: "DNKN",
  name: "Dunkin&#39; Brands Group, Inc.",
  lastSale: "103.4",
  marketCap: "$8.51B",
  ipoYear: "2011",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/dnkn"
  },
  {
  symbol: "DUOT",
  name: "Duos Technologies Group, Inc.",
  lastSale: "3.4",
  marketCap: "$12.01M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/duot"
  },
  {
  symbol: "DRRX",
  name: "DURECT Corporation",
  lastSale: "1.79",
  marketCap: "$359.03M",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/drrx"
  },
  {
  symbol: "DXPE",
  name: "DXP Enterprises, Inc.",
  lastSale: "16.05",
  marketCap: "$285.35M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/dxpe"
  },
  {
  symbol: "DYAI",
  name: "Dyadic International, Inc.",
  lastSale: "7.66",
  marketCap: "$210.51M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/dyai"
  },
  {
  symbol: "DYNT",
  name: "Dynatronics Corporation",
  lastSale: "0.64",
  marketCap: "$9.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/dynt"
  },
  {
  symbol: "DVAX",
  name: "Dynavax Technologies Corporation",
  lastSale: "3.87",
  marketCap: "$423.81M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dvax"
  },
  {
  symbol: "DYN",
  name: "Dyne Therapeutics, Inc.",
  lastSale: "18.16",
  marketCap: "$824.88M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/dyn"
  },
  {
  symbol: "DZSI",
  name: "DZS Inc.",
  lastSale: "10.05",
  marketCap: "$216.89M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/dzsi"
  },
  {
  symbol: "ETAC",
  name: "E.Merge Technology Acquisition Corp.",
  lastSale: "9.68",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/etac"
  },
  {
  symbol: "ETACU",
  name: "E.Merge Technology Acquisition Corp.",
  lastSale: "9.97",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/etacu"
  },
  {
  symbol: "ETACW",
  name: "E.Merge Technology Acquisition Corp.",
  lastSale: "0.95",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/etacw"
  },
  {
  symbol: "SSP",
  name: "E.W. Scripps Company (The)",
  lastSale: "9.85",
  marketCap: "$803.2M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/ssp"
  },
  {
  symbol: "EBMT",
  name: "Eagle Bancorp Montana, Inc.",
  lastSale: "19.24",
  marketCap: "$130.75M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ebmt"
  },
  {
  symbol: "EGBN",
  name: "Eagle Bancorp, Inc.",
  lastSale: "29.5",
  marketCap: "$950.74M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/egbn"
  },
  {
  symbol: "EGLE",
  name: "Eagle Bulk Shipping Inc.",
  lastSale: "15.91",
  marketCap: "$175.13M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/egle"
  },
  {
  symbol: "EGRX",
  name: "Eagle Pharmaceuticals, Inc.",
  lastSale: "46.09",
  marketCap: "$599.17M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/egrx"
  },
  {
  symbol: "IGLE",
  name: "Eagleline Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/igle"
  },
  {
  symbol: "EAR",
  name: "Eargo, Inc.",
  lastSale: "36.58",
  marketCap: "$1.37B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/ear"
  },
  {
  symbol: "ERES",
  name: "East Resources Acquisition Company",
  lastSale: "9.72",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eres"
  },
  {
  symbol: "ERESU",
  name: "East Resources Acquisition Company",
  lastSale: "9.96",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eresu"
  },
  {
  symbol: "ERESW",
  name: "East Resources Acquisition Company",
  lastSale: "0.5102",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eresw"
  },
  {
  symbol: "ESSC",
  name: "East Stone Acquisition Corporation",
  lastSale: "9.77",
  marketCap: "$172.96M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/essc"
  },
  {
  symbol: "ESSCR",
  name: "East Stone Acquisition Corporation",
  lastSale: "0.213",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/esscr"
  },
  {
  symbol: "ESSCU",
  name: "East Stone Acquisition Corporation",
  lastSale: "10.2225",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/esscu"
  },
  {
  symbol: "ESSCW",
  name: "East Stone Acquisition Corporation",
  lastSale: "0.1275",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/esscw"
  },
  {
  symbol: "EWBC",
  name: "East West Bancorp, Inc.",
  lastSale: "36.13",
  marketCap: "$5.11B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ewbc"
  },
  {
  symbol: "EBC",
  name: "Eastern Bankshares, Inc.",
  lastSale: "12",
  marketCap: "$2.42B",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/ebc"
  },
  {
  symbol: "EML",
  name: "Eastern Company (The)",
  lastSale: "21.35",
  marketCap: "$133.17M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/eml"
  },
  {
  symbol: "EAST",
  name: "Eastside Distilling, Inc.",
  lastSale: "1.3",
  marketCap: "$13.08M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/east"
  },
  {
  symbol: "EVGBC",
  name: "Eaton Vance NextShares Trust",
  lastSale: "99.94",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/evgbc"
  },
  {
  symbol: "EVSTC",
  name: "Eaton Vance NextShares Trust",
  lastSale: "99.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/evstc"
  },
  {
  symbol: "EVLMC",
  name: "Eaton Vance NextShares Trust II",
  lastSale: "99.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/evlmc"
  },
  {
  symbol: "EBON",
  name: "Ebang International Holdings Inc.",
  lastSale: "9.16",
  marketCap: "$1.2B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/ebon"
  },
  {
  symbol: "EBAY",
  name: "eBay Inc.",
  lastSale: "53.55",
  marketCap: "$37.48B",
  ipoYear: "1998",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ebay"
  },
  {
  symbol: "EBAYL",
  name: "eBay Inc.",
  lastSale: "25.67",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ebayl"
  },
  {
  symbol: "EBIX",
  name: "Ebix, Inc.",
  lastSale: "19.26",
  marketCap: "$595.38M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ebix"
  },
  {
  symbol: "ECHO",
  name: "Echo Global Logistics, Inc.",
  lastSale: "27.06",
  marketCap: "$720.06M",
  ipoYear: "2009",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/echo"
  },
  {
  symbol: "SATS",
  name: "EchoStar Corporation",
  lastSale: "24.27",
  marketCap: "$2.38B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/sats"
  },
  {
  symbol: "MOHO",
  name: "ECMOHO Limited",
  lastSale: "1.4",
  marketCap: "$48.55M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/moho"
  },
  {
  symbol: "EDAP",
  name: "EDAP TMS S.A.",
  lastSale: "4.43",
  marketCap: "$129.1M",
  ipoYear: "1997",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/edap"
  },
  {
  symbol: "EDSA",
  name: "Edesa Biotech, Inc.",
  lastSale: "6.2",
  marketCap: "$59.57M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/edsa"
  },
  {
  symbol: "EDNT",
  name: "Edison Nation, Inc.",
  lastSale: "1.67",
  marketCap: "$23.25M",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/ednt"
  },
  {
  symbol: "EDIT",
  name: "Editas Medicine, Inc.",
  lastSale: "32.505",
  marketCap: "$2.02B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/edit"
  },
  {
  symbol: "EDUC",
  name: "Educational Development Corporation",
  lastSale: "18.69",
  marketCap: "$156.17M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/educ"
  },
  {
  symbol: "EGAN",
  name: "eGain Corporation",
  lastSale: "17.67",
  marketCap: "$546.17M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/egan"
  },
  {
  symbol: "EH",
  name: "EHang Holdings Limited",
  lastSale: "8.36",
  marketCap: "$457.53M",
  ipoYear: "2019",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eh"
  },
  {
  symbol: "EHTH",
  name: "eHealth, Inc.",
  lastSale: "75",
  marketCap: "$1.93B",
  ipoYear: "2006",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/ehth"
  },
  {
  symbol: "EIDX",
  name: "Eidos Therapeutics, Inc.",
  lastSale: "73.38",
  marketCap: "$2.83B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eidx"
  },
  {
  symbol: "EIGR",
  name: "Eiger BioPharmaceuticals, Inc.",
  lastSale: "9.21",
  marketCap: "$269.33M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/eigr"
  },
  {
  symbol: "EKSO",
  name: "Ekso Bionics Holdings, Inc.",
  lastSale: "4.38",
  marketCap: "$36.43M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ekso"
  },
  {
  symbol: "LOCO",
  name: "El Pollo Loco Holdings, Inc.",
  lastSale: "17.03",
  marketCap: "$611.75M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/loco"
  },
  {
  symbol: "ESLT",
  name: "Elbit Systems Ltd.",
  lastSale: "112.1",
  marketCap: "$4.95B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/eslt"
  },
  {
  symbol: "SOLO",
  name: "Electrameccanica Vehicles Corp. Ltd.",
  lastSale: "2.64",
  marketCap: "$169.28M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/solo"
  },
  {
  symbol: "SOLOW",
  name: "Electrameccanica Vehicles Corp. Ltd.",
  lastSale: "1.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/solow"
  },
  {
  symbol: "ECOR",
  name: "electroCore, Inc.",
  lastSale: "1.61",
  marketCap: "$71.69M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/ecor"
  },
  {
  symbol: "EA",
  name: "Electronic Arts Inc.",
  lastSale: "126.62",
  marketCap: "$36.57B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ea"
  },
  {
  symbol: "ELSE",
  name: "Electro-Sensors, Inc.",
  lastSale: "3.81",
  marketCap: "$12.94M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/else"
  },
  {
  symbol: "ESBK",
  name: "Elmira Savings Bank NY (The)",
  lastSale: "10.7571",
  marketCap: "$37.78M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/esbk"
  },
  {
  symbol: "ELOX",
  name: "Eloxx Pharmaceuticals, Inc.",
  lastSale: "2.78",
  marketCap: "$111.58M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/elox"
  },
  {
  symbol: "ELTK",
  name: "Eltek Ltd.",
  lastSale: "5",
  marketCap: "$21.9M",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/eltk"
  },
  {
  symbol: "EMCF",
  name: "Emclaire Financial Corp",
  lastSale: "24",
  marketCap: "$65.01M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/emcf"
  },
  {
  symbol: "EMKR",
  name: "EMCORE Corporation",
  lastSale: "3.67",
  marketCap: "$107.93M",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/emkr"
  },
  {
  symbol: "ENTA",
  name: "Enanta Pharmaceuticals, Inc.",
  lastSale: "45.01",
  marketCap: "$903.45M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/enta"
  },
  {
  symbol: "ECPG",
  name: "Encore Capital Group Inc",
  lastSale: "36.84",
  marketCap: "$1.15B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/ecpg"
  },
  {
  symbol: "WIRE",
  name: "Encore Wire Corporation",
  lastSale: "46.93",
  marketCap: "$968.24M",
  ipoYear: "1992",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/wire"
  },
  {
  symbol: "ENDP",
  name: "Endo International plc",
  lastSale: "5.47",
  marketCap: "$1.26B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/endp"
  },
  {
  symbol: "NDRA",
  name: "ENDRA Life Sciences Inc.",
  lastSale: "0.7035",
  marketCap: "$17.5M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/ndra"
  },
  {
  symbol: "NDRAW",
  name: "ENDRA Life Sciences Inc.",
  lastSale: "0.081",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/ndraw"
  },
  {
  symbol: "EIGI",
  name: "Endurance International Group Holdings, Inc.",
  lastSale: "6.34",
  marketCap: "$892.28M",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/eigi"
  },
  {
  symbol: "WATT",
  name: "Energous Corporation",
  lastSale: "2.42",
  marketCap: "$100.75M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/watt"
  },
  {
  symbol: "EFOI",
  name: "Energy Focus, Inc.",
  lastSale: "7.25",
  marketCap: "$23.49M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Building Products",
  summaryQuote: "https://old.nasdaq.com/symbol/efoi"
  },
  {
  symbol: "ERII",
  name: "Energy Recovery, Inc.",
  lastSale: "9.16",
  marketCap: "$510.05M",
  ipoYear: "2008",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/erii"
  },
  {
  symbol: "ENG",
  name: "ENGlobal Corporation",
  lastSale: "0.8691",
  marketCap: "$23.83M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/eng"
  },
  {
  symbol: "ENLV",
  name: "Enlivex Therapeutics Ltd.",
  lastSale: "12.13",
  marketCap: "$163.32M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/enlv"
  },
  {
  symbol: "ENOB",
  name: "Enochian Biosciences, Inc.",
  lastSale: "3.3",
  marketCap: "$153.9M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/enob"
  },
  {
  symbol: "ENPH",
  name: "Enphase Energy, Inc.",
  lastSale: "98.63",
  marketCap: "$12.43B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/enph"
  },
  {
  symbol: "ESGR",
  name: "Enstar Group Limited",
  lastSale: "175.54",
  marketCap: "$3.89B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/esgr"
  },
  {
  symbol: "ESGRO",
  name: "Enstar Group Limited",
  lastSale: "26.5301",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/esgro"
  },
  {
  symbol: "ESGRP",
  name: "Enstar Group Limited",
  lastSale: "26.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/esgrp"
  },
  {
  symbol: "ETTX",
  name: "Entasis Therapeutics Holdings Inc.",
  lastSale: "1.77",
  marketCap: "$62.79M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ettx"
  },
  {
  symbol: "ENTG",
  name: "Entegris, Inc.",
  lastSale: "76.71",
  marketCap: "$10.36B",
  ipoYear: "2000",
  sector: "Consumer Non-Durables",
  industry: "Plastic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/entg"
  },
  {
  symbol: "ENTX",
  name: "Entera Bio Ltd.",
  lastSale: "1.08",
  marketCap: "$19.69M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/entx"
  },
  {
  symbol: "ENTXW",
  name: "Entera Bio Ltd.",
  lastSale: "0.1101",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/entxw"
  },
  {
  symbol: "EBTC",
  name: "Enterprise Bancorp Inc",
  lastSale: "23.36",
  marketCap: "$278.6M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ebtc"
  },
  {
  symbol: "EFSC",
  name: "Enterprise Financial Services Corporation",
  lastSale: "29.38",
  marketCap: "$770.04M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/efsc"
  },
  {
  symbol: "EPZM",
  name: "Epizyme, Inc.",
  lastSale: "12.96",
  marketCap: "$1.32B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/epzm"
  },
  {
  symbol: "PLUS",
  name: "ePlus inc.",
  lastSale: "71.1",
  marketCap: "$963.65M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Retail: Computer Software & Peripheral Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/plus"
  },
  {
  symbol: "EPSN",
  name: "Epsilon Energy Ltd.",
  lastSale: "3.1",
  marketCap: "$73.77M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/epsn"
  },
  {
  symbol: "EQ",
  name: "Equillium, Inc.",
  lastSale: "5.76",
  marketCap: "$139.76M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eq"
  },
  {
  symbol: "EQIX",
  name: "Equinix, Inc.",
  lastSale: "773.31",
  marketCap: "$68.48B",
  ipoYear: "2000",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/eqix"
  },
  {
  symbol: "EQBK",
  name: "Equity Bancshares, Inc.",
  lastSale: "18.66",
  marketCap: "$277.17M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/eqbk"
  },
  {
  symbol: "ERIC",
  name: "Ericsson",
  lastSale: "11.78",
  marketCap: "$39.2B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/eric"
  },
  {
  symbol: "ERIE",
  name: "Erie Indemnity Company",
  lastSale: "234.33",
  marketCap: "$12.25B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/erie"
  },
  {
  symbol: "ERYP",
  name: "Erytech Pharma S.A.",
  lastSale: "5.61",
  marketCap: "$106.55M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/eryp"
  },
  {
  symbol: "ESCA",
  name: "Escalade, Incorporated",
  lastSale: "20.03",
  marketCap: "$283.5M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/esca"
  },
  {
  symbol: "ESPR",
  name: "Esperion Therapeutics, Inc.",
  lastSale: "31.4",
  marketCap: "$873.72M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/espr"
  },
  {
  symbol: "GMBL",
  name: "Esports Entertainment Group Inc.",
  lastSale: "4.65",
  marketCap: "$58.33M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/gmbl"
  },
  {
  symbol: "GMBLW",
  name: "Esports Entertainment Group Inc.",
  lastSale: "3.225",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/gmblw"
  },
  {
  symbol: "ESQ",
  name: "Esquire Financial Holdings, Inc.",
  lastSale: "16.7",
  marketCap: "$127.97M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Commercial Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/esq"
  },
  {
  symbol: "ESSA",
  name: "ESSA Bancorp, Inc.",
  lastSale: "13.16",
  marketCap: "$144.11M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/essa"
  },
  {
  symbol: "EPIX",
  name: "ESSA Pharma Inc.",
  lastSale: "5.95",
  marketCap: "$172.6M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/epix"
  },
  {
  symbol: "ESTA",
  name: "Establishment Labs Holdings Inc.",
  lastSale: "24.02",
  marketCap: "$561.28M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/esta"
  },
  {
  symbol: "VBND",
  name: "ETF Series Solutions Trust Vident Core U.S. Bond Strategy Fund",
  lastSale: "51.884",
  marketCap: "$446.2M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vbnd"
  },
  {
  symbol: "VUSE",
  name: "ETF Series Solutions Trust Vident Core US Equity ETF",
  lastSale: "29.4611",
  marketCap: "$447.81M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vuse"
  },
  {
  symbol: "VIDI",
  name: "ETF Series Solutions Trust Vident International Equity Fund",
  lastSale: "21.19",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vidi"
  },
  {
  symbol: "ETON",
  name: "Eton Pharmaceuticals, Inc.",
  lastSale: "8.13",
  marketCap: "$193.14M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eton"
  },
  {
  symbol: "ETSY",
  name: "Etsy, Inc.",
  lastSale: "145.78",
  marketCap: "$18.46B",
  ipoYear: "2015",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/etsy"
  },
  {
  symbol: "EUCRU",
  name: "Eucrates Biomedical Acquisition Corp.",
  lastSale: "10",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/eucru"
  },
  {
  symbol: "CLWT",
  name: "Euro Tech Holdings Company Limited",
  lastSale: "2.8",
  marketCap: "$8.66M",
  ipoYear: "1997",
  sector: "Consumer Durables",
  industry: "Diversified Electronic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/clwt"
  },
  {
  symbol: "EDRY",
  name: "EuroDry Ltd.",
  lastSale: "3.76",
  marketCap: "$8.67M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/edry"
  },
  {
  symbol: "EEFT",
  name: "Euronet Worldwide, Inc.",
  lastSale: "88.36",
  marketCap: "$4.62B",
  ipoYear: "1997",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/eeft"
  },
  {
  symbol: "ESEA",
  name: "Euroseas Ltd.",
  lastSale: "3.21",
  marketCap: "$17.98M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/esea"
  },
  {
  symbol: "EVLO",
  name: "Evelo Biosciences, Inc.",
  lastSale: "4.59",
  marketCap: "$211.77M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/evlo"
  },
  {
  symbol: "EVBG",
  name: "Everbridge, Inc.",
  lastSale: "128.68",
  marketCap: "$4.45B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/evbg"
  },
  {
  symbol: "EVK",
  name: "Ever-Glory International Group, Inc.",
  lastSale: "3.01",
  marketCap: "$44.58M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/evk"
  },
  {
  symbol: "EVER",
  name: "EverQuote, Inc.",
  lastSale: "35.24",
  marketCap: "$964.27M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/ever"
  },
  {
  symbol: "MRAM",
  name: "Everspin Technologies, Inc.",
  lastSale: "7.19",
  marketCap: "$136.24M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mram"
  },
  {
  symbol: "EVOP",
  name: "EVO Payments, Inc.",
  lastSale: "24.16",
  marketCap: "$1B",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/evop"
  },
  {
  symbol: "EVFM",
  name: "Evofem Biosciences, Inc.",
  lastSale: "2.41",
  marketCap: "$195.89M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/evfm"
  },
  {
  symbol: "EVGN",
  name: "Evogene Ltd.",
  lastSale: "3.08",
  marketCap: "$97.45M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Agricultural Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/evgn"
  },
  {
  symbol: "EVOK",
  name: "Evoke Pharma, Inc.",
  lastSale: "4.3",
  marketCap: "$111.85M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/evok"
  },
  {
  symbol: "EOLS",
  name: "Evolus, Inc.",
  lastSale: "3.26",
  marketCap: "$109.95M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eols"
  },
  {
  symbol: "EVOL",
  name: "Evolving Systems, Inc.",
  lastSale: "1.27",
  marketCap: "$15.49M",
  ipoYear: "1998",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/evol"
  },
  {
  symbol: "EXAS",
  name: "Exact Sciences Corporation",
  lastSale: "131.12",
  marketCap: "$19.69B",
  ipoYear: "2001",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/exas"
  },
  {
  symbol: "XGN",
  name: "Exagen Inc.",
  lastSale: "14.7",
  marketCap: "$185.81M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/xgn"
  },
  {
  symbol: "ROBO",
  name: "Exchange Traded Concepts Trust ROBO Global Robotics and Automa",
  lastSale: "49.49",
  marketCap: "$227.65M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/robo"
  },
  {
  symbol: "XELA",
  name: "Exela Technologies, Inc.",
  lastSale: "0.3991",
  marketCap: "$58.87M",
  ipoYear: "2015",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/xela"
  },
  {
  symbol: "EXEL",
  name: "Exelixis, Inc.",
  lastSale: "21.65",
  marketCap: "$6.69B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/exel"
  },
  {
  symbol: "EXC",
  name: "Exelon Corporation",
  lastSale: "41.15",
  marketCap: "$40.1B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/exc"
  },
  {
  symbol: "EXFO",
  name: "EXFO Inc",
  lastSale: "2.76",
  marketCap: "$153.72M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/exfo"
  },
  {
  symbol: "XCUR",
  name: "Exicure, Inc.",
  lastSale: "1.58",
  marketCap: "$137.82M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xcur"
  },
  {
  symbol: "EXLS",
  name: "ExlService Holdings, Inc.",
  lastSale: "75.24",
  marketCap: "$2.57B",
  ipoYear: "2006",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/exls"
  },
  {
  symbol: "EXPI",
  name: "eXp World Holdings, Inc.",
  lastSale: "47.5",
  marketCap: "$3.26B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/expi"
  },
  {
  symbol: "EXPE",
  name: "Expedia Group, Inc.",
  lastSale: "95.07",
  marketCap: "$13.43B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/expe"
  },
  {
  symbol: "EXPD",
  name: "Expeditors International of Washington, Inc.",
  lastSale: "94.28",
  marketCap: "$15.81B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/expd"
  },
  {
  symbol: "EXPC",
  name: "Experience Investment Corp.",
  lastSale: "9.97",
  marketCap: "$342.72M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/expc"
  },
  {
  symbol: "EXPCU",
  name: "Experience Investment Corp.",
  lastSale: "10.22",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/expcu"
  },
  {
  symbol: "EXPCW",
  name: "Experience Investment Corp.",
  lastSale: "1.09",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/expcw"
  },
  {
  symbol: "EXPO",
  name: "Exponent, Inc.",
  lastSale: "74",
  marketCap: "$3.82B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/expo"
  },
  {
  symbol: "STAY",
  name: "Extended Stay America, Inc.",
  lastSale: "11.35",
  marketCap: "$2.01B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/stay"
  },
  {
  symbol: "EXTR",
  name: "Extreme Networks, Inc.",
  lastSale: "4.72",
  marketCap: "$585.97M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/extr"
  },
  {
  symbol: "EYEG",
  name: "Eyegate Pharmaceuticals, Inc.",
  lastSale: "3.88",
  marketCap: "$17.95M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eyeg"
  },
  {
  symbol: "EYEN",
  name: "Eyenovia, Inc.",
  lastSale: "3.62",
  marketCap: "$89.9M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/eyen"
  },
  {
  symbol: "EYPT",
  name: "EyePoint Pharmaceuticals, Inc.",
  lastSale: "0.4001",
  marketCap: "$53.52M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/eypt"
  },
  {
  symbol: "EZPW",
  name: "EZCORP, Inc.",
  lastSale: "4.81",
  marketCap: "$264.88M",
  ipoYear: "1991",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/ezpw"
  },
  {
  symbol: "FLRZ",
  name: "F5 Finishes, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/flrz"
  },
  {
  symbol: "FFIV",
  name: "F5 Networks, Inc.",
  lastSale: "136.26",
  marketCap: "$8.34B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ffiv"
  },
  {
  symbol: "FB",
  name: "Facebook, Inc.",
  lastSale: "283.29",
  marketCap: "$807.04B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/fb"
  },
  {
  symbol: "FCACU",
  name: "Falcon Capital Acquisition Corp.",
  lastSale: "10.05",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fcacu"
  },
  {
  symbol: "FLMN",
  name: "Falcon Minerals Corporation",
  lastSale: "2.18",
  marketCap: "$187.53M",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/flmn"
  },
  {
  symbol: "FLMNW",
  name: "Falcon Minerals Corporation",
  lastSale: "0.0976",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/flmnw"
  },
  {
  symbol: "DUO",
  name: "Fangdd Network Group Ltd.",
  lastSale: "6.91",
  marketCap: "$551.74M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/duo"
  },
  {
  symbol: "FANH",
  name: "Fanhua Inc.",
  lastSale: "16.25",
  marketCap: "$872.54M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/fanh"
  },
  {
  symbol: "FARM",
  name: "Farmer Brothers Company",
  lastSale: "3.97",
  marketCap: "$69.18M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/farm"
  },
  {
  symbol: "FMAO",
  name: "Farmers & Merchants Bancorp, Inc.",
  lastSale: "21.49",
  marketCap: "$239.8M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fmao"
  },
  {
  symbol: "FMNB",
  name: "Farmers National Banc Corp.",
  lastSale: "11.51",
  marketCap: "$324.35M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fmnb"
  },
  {
  symbol: "FAMI",
  name: "FARMMI, INC.",
  lastSale: "0.8308",
  marketCap: "$17.05M",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/fami"
  },
  {
  symbol: "FARO",
  name: "FARO Technologies, Inc.",
  lastSale: "63.22",
  marketCap: "$1.12B",
  ipoYear: "1997",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/faro"
  },
  {
  symbol: "FAST",
  name: "Fastenal Company",
  lastSale: "43.58",
  marketCap: "$25.02B",
  ipoYear: "1987",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/fast"
  },
  {
  symbol: "FAT",
  name: "FAT Brands Inc.",
  lastSale: "5.35",
  marketCap: "$63.64M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/fat"
  },
  {
  symbol: "FATBP",
  name: "FAT Brands Inc.",
  lastSale: "16.35",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/fatbp"
  },
  {
  symbol: "FATBW",
  name: "FAT Brands Inc.",
  lastSale: "1.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/fatbw"
  },
  {
  symbol: "FATE",
  name: "Fate Therapeutics, Inc.",
  lastSale: "47.46",
  marketCap: "$4.12B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/fate"
  },
  {
  symbol: "FTHM",
  name: "Fathom Holdings Inc.",
  lastSale: "19.94",
  marketCap: "$271.99M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/fthm"
  },
  {
  symbol: "FBSS",
  name: "Fauquier Bankshares, Inc.",
  lastSale: "15.74",
  marketCap: "$59.73M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fbss"
  },
  {
  symbol: "FNHC",
  name: "FedNat Holding Company",
  lastSale: "5.47",
  marketCap: "$74.96M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/fnhc"
  },
  {
  symbol: "FENC",
  name: "Fennec Pharmaceuticals Inc.",
  lastSale: "8.05",
  marketCap: "$204.12M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/fenc"
  },
  {
  symbol: "GSM",
  name: "Ferroglobe PLC",
  lastSale: "0.7156",
  marketCap: "$121.05M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/gsm"
  },
  {
  symbol: "FFBW",
  name: "FFBW, Inc.",
  lastSale: "9.155",
  marketCap: "$70.54M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/ffbw"
  },
  {
  symbol: "FGEN",
  name: "FibroGen, Inc",
  lastSale: "39.12",
  marketCap: "$3.53B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fgen"
  },
  {
  symbol: "FDBC",
  name: "Fidelity D & D Bancorp, Inc.",
  lastSale: "47.31",
  marketCap: "$235.5M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fdbc"
  },
  {
  symbol: "ONEQ",
  name: "Fidelity Nasdaq Composite Index Tracking Stock",
  lastSale: "444.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oneq"
  },
  {
  symbol: "FDUS",
  name: "Fidus Investment Corporation",
  lastSale: "10.5",
  marketCap: "$256.59M",
  ipoYear: "2011",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdus"
  },
  {
  symbol: "FDUSG",
  name: "Fidus Investment Corporation",
  lastSale: "24.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdusg"
  },
  {
  symbol: "FDUSL",
  name: "Fidus Investment Corporation",
  lastSale: "24.95",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdusl"
  },
  {
  symbol: "FDUSZ",
  name: "Fidus Investment Corporation",
  lastSale: "25.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdusz"
  },
  {
  symbol: "FRGI",
  name: "Fiesta Restaurant Group, Inc.",
  lastSale: "9.29",
  marketCap: "$241.14M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/frgi"
  },
  {
  symbol: "FITB",
  name: "Fifth Third Bancorp",
  lastSale: "22.905",
  marketCap: "$16.32B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fitb"
  },
  {
  symbol: "FITBI",
  name: "Fifth Third Bancorp",
  lastSale: "28.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fitbi"
  },
  {
  symbol: "FITBO",
  name: "Fifth Third Bancorp",
  lastSale: "26.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fitbo"
  },
  {
  symbol: "FITBP",
  name: "Fifth Third Bancorp",
  lastSale: "26.643",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fitbp"
  },
  {
  symbol: "FISI",
  name: "Financial Institutions, Inc.",
  lastSale: "16",
  marketCap: "$256.61M",
  ipoYear: "1999",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fisi"
  },
  {
  symbol: "FSRV",
  name: "FinServ Acquisition Corp.",
  lastSale: "9.9999",
  marketCap: "$319.15M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fsrv"
  },
  {
  symbol: "FSRVU",
  name: "FinServ Acquisition Corp.",
  lastSale: "10.3067",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fsrvu"
  },
  {
  symbol: "FSRVW",
  name: "FinServ Acquisition Corp.",
  lastSale: "1",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fsrvw"
  },
  {
  symbol: "FTIVU",
  name: "FinTech Acquisition Corp. IV",
  lastSale: "10.03",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftivu"
  },
  {
  symbol: "FEYE",
  name: "FireEye, Inc.",
  lastSale: "14.09",
  marketCap: "$3.18B",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/feye"
  },
  {
  symbol: "FBNC",
  name: "First Bancorp",
  lastSale: "23.11",
  marketCap: "$669.65M",
  ipoYear: "1987",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fbnc"
  },
  {
  symbol: "FNLC",
  name: "First Bancorp, Inc (ME)",
  lastSale: "23.02",
  marketCap: "$251.84M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fnlc"
  },
  {
  symbol: "FRBA",
  name: "First Bank",
  lastSale: "7.81",
  marketCap: "$153.5M",
  ipoYear: "2013",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/frba"
  },
  {
  symbol: "BUSE",
  name: "First Busey Corporation",
  lastSale: "17.77",
  marketCap: "$968.75M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/buse"
  },
  {
  symbol: "FBIZ",
  name: "First Business Financial Services, Inc.",
  lastSale: "16.75",
  marketCap: "$142.86M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fbiz"
  },
  {
  symbol: "FCAP",
  name: "First Capital, Inc.",
  lastSale: "61.51",
  marketCap: "$207.64M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fcap"
  },
  {
  symbol: "FCBP",
  name: "First Choice Bancorp",
  lastSale: "14.41",
  marketCap: "$168.68M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fcbp"
  },
  {
  symbol: "FCNCA",
  name: "First Citizens BancShares, Inc.",
  lastSale: "454.99",
  marketCap: "$4.47B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fcnca"
  },
  {
  symbol: "FCNCP",
  name: "First Citizens BancShares, Inc.",
  lastSale: "26.69",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fcncp"
  },
  {
  symbol: "FCBC",
  name: "First Community Bankshares, Inc.",
  lastSale: "19.14",
  marketCap: "$338.97M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fcbc"
  },
  {
  symbol: "FCCO",
  name: "First Community Corporation",
  lastSale: "14.46",
  marketCap: "$108.35M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fcco"
  },
  {
  symbol: "FCRD",
  name: "First Eagle Alternative Capital BDC, Inc.",
  lastSale: "2.65",
  marketCap: "$79.79M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fcrd"
  },
  {
  symbol: "FFBC",
  name: "First Financial Bancorp.",
  lastSale: "14.27",
  marketCap: "$1.4B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ffbc"
  },
  {
  symbol: "FFIN",
  name: "First Financial Bankshares, Inc.",
  lastSale: "30.15",
  marketCap: "$4.25B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ffin"
  },
  {
  symbol: "THFF",
  name: "First Financial Corporation Indiana",
  lastSale: "33.8",
  marketCap: "$463.55M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/thff"
  },
  {
  symbol: "FFNW",
  name: "First Financial Northwest, Inc.",
  lastSale: "9.92",
  marketCap: "$99.56M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ffnw"
  },
  {
  symbol: "FFWM",
  name: "First Foundation Inc.",
  lastSale: "14.92",
  marketCap: "$665.82M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ffwm"
  },
  {
  symbol: "FGBI",
  name: "First Guaranty Bancshares, Inc.",
  lastSale: "13.72",
  marketCap: "$133.65M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fgbi"
  },
  {
  symbol: "FHB",
  name: "First Hawaiian, Inc.",
  lastSale: "16.73",
  marketCap: "$2.17B",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fhb"
  },
  {
  symbol: "INBK",
  name: "First Internet Bancorp",
  lastSale: "22.32",
  marketCap: "$218.75M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/inbk"
  },
  {
  symbol: "INBKL",
  name: "First Internet Bancorp",
  lastSale: "25.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/inbkl"
  },
  {
  symbol: "INBKZ",
  name: "First Internet Bancorp",
  lastSale: "25.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/inbkz"
  },
  {
  symbol: "FIBK",
  name: "First Interstate BancSystem, Inc.",
  lastSale: "36.36",
  marketCap: "$2.35B",
  ipoYear: "2010",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fibk"
  },
  {
  symbol: "FRME",
  name: "First Merchants Corporation",
  lastSale: "26.5",
  marketCap: "$1.43B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/frme"
  },
  {
  symbol: "FMBH",
  name: "First Mid Bancshares, Inc.",
  lastSale: "27.76",
  marketCap: "$464.37M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fmbh"
  },
  {
  symbol: "FMBI",
  name: "First Midwest Bancorp, Inc.",
  lastSale: "12.385",
  marketCap: "$1.42B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fmbi"
  },
  {
  symbol: "FMBIO",
  name: "First Midwest Bancorp, Inc.",
  lastSale: "27.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fmbio"
  },
  {
  symbol: "FMBIP",
  name: "First Midwest Bancorp, Inc.",
  lastSale: "26.94",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fmbip"
  },
  {
  symbol: "FXNC",
  name: "First National Corporation",
  lastSale: "13.98",
  marketCap: "$67.83M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fxnc"
  },
  {
  symbol: "FNWB",
  name: "First Northwest Bancorp",
  lastSale: "11.21",
  marketCap: "$115.49M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fnwb"
  },
  {
  symbol: "FSFG",
  name: "First Savings Financial Group, Inc.",
  lastSale: "54.75",
  marketCap: "$130.05M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fsfg"
  },
  {
  symbol: "FSEA",
  name: "First Seacoast Bancorp",
  lastSale: "7.82",
  marketCap: "$47.57M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/fsea"
  },
  {
  symbol: "FSLR",
  name: "First Solar, Inc.",
  lastSale: "82.39",
  marketCap: "$8.73B",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/fslr"
  },
  {
  symbol: "FAAR",
  name: "First Trust Alternative Absolute Return Strategy ETF",
  lastSale: "26.6575",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/faar"
  },
  {
  symbol: "FPA",
  name: "First Trust Asia Pacific Ex-Japan AlphaDEX Fund",
  lastSale: "26.9307",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fpa"
  },
  {
  symbol: "BICK",
  name: "First Trust BICK Index Fund",
  lastSale: "30",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bick"
  },
  {
  symbol: "FBZ",
  name: "First Trust Brazil AlphaDEX Fund",
  lastSale: "10.9055",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fbz"
  },
  {
  symbol: "FTHI",
  name: "First Trust BuyWrite Income ETF",
  lastSale: "19.31",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fthi"
  },
  {
  symbol: "FCAL",
  name: "First Trust California Municipal High income ETF",
  lastSale: "52.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fcal"
  },
  {
  symbol: "FCAN",
  name: "First Trust Canada AlphaDEX Fund",
  lastSale: "20.8333",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fcan"
  },
  {
  symbol: "FTCS",
  name: "First Trust Capital Strength ETF",
  lastSale: "62.95",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftcs"
  },
  {
  symbol: "FCEF",
  name: "First Trust CEF Income Opportunity ETF",
  lastSale: "19.62",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fcef"
  },
  {
  symbol: "FCA",
  name: "First Trust China AlphaDEX Fund",
  lastSale: "26.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fca"
  },
  {
  symbol: "SKYY",
  name: "First Trust Cloud Computing ETF",
  lastSale: "80.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/skyy"
  },
  {
  symbol: "RNDM",
  name: "First Trust Developed International Equity Select ETF",
  lastSale: "47.291",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rndm"
  },
  {
  symbol: "FDT",
  name: "First Trust Developed Markets Ex-US AlphaDEX Fund",
  lastSale: "49.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdt"
  },
  {
  symbol: "FDTS",
  name: "First Trust Developed Markets ex-US Small Cap AlphaDEX Fund",
  lastSale: "36.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdts"
  },
  {
  symbol: "FVC",
  name: "First Trust Dorsey Wright Dynamic Focus 5 ETF",
  lastSale: "27.0878",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fvc"
  },
  {
  symbol: "FV",
  name: "First Trust Dorsey Wright Focus 5 ETF",
  lastSale: "35.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fv"
  },
  {
  symbol: "IFV",
  name: "First Trust Dorsey Wright International Focus 5 ETF",
  lastSale: "19.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ifv"
  },
  {
  symbol: "DDIV",
  name: "First Trust Dorsey Wright Momentum & Dividend ETF",
  lastSale: "21.6308",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ddiv"
  },
  {
  symbol: "DVOL",
  name: "First Trust Dorsey Wright Momentum & Low Volatility ETF",
  lastSale: "22.9147",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dvol"
  },
  {
  symbol: "DVLU",
  name: "First Trust Dorsey Wright Momentum & Value ETF",
  lastSale: "15.4645",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dvlu"
  },
  {
  symbol: "DWPP",
  name: "First Trust Dorsey Wright People&#39;s Portfolio ETF",
  lastSale: "25.515",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwpp"
  },
  {
  symbol: "DALI",
  name: "First Trust DorseyWright DALI 1 ETF",
  lastSale: "18.8319",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dali"
  },
  {
  symbol: "FDNI",
  name: "First Trust Dow Jones International Internet ETF",
  lastSale: "41.82",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdni"
  },
  {
  symbol: "FEM",
  name: "First Trust Emerging Markets AlphaDEX Fund",
  lastSale: "21.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fem"
  },
  {
  symbol: "RNEM",
  name: "First Trust Emerging Markets Equity Select ETF",
  lastSale: "42.258",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rnem"
  },
  {
  symbol: "FEMB",
  name: "First Trust Emerging Markets Local Currency Bond ETF",
  lastSale: "34.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/femb"
  },
  {
  symbol: "FEMS",
  name: "First Trust Emerging Markets Small Cap AlphaDEX Fund",
  lastSale: "33.76",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fems"
  },
  {
  symbol: "FTSM",
  name: "First Trust Enhanced Short Maturity ETF",
  lastSale: "60.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftsm"
  },
  {
  symbol: "FEP",
  name: "First Trust Europe AlphaDEX Fund",
  lastSale: "32.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fep"
  },
  {
  symbol: "FEUZ",
  name: "First Trust Eurozone AlphaDEX ETF",
  lastSale: "35.4438",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/feuz"
  },
  {
  symbol: "FGM",
  name: "First Trust Germany AlphaDEX Fund",
  lastSale: "43.27",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fgm"
  },
  {
  symbol: "FTGC",
  name: "First Trust Global Tactical Commodity Strategy Fund",
  lastSale: "17.46",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftgc"
  },
  {
  symbol: "FTLB",
  name: "First Trust Hedged BuyWrite Income ETF",
  lastSale: "19.3896",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftlb"
  },
  {
  symbol: "HYLS",
  name: "First Trust High Yield Long/Short ETF",
  lastSale: "47.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hyls"
  },
  {
  symbol: "FHK",
  name: "First Trust Hong Kong AlphaDEX Fund",
  lastSale: "34.71",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fhk"
  },
  {
  symbol: "NFTY",
  name: "First Trust India Nifty 50 Equal Weight ETF",
  lastSale: "32.38",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/nfty"
  },
  {
  symbol: "FTAG",
  name: "First Trust Indxx Global Agriculture ETF",
  lastSale: "21.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftag"
  },
  {
  symbol: "FTRI",
  name: "First Trust Indxx Global Natural Resources Income ETF",
  lastSale: "9.5344",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftri"
  },
  {
  symbol: "LEGR",
  name: "First Trust Indxx Innovative Transaction & Process ETF",
  lastSale: "31.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/legr"
  },
  {
  symbol: "NXTG",
  name: "First Trust Indxx NextG ETF",
  lastSale: "60.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/nxtg"
  },
  {
  symbol: "FPXI",
  name: "First Trust International Equity Opportunities ETF",
  lastSale: "57.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fpxi"
  },
  {
  symbol: "FPXE",
  name: "First Trust IPOX Europe Equity Opportunities ETF",
  lastSale: "25.0359",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fpxe"
  },
  {
  symbol: "FJP",
  name: "First Trust Japan AlphaDEX Fund",
  lastSale: "47.45",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fjp"
  },
  {
  symbol: "FEX",
  name: "First Trust Large Cap Core AlphaDEX Fund",
  lastSale: "64.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fex"
  },
  {
  symbol: "FTC",
  name: "First Trust Large Cap Growth AlphaDEX Fund",
  lastSale: "86.7521",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftc"
  },
  {
  symbol: "RNLC",
  name: "First Trust Large Cap US Equity Select ETF",
  lastSale: "24.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rnlc"
  },
  {
  symbol: "FTA",
  name: "First Trust Large Cap Value AlphaDEX Fund",
  lastSale: "47.7664",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fta"
  },
  {
  symbol: "FLN",
  name: "First Trust Latin America AlphaDEX Fund",
  lastSale: "15.715",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fln"
  },
  {
  symbol: "LMBS",
  name: "First Trust Low Duration Opportunities ETF",
  lastSale: "51.57",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lmbs"
  },
  {
  symbol: "LDSF",
  name: "First Trust Low Duration Strategic Focus ETF",
  lastSale: "20.31",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ldsf"
  },
  {
  symbol: "FMB",
  name: "First Trust Managed Municipal ETF",
  lastSale: "55.44",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fmb"
  },
  {
  symbol: "FMK",
  name: "First Trust Mega Cap AlphaDEX Fund",
  lastSale: "38.61",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fmk"
  },
  {
  symbol: "FNX",
  name: "First Trust Mid Cap Core AlphaDEX Fund",
  lastSale: "69.0954",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fnx"
  },
  {
  symbol: "FNY",
  name: "First Trust Mid Cap Growth AlphaDEX Fund",
  lastSale: "55.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fny"
  },
  {
  symbol: "RNMC",
  name: "First Trust Mid Cap US Equity Select ETF",
  lastSale: "20.34",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rnmc"
  },
  {
  symbol: "FNK",
  name: "First Trust Mid Cap Value AlphaDEX Fund",
  lastSale: "29.0336",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fnk"
  },
  {
  symbol: "FAD",
  name: "First Trust Multi Cap Growth AlphaDEX Fund",
  lastSale: "89.4954",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fad"
  },
  {
  symbol: "FAB",
  name: "First Trust Multi Cap Value AlphaDEX Fund",
  lastSale: "48.5498",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fab"
  },
  {
  symbol: "MDIV",
  name: "First Trust Multi-Asset Diversified Income Index Fund",
  lastSale: "13.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mdiv"
  },
  {
  symbol: "MCEF",
  name: "First Trust Municipal CEF Income Opportunity ETF",
  lastSale: "18.9249",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mcef"
  },
  {
  symbol: "FMHI",
  name: "First Trust Municipal High Income ETF",
  lastSale: "51.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fmhi"
  },
  {
  symbol: "QABA",
  name: "First Trust NASDAQ ABA Community Bank Index Fund",
  lastSale: "36.0661",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qaba"
  },
  {
  symbol: "ROBT",
  name: "First Trust Nasdaq Artificial Intelligence and Robotics ETF",
  lastSale: "40.18",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/robt"
  },
  {
  symbol: "FTXO",
  name: "First Trust Nasdaq Bank ETF",
  lastSale: "18.44",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxo"
  },
  {
  symbol: "QCLN",
  name: "First Trust NASDAQ Clean Edge Green Energy Index Fund",
  lastSale: "47.8",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qcln"
  },
  {
  symbol: "GRID",
  name: "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index ",
  lastSale: "65.4728",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/grid"
  },
  {
  symbol: "CIBR",
  name: "First Trust NASDAQ Cybersecurity ETF",
  lastSale: "35.22",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cibr"
  },
  {
  symbol: "FTXG",
  name: "First Trust Nasdaq Food & Beverage ETF",
  lastSale: "22.17",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxg"
  },
  {
  symbol: "CARZ",
  name: "First Trust NASDAQ Global Auto Index Fund",
  lastSale: "40.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/carz"
  },
  {
  symbol: "FTXN",
  name: "First Trust Nasdaq Oil & Gas ETF",
  lastSale: "9.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxn"
  },
  {
  symbol: "FTXH",
  name: "First Trust Nasdaq Pharmaceuticals ETF",
  lastSale: "23.9201",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxh"
  },
  {
  symbol: "FTXD",
  name: "First Trust Nasdaq Retail ETF",
  lastSale: "26.8961",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxd"
  },
  {
  symbol: "FTXL",
  name: "First Trust Nasdaq Semiconductor ETF",
  lastSale: "49.6106",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxl"
  },
  {
  symbol: "TDIV",
  name: "First Trust NASDAQ Technology Dividend Index Fund",
  lastSale: "43.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tdiv"
  },
  {
  symbol: "FTXR",
  name: "First Trust Nasdaq Transportation ETF",
  lastSale: "24.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftxr"
  },
  {
  symbol: "QQEW",
  name: "First Trust NASDAQ-100 Equal Weighted Index Fund",
  lastSale: "87.87",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqew"
  },
  {
  symbol: "QQXT",
  name: "First Trust NASDAQ-100 Ex-Technology Sector Index Fund",
  lastSale: "69.56",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqxt"
  },
  {
  symbol: "QTEC",
  name: "First Trust NASDAQ-100- Technology Index Fund",
  lastSale: "119.63",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qtec"
  },
  {
  symbol: "AIRR",
  name: "First Trust RBA American Industrial Renaissance ETF",
  lastSale: "27.1247",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/airr"
  },
  {
  symbol: "RDVY",
  name: "First Trust Rising Dividend Achievers ETF",
  lastSale: "32.98",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rdvy"
  },
  {
  symbol: "RFAP",
  name: "First Trust RiverFront Dynamic Asia Pacific ETF",
  lastSale: "51.15",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rfap"
  },
  {
  symbol: "RFDI",
  name: "First Trust RiverFront Dynamic Developed International ETF",
  lastSale: "56.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rfdi"
  },
  {
  symbol: "RFEM",
  name: "First Trust RiverFront Dynamic Emerging Markets ETF",
  lastSale: "62.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rfem"
  },
  {
  symbol: "RFEU",
  name: "First Trust RiverFront Dynamic Europe ETF",
  lastSale: "57.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rfeu"
  },
  {
  symbol: "FID",
  name: "First Trust S&P International Dividend Aristocrats ETF",
  lastSale: "14.31",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fid"
  },
  {
  symbol: "FTSL",
  name: "First Trust Senior Loan Fund ETF",
  lastSale: "46.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ftsl"
  },
  {
  symbol: "FYX",
  name: "First Trust Small Cap Core AlphaDEX Fund",
  lastSale: "61.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fyx"
  },
  {
  symbol: "FYC",
  name: "First Trust Small Cap Growth AlphaDEX Fund",
  lastSale: "49.6088",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fyc"
  },
  {
  symbol: "RNSC",
  name: "First Trust Small Cap US Equity Select ETF",
  lastSale: "19.38",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rnsc"
  },
  {
  symbol: "FYT",
  name: "First Trust Small Cap Value AlphaDEX Fund",
  lastSale: "32.4757",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fyt"
  },
  {
  symbol: "SDVY",
  name: "First Trust SMID Cap Rising Dividend Achievers ETF",
  lastSale: "19.125",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/sdvy"
  },
  {
  symbol: "FKO",
  name: "First Trust South Korea AlphaDEX Fund",
  lastSale: "20.34",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fko"
  },
  {
  symbol: "FCVT",
  name: "First Trust SSI Strategic Convertible Securities ETF",
  lastSale: "41.8586",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fcvt"
  },
  {
  symbol: "FDIV",
  name: "First Trust Strategic Income ETF",
  lastSale: "45.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fdiv"
  },
  {
  symbol: "FSZ",
  name: "First Trust Switzerland AlphaDEX Fund",
  lastSale: "52.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fsz"
  },
  {
  symbol: "FIXD",
  name: "First Trust TCW Opportunistic Fixed Income ETF",
  lastSale: "55.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fixd"
  },
  {
  symbol: "TUSA",
  name: "First Trust Total US Market AlphaDEX ETF",
  lastSale: "34.5338",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tusa"
  },
  {
  symbol: "FKU",
  name: "First Trust United Kingdom AlphaDEX Fund",
  lastSale: "31.025",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fku"
  },
  {
  symbol: "RNDV",
  name: "First Trust US Equity Dividend Select ETF",
  lastSale: "21.7392",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rndv"
  },
  {
  symbol: "FUNC",
  name: "First United Corporation",
  lastSale: "12.86",
  marketCap: "$89.82M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/func"
  },
  {
  symbol: "FUSB",
  name: "First US Bancshares, Inc.",
  lastSale: "7.26",
  marketCap: "$44.84M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fusb"
  },
  {
  symbol: "MYFW",
  name: "First Western Financial, Inc.",
  lastSale: "14.25",
  marketCap: "$113.31M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/myfw"
  },
  {
  symbol: "FCFS",
  name: "FirstCash, Inc.",
  lastSale: "54.43",
  marketCap: "$2.26B",
  ipoYear: "1991",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/fcfs"
  },
  {
  symbol: "SVVC",
  name: "Firsthand Technology Value Fund, Inc.",
  lastSale: "3.16",
  marketCap: "$21.78M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/svvc"
  },
  {
  symbol: "FSV",
  name: "FirstService Corporation",
  lastSale: "127.95",
  marketCap: "$5.56B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/fsv"
  },
  {
  symbol: "FISV",
  name: "Fiserv, Inc.",
  lastSale: "96.61",
  marketCap: "$64.69B",
  ipoYear: "1986",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fisv"
  },
  {
  symbol: "FIVE",
  name: "Five Below, Inc.",
  lastSale: "135.25",
  marketCap: "$7.55B",
  ipoYear: "2012",
  sector: "Consumer Services",
  industry: "Department/Specialty Retail Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/five"
  },
  {
  symbol: "FPRX",
  name: "Five Prime Therapeutics, Inc.",
  lastSale: "5.52",
  marketCap: "$202.19M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fprx"
  },
  {
  symbol: "FVE",
  name: "Five Star Senior Living Inc.",
  lastSale: "4.63",
  marketCap: "$146.19M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Hospital/Nursing Management",
  summaryQuote: "https://old.nasdaq.com/symbol/fve"
  },
  {
  symbol: "FIVN",
  name: "Five9, Inc.",
  lastSale: "145.2",
  marketCap: "$9.49B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fivn"
  },
  {
  symbol: "FLEX",
  name: "Flex Ltd.",
  lastSale: "13.85",
  marketCap: "$6.94B",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/flex"
  },
  {
  symbol: "FLXN",
  name: "Flexion Therapeutics, Inc.",
  lastSale: "12.44",
  marketCap: "$613.33M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/flxn"
  },
  {
  symbol: "SKOR",
  name: "FlexShares Credit-Scored US Corporate Bond Index Fund",
  lastSale: "55.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/skor"
  },
  {
  symbol: "ASET",
  name: "FlexShares Real Assets Allocation Index Fund",
  lastSale: "27.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/aset"
  },
  {
  symbol: "ESG",
  name: "FlexShares Trust",
  lastSale: "82.1498",
  marketCap: "$43.13M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/esg"
  },
  {
  symbol: "ESGG",
  name: "FlexShares Trust",
  lastSale: "110.2114",
  marketCap: "$99.19M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/esgg"
  },
  {
  symbol: "LKOR",
  name: "FlexShares Trust",
  lastSale: "62.8247",
  marketCap: "$18.85M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lkor"
  },
  {
  symbol: "QLC",
  name: "FlexShares Trust",
  lastSale: "36.7475",
  marketCap: "$53.28M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qlc"
  },
  {
  symbol: "MBSD",
  name: "FlexShares Trust FlexShares Disciplined Duration MBS Index Fun",
  lastSale: "24.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mbsd"
  },
  {
  symbol: "FPAY",
  name: "FlexShopper, Inc.",
  lastSale: "1.6",
  marketCap: "$34.18M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fpay"
  },
  {
  symbol: "FLXS",
  name: "Flexsteel Industries, Inc.",
  lastSale: "29.83",
  marketCap: "$229.49M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/flxs"
  },
  {
  symbol: "FLIR",
  name: "FLIR Systems, Inc.",
  lastSale: "35.01",
  marketCap: "$4.59B",
  ipoYear: "1993",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/flir"
  },
  {
  symbol: "FLWR",
  name: "Flowr Corporation (The)",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/flwr"
  },
  {
  symbol: "FLNT",
  name: "Fluent, Inc.",
  lastSale: "2.5",
  marketCap: "$190.78M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/flnt"
  },
  {
  symbol: "FLDM",
  name: "Fluidigm Corporation",
  lastSale: "6.29",
  marketCap: "$464.18M",
  ipoYear: "2011",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/fldm"
  },
  {
  symbol: "FFIC",
  name: "Flushing Financial Corporation",
  lastSale: "12.26",
  marketCap: "$345.96M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ffic"
  },
  {
  symbol: "FLUX",
  name: "Flux Power Holdings, Inc.",
  lastSale: "7.31",
  marketCap: "$83.48M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/flux"
  },
  {
  symbol: "FNCB",
  name: "FNCB Bancorp Inc.",
  lastSale: "5.5",
  marketCap: "$111.29M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fncb"
  },
  {
  symbol: "FOCS",
  name: "Focus Financial Partners Inc.",
  lastSale: "37.63",
  marketCap: "$2.62B",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/focs"
  },
  {
  symbol: "FHTX",
  name: "Foghorn Therapeutics Inc.",
  lastSale: "16",
  marketCap: "$571.12M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fhtx"
  },
  {
  symbol: "FONR",
  name: "Fonar Corporation",
  lastSale: "20.1",
  marketCap: "$132.16M",
  ipoYear: "1981",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/fonr"
  },
  {
  symbol: "FRSX",
  name: "Foresight Autonomous Holdings Ltd.",
  lastSale: "0.9807",
  marketCap: "$50.78M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/frsx"
  },
  {
  symbol: "FMTX",
  name: "Forma Therapeutics Holdings, Inc.",
  lastSale: "47.85",
  marketCap: "$2.09B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/fmtx"
  },
  {
  symbol: "FORM",
  name: "FormFactor, Inc.",
  lastSale: "29.18",
  marketCap: "$2.25B",
  ipoYear: "2003",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/form"
  },
  {
  symbol: "FORTY",
  name: "Formula Systems (1985) Ltd.",
  lastSale: "85.2",
  marketCap: "$1.3B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/forty"
  },
  {
  symbol: "FORR",
  name: "Forrester Research, Inc.",
  lastSale: "36.6",
  marketCap: "$691.48M",
  ipoYear: "1996",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/forr"
  },
  {
  symbol: "FBRX",
  name: "Forte Biosciences, Inc. ",
  lastSale: "33.92",
  marketCap: "$380.07M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fbrx"
  },
  {
  symbol: "FRTA",
  name: "Forterra, Inc.",
  lastSale: "14.89",
  marketCap: "$974.49M",
  ipoYear: "2016",
  sector: "Capital Goods",
  industry: "Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/frta"
  },
  {
  symbol: "FTNT",
  name: "Fortinet, Inc.",
  lastSale: "124.23",
  marketCap: "$20.1B",
  ipoYear: "2009",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ftnt"
  },
  {
  symbol: "FBIO",
  name: "Fortress Biotech, Inc.",
  lastSale: "2.43",
  marketCap: "$213.86M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fbio"
  },
  {
  symbol: "FBIOP",
  name: "Fortress Biotech, Inc.",
  lastSale: "18.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fbiop"
  },
  {
  symbol: "FIII",
  name: "Forum Merger III Corporation",
  lastSale: "9.75",
  marketCap: "$243.75M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fiii"
  },
  {
  symbol: "FIIIU",
  name: "Forum Merger III Corporation",
  lastSale: "10.07",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fiiiu"
  },
  {
  symbol: "FIIIW",
  name: "Forum Merger III Corporation",
  lastSale: "1.21",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fiiiw"
  },
  {
  symbol: "FWRD",
  name: "Forward Air Corporation",
  lastSale: "62.595",
  marketCap: "$1.75B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/fwrd"
  },
  {
  symbol: "FORD",
  name: "Forward Industries, Inc.",
  lastSale: "1.52",
  marketCap: "$14.57M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Plastic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ford"
  },
  {
  symbol: "FWP",
  name: "Forward Pharma A/S",
  lastSale: "6.62",
  marketCap: "$45.62M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fwp"
  },
  {
  symbol: "FOSL",
  name: "Fossil Group, Inc.",
  lastSale: "6.4",
  marketCap: "$328.31M",
  ipoYear: "1993",
  sector: "Consumer Non-Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/fosl"
  },
  {
  symbol: "FOX",
  name: "Fox Corporation",
  lastSale: "25.995",
  marketCap: "$15.52B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/fox"
  },
  {
  symbol: "FOXA",
  name: "Fox Corporation",
  lastSale: "26.185",
  marketCap: "$15.64B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/foxa"
  },
  {
  symbol: "FOXF",
  name: "Fox Factory Holding Corp.",
  lastSale: "85.66",
  marketCap: "$3.55B",
  ipoYear: "2013",
  sector: "Consumer Non-Durables",
  industry: "Motor Vehicles",
  summaryQuote: "https://old.nasdaq.com/symbol/foxf"
  },
  {
  symbol: "FRAN",
  name: "Francesca&#39;s Holdings Corporation",
  lastSale: "3.14",
  marketCap: "$9.52M",
  ipoYear: "2011",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/fran"
  },
  {
  symbol: "FRG",
  name: "Franchise Group, Inc.",
  lastSale: "24.44",
  marketCap: "$978.32M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/frg"
  },
  {
  symbol: "FRGAP",
  name: "Franchise Group, Inc.",
  lastSale: "24.95",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/frgap"
  },
  {
  symbol: "FELE",
  name: "Franklin Electric Co., Inc.",
  lastSale: "61.81",
  marketCap: "$2.86B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/fele"
  },
  {
  symbol: "FRAF",
  name: "Franklin Financial Services Corporation",
  lastSale: "23.66",
  marketCap: "$102.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fraf"
  },
  {
  symbol: "FRHC",
  name: "Freedom Holding Corp.",
  lastSale: "28.17",
  marketCap: "$1.64B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/frhc"
  },
  {
  symbol: "FRLN",
  name: "Freeline Therapeutics Holdings plc",
  lastSale: "17.75",
  marketCap: "$616.72M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/frln"
  },
  {
  symbol: "RAIL",
  name: "Freightcar America, Inc.",
  lastSale: "1.64",
  marketCap: "$25.48M",
  ipoYear: "2005",
  sector: "Capital Goods",
  industry: "Railroads",
  summaryQuote: "https://old.nasdaq.com/symbol/rail"
  },
  {
  symbol: "FEIM",
  name: "Frequency Electronics, Inc.",
  lastSale: "9.71",
  marketCap: "$88.97M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/feim"
  },
  {
  symbol: "FREQ",
  name: "Frequency Therapeutics, Inc.",
  lastSale: "22.47",
  marketCap: "$756.02M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/freq"
  },
  {
  symbol: "FRPT",
  name: "Freshpet, Inc.",
  lastSale: "117.51",
  marketCap: "$4.76B",
  ipoYear: "2014",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/frpt"
  },
  {
  symbol: "FTDR",
  name: "frontdoor, inc.",
  lastSale: "41",
  marketCap: "$3.5B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftdr"
  },
  {
  symbol: "FRPH",
  name: "FRP Holdings, Inc.",
  lastSale: "40",
  marketCap: "$381.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/frph"
  },
  {
  symbol: "FSBW",
  name: "FS Bancorp, Inc.",
  lastSale: "45.55",
  marketCap: "$193.41M",
  ipoYear: "2012",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fsbw"
  },
  {
  symbol: "FSDC",
  name: "FS Development Corp.",
  lastSale: "10.16",
  marketCap: "$162.32M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/fsdc"
  },
  {
  symbol: "HUGE",
  name: "FSD Pharma Inc.",
  lastSale: "1.76",
  marketCap: "$33.72M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/huge"
  },
  {
  symbol: "FTOC",
  name: "FTAC Olympus Acquisition Corp.",
  lastSale: "9.65",
  marketCap: "$958M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftoc"
  },
  {
  symbol: "FTOCU",
  name: "FTAC Olympus Acquisition Corp.",
  lastSale: "9.95",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftocu"
  },
  {
  symbol: "FTOCW",
  name: "FTAC Olympus Acquisition Corp.",
  lastSale: "0.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftocw"
  },
  {
  symbol: "FTEK",
  name: "Fuel Tech, Inc.",
  lastSale: "0.79",
  marketCap: "$19.51M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Pollution Control Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ftek"
  },
  {
  symbol: "FCEL",
  name: "FuelCell Energy, Inc.",
  lastSale: "2.215",
  marketCap: "$652.76M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/fcel"
  },
  {
  symbol: "FULC",
  name: "Fulcrum Therapeutics, Inc.",
  lastSale: "10.48",
  marketCap: "$287.71M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fulc"
  },
  {
  symbol: "FLGT",
  name: "Fulgent Genetics, Inc.",
  lastSale: "36.35",
  marketCap: "$814.39M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/flgt"
  },
  {
  symbol: "FORK",
  name: "Fuling Global Inc.",
  lastSale: "2.35",
  marketCap: "$37.14M",
  ipoYear: "2015",
  sector: "Consumer Non-Durables",
  industry: "Plastic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/fork"
  },
  {
  symbol: "FLL",
  name: "Full House Resorts, Inc.",
  lastSale: "2.31",
  marketCap: "$62.61M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/fll"
  },
  {
  symbol: "FMAX",
  name: "Full Spectrum Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/fmax"
  },
  {
  symbol: "FULT",
  name: "Fulton Financial Corporation",
  lastSale: "10.68",
  marketCap: "$1.73B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fult"
  },
  {
  symbol: "FNKO",
  name: "Funko, Inc.",
  lastSale: "7.26",
  marketCap: "$359.54M",
  ipoYear: "2017",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/fnko"
  },
  {
  symbol: "FUSN",
  name: "Fusion Pharmaceuticals Inc.",
  lastSale: "12.35",
  marketCap: "$514.55M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/fusn"
  },
  {
  symbol: "FUTU",
  name: "Futu Holdings Limited",
  lastSale: "32.3",
  marketCap: "$4.37B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/futu"
  },
  {
  symbol: "FTFT",
  name: "Future FinTech Group Inc.",
  lastSale: "2.23",
  marketCap: "$93.07M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ftft"
  },
  {
  symbol: "FFHL",
  name: "Fuwei Films (Holdings) Co., Ltd.",
  lastSale: "4.33",
  marketCap: "$14.14M",
  ipoYear: "2006",
  sector: "Capital Goods",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/ffhl"
  },
  {
  symbol: "FVCB",
  name: "FVCBankcorp, Inc.",
  lastSale: "12.47",
  marketCap: "$168.08M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fvcb"
  },
  {
  symbol: "GMVD",
  name: "G Medical Innovations Holdings Ltd.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gmvd"
  },
  {
  symbol: "WILC",
  name: "G. Willi-Food International, Ltd.",
  lastSale: "20.3",
  marketCap: "$268.31M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/wilc"
  },
  {
  symbol: "GTHX",
  name: "G1 Therapeutics, Inc.",
  lastSale: "11.71",
  marketCap: "$445.15M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gthx"
  },
  {
  symbol: "GAIA",
  name: "Gaia, Inc.",
  lastSale: "10.26",
  marketCap: "$196.82M",
  ipoYear: "1999",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/gaia"
  },
  {
  symbol: "GLPG",
  name: "Galapagos NV",
  lastSale: "128.02",
  marketCap: "$8.36B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/glpg"
  },
  {
  symbol: "GALT",
  name: "Galectin Therapeutics Inc.",
  lastSale: "2.62",
  marketCap: "$149.54M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/galt"
  },
  {
  symbol: "GRTX",
  name: "Galera Therapeutics, Inc.",
  lastSale: "11.55",
  marketCap: "$287.39M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/grtx"
  },
  {
  symbol: "GLMD",
  name: "Galmed Pharmaceuticals Ltd.",
  lastSale: "3.14",
  marketCap: "$66.3M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/glmd"
  },
  {
  symbol: "GMDA",
  name: "Gamida Cell Ltd.",
  lastSale: "5.81",
  marketCap: "$287.43M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/gmda"
  },
  {
  symbol: "GLPI",
  name: "Gaming and Leisure Properties, Inc.",
  lastSale: "37.31",
  marketCap: "$8.13B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/glpi"
  },
  {
  symbol: "GAN",
  name: "GAN Limited",
  lastSale: "15.15",
  marketCap: "$438.3M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/gan"
  },
  {
  symbol: "GRMN",
  name: "Garmin Ltd.",
  lastSale: "98.61",
  marketCap: "$18.86B",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/grmn"
  },
  {
  symbol: "GARS",
  name: "Garrison Capital Inc.",
  lastSale: "3.88",
  marketCap: "$62.27M",
  ipoYear: "2013",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gars"
  },
  {
  symbol: "GLIBA",
  name: "GCI Liberty, Inc.",
  lastSale: "79.2",
  marketCap: "$8.38B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/gliba"
  },
  {
  symbol: "GLIBP",
  name: "GCI Liberty, Inc.",
  lastSale: "28.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/glibp"
  },
  {
  symbol: "GDS",
  name: "GDS Holdings Limited",
  lastSale: "86.1",
  marketCap: "$14.11B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/gds"
  },
  {
  symbol: "GNSS",
  name: "Genasys Inc.",
  lastSale: "6.52",
  marketCap: "$218.36M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/gnss"
  },
  {
  symbol: "GENC",
  name: "Gencor Industries Inc.",
  lastSale: "11.705",
  marketCap: "$170.97M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Construction/Ag Equipment/Trucks",
  summaryQuote: "https://old.nasdaq.com/symbol/genc"
  },
  {
  symbol: "GFN",
  name: "General Finance Corporation",
  lastSale: "6.27",
  marketCap: "$189.2M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gfn"
  },
  {
  symbol: "GFNCP",
  name: "General Finance Corporation",
  lastSale: "103.09",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gfncp"
  },
  {
  symbol: "GFNSL",
  name: "General Finance Corporation",
  lastSale: "25.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gfnsl"
  },
  {
  symbol: "GBIO",
  name: "Generation Bio Co.",
  lastSale: "23.01",
  marketCap: "$1.07B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gbio"
  },
  {
  symbol: "GENE",
  name: "Genetic Technologies Ltd",
  lastSale: "3.37",
  marketCap: "$46.4M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/gene"
  },
  {
  symbol: "GTH",
  name: "Genetron Holdings Limited",
  lastSale: "11.65",
  marketCap: "$1.03B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/gth"
  },
  {
  symbol: "GNFT",
  name: "GENFIT S.A.",
  lastSale: "3.84",
  marketCap: "$149.21M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/gnft"
  },
  {
  symbol: "GNUS",
  name: "Genius Brands International, Inc.",
  lastSale: "1.42",
  marketCap: "$311.02M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/gnus"
  },
  {
  symbol: "GMAB",
  name: "Genmab A/S",
  lastSale: "34.97",
  marketCap: "$22.9B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gmab"
  },
  {
  symbol: "GNMK",
  name: "GenMark Diagnostics, Inc.",
  lastSale: "11.74",
  marketCap: "$834.38M",
  ipoYear: "2010",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/gnmk"
  },
  {
  symbol: "GNCA",
  name: "Genocea Biosciences, Inc.",
  lastSale: "2.26",
  marketCap: "$116.06M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/gnca"
  },
  {
  symbol: "GNPX",
  name: "Genprex, Inc.",
  lastSale: "3.19",
  marketCap: "$124M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gnpx"
  },
  {
  symbol: "GNTX",
  name: "Gentex Corporation",
  lastSale: "28.3",
  marketCap: "$6.96B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/gntx"
  },
  {
  symbol: "THRM",
  name: "Gentherm Inc",
  lastSale: "45.44",
  marketCap: "$1.48B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/thrm"
  },
  {
  symbol: "GEOS",
  name: "Geospace Technologies Corporation",
  lastSale: "5.75",
  marketCap: "$78.57M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/geos"
  },
  {
  symbol: "GOVX",
  name: "GeoVax Labs, Inc.",
  lastSale: "3.16",
  marketCap: "$11.25M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/govx"
  },
  {
  symbol: "GOVXW",
  name: "GeoVax Labs, Inc.",
  lastSale: "0.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/govxw"
  },
  {
  symbol: "GABC",
  name: "German American Bancorp, Inc.",
  lastSale: "30.13",
  marketCap: "$798.38M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gabc"
  },
  {
  symbol: "GERN",
  name: "Geron Corporation",
  lastSale: "1.85",
  marketCap: "$574.36M",
  ipoYear: "1996",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gern"
  },
  {
  symbol: "GEVO",
  name: "Gevo, Inc.",
  lastSale: "1.03",
  marketCap: "$78M",
  ipoYear: "2011",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/gevo"
  },
  {
  symbol: "ROCK",
  name: "Gibraltar Industries, Inc.",
  lastSale: "62.29",
  marketCap: "$2.02B",
  ipoYear: "1993",
  sector: "Capital Goods",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/rock"
  },
  {
  symbol: "GIGM",
  name: "GigaMedia Limited",
  lastSale: "2.8234",
  marketCap: "$31.2M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/gigm"
  },
  {
  symbol: "GIII",
  name: "G-III Apparel Group, LTD.",
  lastSale: "14.43",
  marketCap: "$697.82M",
  ipoYear: "1989",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/giii"
  },
  {
  symbol: "GILT",
  name: "Gilat Satellite Networks Ltd.",
  lastSale: "5.63",
  marketCap: "$312.57M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/gilt"
  },
  {
  symbol: "GILD",
  name: "Gilead Sciences, Inc.",
  lastSale: "60.01",
  marketCap: "$75.24B",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/gild"
  },
  {
  symbol: "GBCI",
  name: "Glacier Bancorp, Inc.",
  lastSale: "36.1",
  marketCap: "$3.44B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gbci"
  },
  {
  symbol: "GLAD",
  name: "Gladstone Capital Corporation",
  lastSale: "7.18",
  marketCap: "$223.96M",
  ipoYear: "2001",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/glad"
  },
  {
  symbol: "GLADD",
  name: "Gladstone Capital Corporation",
  lastSale: "25.1795",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/gladd"
  },
  {
  symbol: "GLADL",
  name: "Gladstone Capital Corporation",
  lastSale: "25.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Textiles",
  summaryQuote: "https://old.nasdaq.com/symbol/gladl"
  },
  {
  symbol: "GOOD",
  name: "Gladstone Commercial Corporation",
  lastSale: "16.5",
  marketCap: "$561.82M",
  ipoYear: "2003",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/good"
  },
  {
  symbol: "GOODM",
  name: "Gladstone Commercial Corporation",
  lastSale: "25.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/goodm"
  },
  {
  symbol: "GOODN",
  name: "Gladstone Commercial Corporation",
  lastSale: "25.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/goodn"
  },
  {
  symbol: "GAIN",
  name: "Gladstone Investment Corporation",
  lastSale: "8.65",
  marketCap: "$287.22M",
  ipoYear: "2005",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gain"
  },
  {
  symbol: "GAINL",
  name: "Gladstone Investment Corporation",
  lastSale: "24.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gainl"
  },
  {
  symbol: "GAINM",
  name: "Gladstone Investment Corporation",
  lastSale: "24.81",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gainm"
  },
  {
  symbol: "LAND",
  name: "Gladstone Land Corporation",
  lastSale: "14.15",
  marketCap: "$314.2M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/land"
  },
  {
  symbol: "LANDO",
  name: "Gladstone Land Corporation",
  lastSale: "24.41",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/lando"
  },
  {
  symbol: "LANDP",
  name: "Gladstone Land Corporation",
  lastSale: "25.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/landp"
  },
  {
  symbol: "GLBZ",
  name: "Glen Burnie Bancorp",
  lastSale: "9.7507",
  marketCap: "$27.68M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/glbz"
  },
  {
  symbol: "GBT",
  name: "Global Blood Therapeutics, Inc.",
  lastSale: "56.58",
  marketCap: "$3.47B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gbt"
  },
  {
  symbol: "GBLI",
  name: "Global Indemnity Group, LLC",
  lastSale: "23.9",
  marketCap: "$342.9M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/gbli"
  },
  {
  symbol: "GBLIL",
  name: "Global Indemnity Group, LLC",
  lastSale: "25.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/gblil"
  },
  {
  symbol: "SELF",
  name: "Global Self Storage, Inc.",
  lastSale: "3.95",
  marketCap: "$36.96M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/self"
  },
  {
  symbol: "GWRS",
  name: "Global Water Resources, Inc.",
  lastSale: "10.87",
  marketCap: "$245.52M",
  ipoYear: "2016",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/gwrs"
  },
  {
  symbol: "AIQ",
  name: "Global X Artificial Intelligence & Technology ETF",
  lastSale: "24.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/aiq"
  },
  {
  symbol: "DRIV",
  name: "Global X Autonomous & Electric Vehicles ETF",
  lastSale: "17.82",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/driv"
  },
  {
  symbol: "POTX",
  name: "Global X Cannabis ETF",
  lastSale: "7.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/potx"
  },
  {
  symbol: "CHB",
  name: "Global X China Biotech Innovation ETF",
  lastSale: "15.7603",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chb"
  },
  {
  symbol: "CLOU",
  name: "Global X Cloud Computing ETF",
  lastSale: "25.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/clou"
  },
  {
  symbol: "KRMA",
  name: "Global X Conscious Companies ETF",
  lastSale: "24.6073",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/krma"
  },
  {
  symbol: "BUG",
  name: "Global X Cybersecurity ETF",
  lastSale: "22.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bug"
  },
  {
  symbol: "DAX",
  name: "Global X DAX Germany ETF",
  lastSale: "26.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dax"
  },
  {
  symbol: "EBIZ",
  name: "Global X E-commerce ETF",
  lastSale: "28.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ebiz"
  },
  {
  symbol: "EDUT",
  name: "Global X Education ETF",
  lastSale: "16.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/edut"
  },
  {
  symbol: "FINX",
  name: "Global X FinTech ETF",
  lastSale: "38.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/finx"
  },
  {
  symbol: "CHIC",
  name: "Global X Funds Global X MSCI China Communication Services ETF",
  lastSale: "26.5805",
  marketCap: "$26.58M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chic"
  },
  {
  symbol: "GNOM",
  name: "Global X Genomics & Biotechnology ETF",
  lastSale: "19.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gnom"
  },
  {
  symbol: "BFIT",
  name: "Global X Health & Wellness Thematic ETF",
  lastSale: "22.603",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bfit"
  },
  {
  symbol: "SNSR",
  name: "Global X Internet of Things ETF",
  lastSale: "26.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/snsr"
  },
  {
  symbol: "LNGR",
  name: "Global X Longevity Thematic ETF",
  lastSale: "25.565",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lngr"
  },
  {
  symbol: "MILN",
  name: "Global X Millennials Thematic ETF",
  lastSale: "32.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/miln"
  },
  {
  symbol: "EFAS",
  name: "Global X MSCI SuperDividend EAFE ETF",
  lastSale: "11.89",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/efas"
  },
  {
  symbol: "QYLG",
  name: "Global X Nasdaq 100 Covered Call & Growth ETF",
  lastSale: "27.3825",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qylg"
  },
  {
  symbol: "QYLD",
  name: "Global X NASDAQ-100 Covered Call ETF",
  lastSale: "21.41",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qyld"
  },
  {
  symbol: "BOTZ",
  name: "Global X Robotics & Artificial Intelligence ETF",
  lastSale: "28.52",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/botz"
  },
  {
  symbol: "CATH",
  name: "Global X S&P 500 Catholic Values ETF",
  lastSale: "41.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cath"
  },
  {
  symbol: "CEFA",
  name: "Global X S&P Catholic Values Developed ex-U.S. ETF",
  lastSale: "26",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cefa"
  },
  {
  symbol: "SOCL",
  name: "Global X Social Media ETF",
  lastSale: "54.37",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/socl"
  },
  {
  symbol: "ALTY",
  name: "Global X SuperDividend Alternatives ETF",
  lastSale: "10.5899",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/alty"
  },
  {
  symbol: "SRET",
  name: "Global X SuperDividend REIT ETF",
  lastSale: "7.71",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/sret"
  },
  {
  symbol: "EDOC",
  name: "Global X Telemedicine & Digital Health ETF",
  lastSale: "17.43",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/edoc"
  },
  {
  symbol: "GXTG",
  name: "Global X Thematic Growth ETF",
  lastSale: "36.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gxtg"
  },
  {
  symbol: "HERO",
  name: "Global X Video Games & Esports ETF",
  lastSale: "27.52",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hero"
  },
  {
  symbol: "YLCO",
  name: "Global X YieldCo & Renewable Energy Income ETF",
  lastSale: "15.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ylco"
  },
  {
  symbol: "GLBS",
  name: "Globus Maritime Limited",
  lastSale: "7.2",
  marketCap: "$12.64M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/glbs"
  },
  {
  symbol: "GSMG",
  name: "Glory Star New Media Group Holdings Limited",
  lastSale: "2.7",
  marketCap: "$155.45M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gsmg"
  },
  {
  symbol: "GSMGW",
  name: "Glory Star New Media Group Holdings Limited",
  lastSale: "0.0594",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gsmgw"
  },
  {
  symbol: "GLUU",
  name: "Glu Mobile Inc.",
  lastSale: "7.78",
  marketCap: "$1.33B",
  ipoYear: "2007",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gluu"
  },
  {
  symbol: "GLYC",
  name: "GlycoMimetics, Inc.",
  lastSale: "3.26",
  marketCap: "$155.58M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/glyc"
  },
  {
  symbol: "GOGO",
  name: "Gogo Inc.",
  lastSale: "9.13",
  marketCap: "$776.63M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/gogo"
  },
  {
  symbol: "GOCO",
  name: "GoHealth, Inc.",
  lastSale: "11.18",
  marketCap: "$3.51B",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/goco"
  },
  {
  symbol: "GLNG",
  name: "Golar LNG Limited",
  lastSale: "8.1",
  marketCap: "$792.18M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/glng"
  },
  {
  symbol: "GMLP",
  name: "Golar LNG Partners LP",
  lastSale: "2.03",
  marketCap: "$140.68M",
  ipoYear: "2011",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/gmlp"
  },
  {
  symbol: "GMLPP",
  name: "Golar LNG Partners LP",
  lastSale: "19.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/gmlpp"
  },
  {
  symbol: "GDEN",
  name: "Golden Entertainment, Inc.",
  lastSale: "13",
  marketCap: "$365.61M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/gden"
  },
  {
  symbol: "GOGL",
  name: "Golden Ocean Group Limited",
  lastSale: "3.63",
  marketCap: "$520.1M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/gogl"
  },
  {
  symbol: "GBDC",
  name: "Golub Capital BDC, Inc.",
  lastSale: "13.12",
  marketCap: "$2.19B",
  ipoYear: "2010",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gbdc"
  },
  {
  symbol: "GTIM",
  name: "Good Times Restaurants Inc.",
  lastSale: "1.43",
  marketCap: "$18.02M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/gtim"
  },
  {
  symbol: "GWACU",
  name: "Good Works Acquisition Corp.",
  lastSale: "9.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gwacu"
  },
  {
  symbol: "GBLK",
  name: "GoodBulk Ltd.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gblk"
  },
  {
  symbol: "GDRX",
  name: "GoodRx Holdings, Inc.",
  lastSale: "49.16",
  marketCap: "$19.09B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gdrx"
  },
  {
  symbol: "GSHD",
  name: "Goosehead Insurance, Inc.",
  lastSale: "111.65",
  marketCap: "$4.1B",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/gshd"
  },
  {
  symbol: "GPRO",
  name: "GoPro, Inc.",
  lastSale: "6.41",
  marketCap: "$1.01B",
  ipoYear: "2014",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/gpro"
  },
  {
  symbol: "GHIV",
  name: "Gores Holdings IV, Inc.",
  lastSale: "9.94",
  marketCap: "$528.06M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ghiv"
  },
  {
  symbol: "GHIVU",
  name: "Gores Holdings IV, Inc.",
  lastSale: "10.2796",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ghivu"
  },
  {
  symbol: "GHIVW",
  name: "Gores Holdings IV, Inc.",
  lastSale: "1.2575",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ghivw"
  },
  {
  symbol: "GRSV",
  name: "Gores Holdings V, Inc.",
  lastSale: "9.82",
  marketCap: "$649.65M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grsv"
  },
  {
  symbol: "GRSVU",
  name: "Gores Holdings V, Inc.",
  lastSale: "10.05",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grsvu"
  },
  {
  symbol: "GRSVW",
  name: "Gores Holdings V, Inc.",
  lastSale: "1.1",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grsvw"
  },
  {
  symbol: "GMHI",
  name: "Gores Metropoulos, Inc.",
  lastSale: "10.13",
  marketCap: "$506.5M",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/gmhi"
  },
  {
  symbol: "GMHIU",
  name: "Gores Metropoulos, Inc.",
  lastSale: "10.91",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/gmhiu"
  },
  {
  symbol: "GMHIW",
  name: "Gores Metropoulos, Inc.",
  lastSale: "2.018",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/gmhiw"
  },
  {
  symbol: "GOSS",
  name: "Gossamer Bio, Inc.",
  lastSale: "9.53",
  marketCap: "$686.05M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/goss"
  },
  {
  symbol: "LOPE",
  name: "Grand Canyon Education, Inc.",
  lastSale: "81.98",
  marketCap: "$3.88B",
  ipoYear: "2008",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lope"
  },
  {
  symbol: "GRVY",
  name: "GRAVITY Co., Ltd.",
  lastSale: "128.87",
  marketCap: "$895.5M",
  ipoYear: "2005",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grvy"
  },
  {
  symbol: "GRAY",
  name: "Graybug Vision, Inc.",
  lastSale: "15.32",
  marketCap: "$307.83M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gray"
  },
  {
  symbol: "GECC",
  name: "Great Elm Capital Corp.",
  lastSale: "2.95",
  marketCap: "$64.03M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gecc"
  },
  {
  symbol: "GECCL",
  name: "Great Elm Capital Corp.",
  lastSale: "23.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/geccl"
  },
  {
  symbol: "GECCM",
  name: "Great Elm Capital Corp.",
  lastSale: "22.1",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/geccm"
  },
  {
  symbol: "GECCN",
  name: "Great Elm Capital Corp.",
  lastSale: "21.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/geccn"
  },
  {
  symbol: "GEC",
  name: "Great Elm Capital Group, Inc. ",
  lastSale: "2.19",
  marketCap: "$55.98M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/gec"
  },
  {
  symbol: "GLDD",
  name: "Great Lakes Dredge & Dock Corporation",
  lastSale: "10.85",
  marketCap: "$704.67M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/gldd"
  },
  {
  symbol: "GSBC",
  name: "Great Southern Bancorp, Inc.",
  lastSale: "40.74",
  marketCap: "$565.49M",
  ipoYear: "1989",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gsbc"
  },
  {
  symbol: "GRBK",
  name: "Green Brick Partners, Inc.",
  lastSale: "17.36",
  marketCap: "$879.49M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/grbk"
  },
  {
  symbol: "GPP",
  name: "Green Plains Partners LP",
  lastSale: "7.97",
  marketCap: "$184.97M",
  ipoYear: "2015",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/gpp"
  },
  {
  symbol: "GPRE",
  name: "Green Plains, Inc.",
  lastSale: "15.44",
  marketCap: "$550.49M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/gpre"
  },
  {
  symbol: "GRCY",
  name: "Greencity Acquisition Corporation",
  lastSale: "9.84",
  marketCap: "$53.23M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grcy"
  },
  {
  symbol: "GRCYU",
  name: "Greencity Acquisition Corporation",
  lastSale: "9.96",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grcyu"
  },
  {
  symbol: "GRCYW",
  name: "Greencity Acquisition Corporation",
  lastSale: "0.2001",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grcyw"
  },
  {
  symbol: "GCBC",
  name: "Greene County Bancorp, Inc.",
  lastSale: "22.59",
  marketCap: "$192.32M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gcbc"
  },
  {
  symbol: "GTEC",
  name: "Greenland Technologies Holding Corporation",
  lastSale: "2.26",
  marketCap: "$22.65M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/gtec"
  },
  {
  symbol: "GNLN",
  name: "Greenlane Holdings, Inc.",
  lastSale: "2.98",
  marketCap: "$125.52M",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/gnln"
  },
  {
  symbol: "GLRE",
  name: "Greenlight Reinsurance, Ltd.",
  lastSale: "6.77",
  marketCap: "$241.15M",
  ipoYear: "2007",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/glre"
  },
  {
  symbol: "GP",
  name: "GreenPower Motor Company Inc.",
  lastSale: "9.15",
  marketCap: "$167.3M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Construction/Ag Equipment/Trucks",
  summaryQuote: "https://old.nasdaq.com/symbol/gp"
  },
  {
  symbol: "GRNQ",
  name: "Greenpro Capital Corp.",
  lastSale: "1.56",
  marketCap: "$92.61M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grnq"
  },
  {
  symbol: "GNRS",
  name: "Greenrose Acquisition Corp.",
  lastSale: "9.74",
  marketCap: "$213.23M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gnrs"
  },
  {
  symbol: "GNRSU",
  name: "Greenrose Acquisition Corp.",
  lastSale: "10.07",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gnrsu"
  },
  {
  symbol: "GNRSW",
  name: "Greenrose Acquisition Corp.",
  lastSale: "0.2599",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gnrsw"
  },
  {
  symbol: "GSKY",
  name: "GreenSky, Inc.",
  lastSale: "5.19",
  marketCap: "$946.59M",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gsky"
  },
  {
  symbol: "GRNV",
  name: "GreenVision Acquisition Corp",
  lastSale: "10.04",
  marketCap: "$72.16M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grnv"
  },
  {
  symbol: "GRNVR",
  name: "GreenVision Acquisition Corp",
  lastSale: "0.3999",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grnvr"
  },
  {
  symbol: "GRNVU",
  name: "GreenVision Acquisition Corp",
  lastSale: "10.75",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grnvu"
  },
  {
  symbol: "GRNVW",
  name: "GreenVision Acquisition Corp",
  lastSale: "0.4023",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/grnvw"
  },
  {
  symbol: "GLSI",
  name: "Greenwich LifeSciences, Inc.",
  lastSale: "4.0612",
  marketCap: "$48.61M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/glsi"
  },
  {
  symbol: "GDYN",
  name: "Grid Dynamics Holdings, Inc.",
  lastSale: "8.43",
  marketCap: "$428.59M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/gdyn"
  },
  {
  symbol: "GDYNW",
  name: "Grid Dynamics Holdings, Inc.",
  lastSale: "2",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/gdynw"
  },
  {
  symbol: "GSUM",
  name: "Gridsum Holding Inc.",
  lastSale: "1.785",
  marketCap: "$62.5M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/gsum"
  },
  {
  symbol: "GRIF",
  name: "Griffin Industrial Realty, Inc.",
  lastSale: "53.56",
  marketCap: "$303.01M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/grif"
  },
  {
  symbol: "GRFS",
  name: "Grifols, S.A.",
  lastSale: "17.9",
  marketCap: "$12.25B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/grfs"
  },
  {
  symbol: "GRIN",
  name: "Grindrod Shipping Holdings Ltd.",
  lastSale: "3.9799",
  marketCap: "$75.65M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/grin"
  },
  {
  symbol: "GRTS",
  name: "Gritstone Oncology, Inc.",
  lastSale: "2.96",
  marketCap: "$111.74M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/grts"
  },
  {
  symbol: "GO",
  name: "Grocery Outlet Holding Corp.",
  lastSale: "44.17",
  marketCap: "$4.05B",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/go"
  },
  {
  symbol: "GRPN",
  name: "Groupon, Inc.",
  lastSale: "19.7",
  marketCap: "$566.04M",
  ipoYear: "2011",
  sector: "Technology",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/grpn"
  },
  {
  symbol: "GRWG",
  name: "GrowGeneration Corp.",
  lastSale: "17.85",
  marketCap: "$851.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/grwg"
  },
  {
  symbol: "OMAB",
  name: "Grupo Aeroportuario del Centro Norte S.A.B. de C.V.",
  lastSale: "39.1",
  marketCap: "$1.91B",
  ipoYear: "2006",
  sector: "Transportation",
  industry: "Aerospace",
  summaryQuote: "https://old.nasdaq.com/symbol/omab"
  },
  {
  symbol: "GGAL",
  name: "Grupo Financiero Galicia S.A.",
  lastSale: "6.36",
  marketCap: "$907.42M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Commercial Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ggal"
  },
  {
  symbol: "GVP",
  name: "GSE Systems, Inc.",
  lastSale: "1.0034",
  marketCap: "$20.62M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/gvp"
  },
  {
  symbol: "GSIT",
  name: "GSI Technology, Inc.",
  lastSale: "6.64",
  marketCap: "$156.76M",
  ipoYear: "2007",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/gsit"
  },
  {
  symbol: "GTYH",
  name: "GTY Technology Holdings, Inc.",
  lastSale: "3.07",
  marketCap: "$165.45M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gtyh"
  },
  {
  symbol: "GNTY",
  name: "Guaranty Bancshares, Inc.",
  lastSale: "27.55",
  marketCap: "$302.73M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gnty"
  },
  {
  symbol: "GFED",
  name: "Guaranty Federal Bancshares, Inc.",
  lastSale: "14.25",
  marketCap: "$62.24M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/gfed"
  },
  {
  symbol: "GH",
  name: "Guardant Health, Inc.",
  lastSale: "111.69",
  marketCap: "$11.13B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/gh"
  },
  {
  symbol: "GHSI",
  name: "Guardion Health Sciences, Inc.",
  lastSale: "0.1813",
  marketCap: "$16.01M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ghsi"
  },
  {
  symbol: "GIFI",
  name: "Gulf Island Fabrication, Inc.",
  lastSale: "3.43",
  marketCap: "$52.51M",
  ipoYear: "1997",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/gifi"
  },
  {
  symbol: "GURE",
  name: "Gulf Resources, Inc.",
  lastSale: "4.95",
  marketCap: "$47.11M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/gure"
  },
  {
  symbol: "GPOR",
  name: "Gulfport Energy Corporation",
  lastSale: "0.2684",
  marketCap: "$42.98M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/gpor"
  },
  {
  symbol: "GWPH",
  name: "GW Pharmaceuticals Plc",
  lastSale: "90.75",
  marketCap: "$2.83B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/gwph"
  },
  {
  symbol: "GWGH",
  name: "GWG Holdings, Inc",
  lastSale: "8.77",
  marketCap: "$290.24M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/gwgh"
  },
  {
  symbol: "GXGX",
  name: "GX Acquisition Corp.",
  lastSale: "10.31",
  marketCap: "$370.52M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gxgx"
  },
  {
  symbol: "GXGXU",
  name: "GX Acquisition Corp.",
  lastSale: "11.61",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gxgxu"
  },
  {
  symbol: "GXGXW",
  name: "GX Acquisition Corp.",
  lastSale: "1.53",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/gxgxw"
  },
  {
  symbol: "GYRO",
  name: "Gyrodyne , LLC",
  lastSale: "17.05",
  marketCap: "$25.28M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Building operators",
  summaryQuote: "https://old.nasdaq.com/symbol/gyro"
  },
  {
  symbol: "HEES",
  name: "H&E Equipment Services, Inc.",
  lastSale: "21.44",
  marketCap: "$769.98M",
  ipoYear: "2006",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hees"
  },
  {
  symbol: "HLG",
  name: "Hailiang Education Group Inc.",
  lastSale: "64.9",
  marketCap: "$1.67B",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hlg"
  },
  {
  symbol: "HOFV",
  name: "Hall of Fame Resort &amp; Entertainment Company",
  lastSale: "2.03",
  marketCap: "$64.65M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/hofv"
  },
  {
  symbol: "HOFVW",
  name: "Hall of Fame Resort &amp; Entertainment Company",
  lastSale: "0.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/hofvw"
  },
  {
  symbol: "HNRG",
  name: "Hallador Energy Company",
  lastSale: "0.831",
  marketCap: "$25.32M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Coal Mining",
  summaryQuote: "https://old.nasdaq.com/symbol/hnrg"
  },
  {
  symbol: "HALL",
  name: "Hallmark Financial Services, Inc.",
  lastSale: "2.82",
  marketCap: "$51.16M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/hall"
  },
  {
  symbol: "HALO",
  name: "Halozyme Therapeutics, Inc.",
  lastSale: "29.79",
  marketCap: "$4.08B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/halo"
  },
  {
  symbol: "HLNE",
  name: "Hamilton Lane Incorporated",
  lastSale: "73.02",
  marketCap: "$3.85B",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/hlne"
  },
  {
  symbol: "HJLI",
  name: "Hancock Jaffe Laboratories, Inc.",
  lastSale: "0.348",
  marketCap: "$17.32M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/hjli"
  },
  {
  symbol: "HJLIW",
  name: "Hancock Jaffe Laboratories, Inc.",
  lastSale: "0.08",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/hjliw"
  },
  {
  symbol: "HWC",
  name: "Hancock Whitney Corporation",
  lastSale: "22.56",
  marketCap: "$1.95B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hwc"
  },
  {
  symbol: "HWCPL",
  name: "Hancock Whitney Corporation",
  lastSale: "25.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hwcpl"
  },
  {
  symbol: "HWCPZ",
  name: "Hancock Whitney Corporation",
  lastSale: "27.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hwcpz"
  },
  {
  symbol: "HAFC",
  name: "Hanmi Financial Corporation",
  lastSale: "8.6",
  marketCap: "$263.65M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hafc"
  },
  {
  symbol: "HAPP",
  name: "Happiness Biotech Group Limited",
  lastSale: "1.74",
  marketCap: "$43.5M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/happ"
  },
  {
  symbol: "HCDI",
  name: "Harbor Custom Development, Inc.",
  lastSale: "4.57",
  marketCap: "$25.72M",
  ipoYear: "2020",
  sector: "Capital Goods",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/hcdi"
  },
  {
  symbol: "HONE",
  name: "HarborOne Bancorp, Inc.",
  lastSale: "9.26",
  marketCap: "$540.87M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hone"
  },
  {
  symbol: "HLIT",
  name: "Harmonic Inc.",
  lastSale: "6.46",
  marketCap: "$629.39M",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/hlit"
  },
  {
  symbol: "HRMY",
  name: "Harmony Biosciences Holdings, Inc.",
  lastSale: "41.44",
  marketCap: "$2.64B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hrmy"
  },
  {
  symbol: "HARP",
  name: "Harpoon Therapeutics, Inc.",
  lastSale: "15.41",
  marketCap: "$387.43M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/harp"
  },
  {
  symbol: "HROW",
  name: "Harrow Health, Inc.",
  lastSale: "4.96",
  marketCap: "$127.22M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hrow"
  },
  {
  symbol: "HBIO",
  name: "Harvard Bioscience, Inc.",
  lastSale: "3.13",
  marketCap: "$121.89M",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/hbio"
  },
  {
  symbol: "HCAP",
  name: "Harvest Capital Credit Corporation",
  lastSale: "3.25",
  marketCap: "$19.37M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hcap"
  },
  {
  symbol: "HCAPZ",
  name: "Harvest Capital Credit Corporation",
  lastSale: "24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hcapz"
  },
  {
  symbol: "HAS",
  name: "Hasbro, Inc.",
  lastSale: "85.1",
  marketCap: "$11.66B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/has"
  },
  {
  symbol: "HA",
  name: "Hawaiian Holdings, Inc.",
  lastSale: "14.67",
  marketCap: "$674.78M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ha"
  },
  {
  symbol: "HWKN",
  name: "Hawkins, Inc.",
  lastSale: "46.91",
  marketCap: "$500.56M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/hwkn"
  },
  {
  symbol: "HWBK",
  name: "Hawthorn Bancshares, Inc.",
  lastSale: "19.06",
  marketCap: "$123.62M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hwbk"
  },
  {
  symbol: "HYAC",
  name: "Haymaker Acquisition Corp. II",
  lastSale: "10.03",
  marketCap: "$501.5M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hyac"
  },
  {
  symbol: "HYACU",
  name: "Haymaker Acquisition Corp. II",
  lastSale: "10.31",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hyacu"
  },
  {
  symbol: "HYACW",
  name: "Haymaker Acquisition Corp. II",
  lastSale: "1",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hyacw"
  },
  {
  symbol: "HAYN",
  name: "Haynes International, Inc.",
  lastSale: "16.64",
  marketCap: "$208.95M",
  ipoYear: "2007",
  sector: "Capital Goods",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/hayn"
  },
  {
  symbol: "HBT",
  name: "HBT Financial, Inc.",
  lastSale: "12.71",
  marketCap: "$348.98M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbt"
  },
  {
  symbol: "HDS",
  name: "HD Supply Holdings, Inc.",
  lastSale: "40.38",
  marketCap: "$6.55B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Office Equipment/Supplies/Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hds"
  },
  {
  symbol: "HHR",
  name: "HeadHunter Group PLC",
  lastSale: "23.12",
  marketCap: "$1.16B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hhr"
  },
  {
  symbol: "HCAT",
  name: "Health Catalyst, Inc",
  lastSale: "35.03",
  marketCap: "$1.39B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/hcat"
  },
  {
  symbol: "HSAQ",
  name: "Health Sciences Acquisitions Corporation 2",
  lastSale: "11.05",
  marketCap: "$197.15M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hsaq"
  },
  {
  symbol: "HCCO",
  name: "Healthcare Merger Corp.",
  lastSale: "10.06",
  marketCap: "$321.42M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hcco"
  },
  {
  symbol: "HCCOU",
  name: "Healthcare Merger Corp.",
  lastSale: "10.6",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hccou"
  },
  {
  symbol: "HCCOW",
  name: "Healthcare Merger Corp.",
  lastSale: "1.6",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hccow"
  },
  {
  symbol: "HCSG",
  name: "Healthcare Services Group, Inc.",
  lastSale: "22.69",
  marketCap: "$1.69B",
  ipoYear: "1983",
  sector: "Health Care",
  industry: "Hospital/Nursing Management",
  summaryQuote: "https://old.nasdaq.com/symbol/hcsg"
  },
  {
  symbol: "HTIA",
  name: "Healthcare Trust, Inc.",
  lastSale: "21.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/htia"
  },
  {
  symbol: "HQY",
  name: "HealthEquity, Inc.",
  lastSale: "55.02",
  marketCap: "$4.23B",
  ipoYear: "2014",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hqy"
  },
  {
  symbol: "HSTM",
  name: "HealthStream, Inc.",
  lastSale: "19.34",
  marketCap: "$618.83M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/hstm"
  },
  {
  symbol: "HTLD",
  name: "Heartland Express, Inc.",
  lastSale: "18.65",
  marketCap: "$1.52B",
  ipoYear: "1986",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/htld"
  },
  {
  symbol: "HTLF",
  name: "Heartland Financial USA, Inc.",
  lastSale: "33.77",
  marketCap: "$1.25B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/htlf"
  },
  {
  symbol: "HTLFP",
  name: "Heartland Financial USA, Inc.",
  lastSale: "26.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/htlfp"
  },
  {
  symbol: "HTBX",
  name: "Heat Biologics, Inc.",
  lastSale: "1.17",
  marketCap: "$183.67M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/htbx"
  },
  {
  symbol: "HEBT",
  name: "Hebron Technology Co., Ltd.",
  lastSale: "14.6",
  marketCap: "$257.23M",
  ipoYear: "2016",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/hebt"
  },
  {
  symbol: "HSII",
  name: "Heidrick & Struggles International, Inc.",
  lastSale: "23.71",
  marketCap: "$458.6M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hsii"
  },
  {
  symbol: "HELE",
  name: "Helen of Troy Limited",
  lastSale: "205.1",
  marketCap: "$5.2B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/hele"
  },
  {
  symbol: "HLIO",
  name: "Helios Technologies, Inc.",
  lastSale: "43.43",
  marketCap: "$1.39B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/hlio"
  },
  {
  symbol: "HSDT",
  name: "Helius Medical Technologies, Inc.",
  lastSale: "0.4197",
  marketCap: "$18.93M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/hsdt"
  },
  {
  symbol: "HLXA",
  name: "Helix Acquisition Corp.",
  lastSale: "10.26",
  marketCap: "$132.35M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hlxa"
  },
  {
  symbol: "HMTV",
  name: "Hemisphere Media Group, Inc.",
  lastSale: "8.61",
  marketCap: "$344.07M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hmtv"
  },
  {
  symbol: "HNNA",
  name: "Hennessy Advisors, Inc.",
  lastSale: "8.39",
  marketCap: "$60.94M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/hnna"
  },
  {
  symbol: "HCAC",
  name: "Hennessy Capital Acquisition Corp. IV",
  lastSale: "10.31",
  marketCap: "$384.64M",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/hcac"
  },
  {
  symbol: "HCACU",
  name: "Hennessy Capital Acquisition Corp. IV",
  lastSale: "11.35",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/hcacu"
  },
  {
  symbol: "HCACW",
  name: "Hennessy Capital Acquisition Corp. IV",
  lastSale: "1.42",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/hcacw"
  },
  {
  symbol: "HSIC",
  name: "Henry Schein, Inc.",
  lastSale: "65.61",
  marketCap: "$9.37B",
  ipoYear: "1995",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/hsic"
  },
  {
  symbol: "HEPA",
  name: "Hepion Pharmaceuticals, Inc.",
  lastSale: "3.38",
  marketCap: "$30.51M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hepa"
  },
  {
  symbol: "HTBK",
  name: "Heritage Commerce Corp",
  lastSale: "7.24",
  marketCap: "$433.5M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/htbk"
  },
  {
  symbol: "HFWA",
  name: "Heritage Financial Corporation",
  lastSale: "21.16",
  marketCap: "$759.86M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hfwa"
  },
  {
  symbol: "HGBL",
  name: "Heritage Global Inc.",
  lastSale: "1.71",
  marketCap: "$60.17M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hgbl"
  },
  {
  symbol: "HCCI",
  name: "Heritage-Crystal Clean, Inc.",
  lastSale: "15.66",
  marketCap: "$375.73M",
  ipoYear: "2008",
  sector: "Basic Industries",
  industry: "Miscellaneous",
  summaryQuote: "https://old.nasdaq.com/symbol/hcci"
  },
  {
  symbol: "MLHR",
  name: "Herman Miller, Inc.",
  lastSale: "33.07",
  marketCap: "$1.95B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Office Equipment/Supplies/Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mlhr"
  },
  {
  symbol: "HRTX",
  name: "Heron Therapeutics, Inc. ",
  lastSale: "15.89",
  marketCap: "$1.44B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hrtx"
  },
  {
  symbol: "HSKA",
  name: "Heska Corporation",
  lastSale: "112.25",
  marketCap: "$1.06B",
  ipoYear: "1997",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/hska"
  },
  {
  symbol: "HX",
  name: "Hexindai Inc.",
  lastSale: "2.13",
  marketCap: "$37.25M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hx"
  },
  {
  symbol: "HFEN",
  name: "HF Enterprises Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/hfen"
  },
  {
  symbol: "HFFG",
  name: "HF Foods Group Inc.",
  lastSale: "6.88",
  marketCap: "$358.76M",
  ipoYear: "2017",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/hffg"
  },
  {
  symbol: "HIBB",
  name: "Hibbett Sports, Inc.",
  lastSale: "42.91",
  marketCap: "$709.89M",
  ipoYear: "1996",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/hibb"
  },
  {
  symbol: "CAPA",
  name: "HighCape Capital Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/capa"
  },
  {
  symbol: "CAPAU",
  name: "HighCape Capital Acquisition Corp.",
  lastSale: "10.01",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/capau"
  },
  {
  symbol: "CAPAW",
  name: "HighCape Capital Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/capaw"
  },
  {
  symbol: "SNLN",
  name: "Highland/iBoxx Senior Loan ETF",
  lastSale: "15.67",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/snln"
  },
  {
  symbol: "HPK",
  name: "HighPeak Energy, Inc.",
  lastSale: "4.2001",
  marketCap: "$384.7M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/hpk"
  },
  {
  symbol: "HPKEW",
  name: "HighPeak Energy, Inc.",
  lastSale: "0.52",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/hpkew"
  },
  {
  symbol: "HIHO",
  name: "Highway Holdings Limited",
  lastSale: "3.67",
  marketCap: "$14.58M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/hiho"
  },
  {
  symbol: "HIMX",
  name: "Himax Technologies, Inc.",
  lastSale: "3.7",
  marketCap: "$637.08M",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/himx"
  },
  {
  symbol: "HIFS",
  name: "Hingham Institution for Savings",
  lastSale: "205.44",
  marketCap: "$439M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hifs"
  },
  {
  symbol: "HQI",
  name: "HireQuest, Inc.",
  lastSale: "7.5",
  marketCap: "$101.92M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hqi"
  },
  {
  symbol: "HSTO",
  name: "Histogen Inc.",
  lastSale: "1.82",
  marketCap: "$22.22M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hsto"
  },
  {
  symbol: "HKIT",
  name: "Hitek Global Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/hkit"
  },
  {
  symbol: "HCCH",
  name: "HL Acquisitions Corp.",
  lastSale: "11.21",
  marketCap: "$73.55M",
  ipoYear: "2018",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/hcch"
  },
  {
  symbol: "HCCHR",
  name: "HL Acquisitions Corp.",
  lastSale: "1.05",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/hcchr"
  },
  {
  symbol: "HCCHU",
  name: "HL Acquisitions Corp.",
  lastSale: "14.95",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/hcchu"
  },
  {
  symbol: "HCCHW",
  name: "HL Acquisitions Corp.",
  lastSale: "1.69",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/hcchw"
  },
  {
  symbol: "HMNF",
  name: "HMN Financial, Inc.",
  lastSale: "14.54",
  marketCap: "$70.32M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/hmnf"
  },
  {
  symbol: "HMSY",
  name: "HMS Holdings Corp",
  lastSale: "27.34",
  marketCap: "$2.42B",
  ipoYear: "1992",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hmsy"
  },
  {
  symbol: "HOL",
  name: "Holicity Inc.",
  lastSale: "9.8",
  marketCap: "$371.48M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hol"
  },
  {
  symbol: "HOLUU",
  name: "Holicity Inc.",
  lastSale: "10.08",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/holuu"
  },
  {
  symbol: "HOLUW",
  name: "Holicity Inc.",
  lastSale: "0.9616",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/holuw"
  },
  {
  symbol: "HOLI",
  name: "Hollysys Automation Technologies, Ltd.",
  lastSale: "11.29",
  marketCap: "$683.46M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/holi"
  },
  {
  symbol: "HOLX",
  name: "Hologic, Inc.",
  lastSale: "70.92",
  marketCap: "$18.37B",
  ipoYear: "1990",
  sector: "Health Care",
  industry: "Medical Electronics",
  summaryQuote: "https://old.nasdaq.com/symbol/holx"
  },
  {
  symbol: "HBCP",
  name: "Home Bancorp, Inc.",
  lastSale: "25.91",
  marketCap: "$232.04M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbcp"
  },
  {
  symbol: "HOMB",
  name: "Home BancShares, Inc.",
  lastSale: "16.45",
  marketCap: "$2.72B",
  ipoYear: "2006",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/homb"
  },
  {
  symbol: "HFBL",
  name: "Home Federal Bancorp, Inc. of Louisiana",
  lastSale: "24.13",
  marketCap: "$41.4M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/hfbl"
  },
  {
  symbol: "HMST",
  name: "HomeStreet, Inc.",
  lastSale: "30.99",
  marketCap: "$703.7M",
  ipoYear: "2012",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hmst"
  },
  {
  symbol: "HTBI",
  name: "HomeTrust Bancshares, Inc.",
  lastSale: "15.46",
  marketCap: "$263.14M",
  ipoYear: "2012",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/htbi"
  },
  {
  symbol: "FIXX",
  name: "Homology Medicines, Inc.",
  lastSale: "11.18",
  marketCap: "$505.54M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/fixx"
  },
  {
  symbol: "HOFT",
  name: "Hooker Furniture Corporation",
  lastSale: "29.46",
  marketCap: "$350.28M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/hoft"
  },
  {
  symbol: "HOOK",
  name: "HOOKIPA Pharma Inc.",
  lastSale: "9.55",
  marketCap: "$245M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hook"
  },
  {
  symbol: "HOPE",
  name: "Hope Bancorp, Inc.",
  lastSale: "8.17",
  marketCap: "$1.01B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hope"
  },
  {
  symbol: "HBNC",
  name: "Horizon Bancorp, Inc.",
  lastSale: "12.04",
  marketCap: "$528.25M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbnc"
  },
  {
  symbol: "HRZN",
  name: "Horizon Technology Finance Corporation",
  lastSale: "11.83",
  marketCap: "$204.58M",
  ipoYear: "2010",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hrzn"
  },
  {
  symbol: "HZNP",
  name: "Horizon Therapeutics Public Limited Company",
  lastSale: "78.15",
  marketCap: "$17.22B",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hznp"
  },
  {
  symbol: "TWNK",
  name: "Hostess Brands, Inc.",
  lastSale: "13.16",
  marketCap: "$1.72B",
  ipoYear: "2015",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/twnk"
  },
  {
  symbol: "TWNKW",
  name: "Hostess Brands, Inc.",
  lastSale: "1.11",
  marketCap: "n/a",
  ipoYear: "2015",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/twnkw"
  },
  {
  symbol: "HOTH",
  name: "Hoth Therapeutics, Inc.",
  lastSale: "1.77",
  marketCap: "$23.78M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hoth"
  },
  {
  symbol: "HMHC",
  name: "Houghton Mifflin Harcourt Company",
  lastSale: "2.84",
  marketCap: "$357.36M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Books",
  summaryQuote: "https://old.nasdaq.com/symbol/hmhc"
  },
  {
  symbol: "HWCC",
  name: "Houston Wire & Cable Company",
  lastSale: "2.8",
  marketCap: "$46.35M",
  ipoYear: "2006",
  sector: "Consumer Non-Durables",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/hwcc"
  },
  {
  symbol: "HOVNP",
  name: "Hovnanian Enterprises Inc",
  lastSale: "7.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/hovnp"
  },
  {
  symbol: "HBMD",
  name: "Howard Bancorp, Inc.",
  lastSale: "9.76",
  marketCap: "$182.92M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbmd"
  },
  {
  symbol: "HTGM",
  name: "HTG Molecular Diagnostics, Inc.",
  lastSale: "0.3137",
  marketCap: "$22.17M",
  ipoYear: "2015",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/htgm"
  },
  {
  symbol: "HTHT",
  name: "Huazhu Group Limited",
  lastSale: "41.47",
  marketCap: "$13.16B",
  ipoYear: "2010",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/htht"
  },
  {
  symbol: "HUBG",
  name: "Hub Group, Inc.",
  lastSale: "51.26",
  marketCap: "$1.75B",
  ipoYear: "1996",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/hubg"
  },
  {
  symbol: "HUSN",
  name: "Hudson Capital Inc.",
  lastSale: "0.611",
  marketCap: "$19.57M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/husn"
  },
  {
  symbol: "HEC",
  name: "Hudson Executive Investment Corp.",
  lastSale: "9.79",
  marketCap: "$506.63M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hec"
  },
  {
  symbol: "HECCU",
  name: "Hudson Executive Investment Corp.",
  lastSale: "10.195",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/heccu"
  },
  {
  symbol: "HECCW",
  name: "Hudson Executive Investment Corp.",
  lastSale: "0.8799",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/heccw"
  },
  {
  symbol: "HSON",
  name: "Hudson Global, Inc.",
  lastSale: "10.18",
  marketCap: "$27.33M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hson"
  },
  {
  symbol: "HDSN",
  name: "Hudson Technologies, Inc.",
  lastSale: "1.08",
  marketCap: "$46.08M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/hdsn"
  },
  {
  symbol: "HUIZ",
  name: "Huize Holding Limited",
  lastSale: "7.7",
  marketCap: "$400.33M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/huiz"
  },
  {
  symbol: "HGEN",
  name: "Humanigen, Inc.",
  lastSale: "10.89",
  marketCap: "$559.61M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hgen"
  },
  {
  symbol: "HBAN",
  name: "Huntington Bancshares Incorporated",
  lastSale: "9.94",
  marketCap: "$10.11B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hban"
  },
  {
  symbol: "HBANN",
  name: "Huntington Bancshares Incorporated",
  lastSale: "26.49",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbann"
  },
  {
  symbol: "HBANO",
  name: "Huntington Bancshares Incorporated",
  lastSale: "25.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hbano"
  },
  {
  symbol: "HURC",
  name: "Hurco Companies, Inc.",
  lastSale: "29.79",
  marketCap: "$195.58M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/hurc"
  },
  {
  symbol: "HURN",
  name: "Huron Consulting Group Inc.",
  lastSale: "40.75",
  marketCap: "$932.1M",
  ipoYear: "2004",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hurn"
  },
  {
  symbol: "HCM",
  name: "Hutchison China MediTech Limited",
  lastSale: "30",
  marketCap: "$4.26B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/hcm"
  },
  {
  symbol: "HBP",
  name: "Huttig Building Products, Inc.",
  lastSale: "3.3",
  marketCap: "$88.75M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/hbp"
  },
  {
  symbol: "HVBC",
  name: "HV Bancorp, Inc.",
  lastSale: "13.02",
  marketCap: "$29.1M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/hvbc"
  },
  {
  symbol: "HYMC",
  name: "Hycroft Mining Holding Corporation",
  lastSale: "8.04",
  marketCap: "$403.29M",
  ipoYear: "2018",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/hymc"
  },
  {
  symbol: "HYMCW",
  name: "Hycroft Mining Holding Corporation",
  lastSale: "1.92",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/hymcw"
  },
  {
  symbol: "HYMCZ",
  name: "Hycroft Mining Holding Corporation",
  lastSale: "0.35",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/hymcz"
  },
  {
  symbol: "HYGO",
  name: "Hygo Energy Transition Ltd.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Oil/Gas Transmission",
  summaryQuote: "https://old.nasdaq.com/symbol/hygo"
  },
  {
  symbol: "HYRE",
  name: "HyreCar Inc.",
  lastSale: "3.7",
  marketCap: "$65.46M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Rental/Leasing Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/hyre"
  },
  {
  symbol: "IIIV",
  name: "i3 Verticals, Inc.",
  lastSale: "23.07",
  marketCap: "$709.43M",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/iiiv"
  },
  {
  symbol: "IAC",
  name: "IAC/InterActiveCorp",
  lastSale: "127.47",
  marketCap: "$10.88B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/iac"
  },
  {
  symbol: "IBEX",
  name: "IBEX Limited",
  lastSale: "16.02",
  marketCap: "$294.58M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ibex"
  },
  {
  symbol: "ICAD",
  name: "icad inc.",
  lastSale: "10.15",
  marketCap: "$232.44M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/icad"
  },
  {
  symbol: "IEP",
  name: "Icahn Enterprises L.P.",
  lastSale: "49.95",
  marketCap: "$11.13B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/iep"
  },
  {
  symbol: "ICCH",
  name: "ICC Holdings, Inc.",
  lastSale: "12.57",
  marketCap: "$41.45M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/icch"
  },
  {
  symbol: "ICFI",
  name: "ICF International, Inc.",
  lastSale: "67.71",
  marketCap: "$1.28B",
  ipoYear: "2006",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/icfi"
  },
  {
  symbol: "ICHR",
  name: "Ichor Holdings",
  lastSale: "23.77",
  marketCap: "$545.51M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/ichr"
  },
  {
  symbol: "ICLK",
  name: "iClick Interactive Asia Group Limited",
  lastSale: "8.42",
  marketCap: "$760.93M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/iclk"
  },
  {
  symbol: "ICLR",
  name: "ICON plc",
  lastSale: "187.63",
  marketCap: "$9.9B",
  ipoYear: "1998",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/iclr"
  },
  {
  symbol: "ICON",
  name: "Iconix Brand Group, Inc.",
  lastSale: "0.6917",
  marketCap: "$8.2M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Shoe Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/icon"
  },
  {
  symbol: "ICUI",
  name: "ICU Medical, Inc.",
  lastSale: "189.85",
  marketCap: "$3.98B",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/icui"
  },
  {
  symbol: "IPWR",
  name: "Ideal Power Inc.",
  lastSale: "5.66",
  marketCap: "$16.41M",
  ipoYear: "2013",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ipwr"
  },
  {
  symbol: "IDEX",
  name: "Ideanomics, Inc.",
  lastSale: "0.883",
  marketCap: "$209.54M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/idex"
  },
  {
  symbol: "IDYA",
  name: "IDEAYA Biosciences, Inc.",
  lastSale: "12.46",
  marketCap: "$361.69M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/idya"
  },
  {
  symbol: "INVE",
  name: "Identiv, Inc.",
  lastSale: "6.35",
  marketCap: "$113.62M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/inve"
  },
  {
  symbol: "IDRA",
  name: "Idera Pharmaceuticals, Inc.",
  lastSale: "2.56",
  marketCap: "$90.11M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/idra"
  },
  {
  symbol: "IDXX",
  name: "IDEXX Laboratories, Inc.",
  lastSale: "443.16",
  marketCap: "$37.69B",
  ipoYear: "1991",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/idxx"
  },
  {
  symbol: "IEC",
  name: "IEC Electronics Corp.",
  lastSale: "9.75",
  marketCap: "$102.89M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/iec"
  },
  {
  symbol: "IESC",
  name: "IES Holdings, Inc.",
  lastSale: "33.31",
  marketCap: "$701.13M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/iesc"
  },
  {
  symbol: "IROQ",
  name: "IF Bancorp, Inc.",
  lastSale: "16.84",
  marketCap: "$54.57M",
  ipoYear: "2011",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/iroq"
  },
  {
  symbol: "IFMK",
  name: "iFresh Inc.",
  lastSale: "0.8153",
  marketCap: "$24.65M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/ifmk"
  },
  {
  symbol: "IGACU",
  name: "IG Acquisition Corp.",
  lastSale: "9.92",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/igacu"
  },
  {
  symbol: "IGMS",
  name: "IGM Biosciences, Inc.",
  lastSale: "60.37",
  marketCap: "$1.85B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/igms"
  },
  {
  symbol: "IHRT",
  name: "iHeartMedia, Inc.",
  lastSale: "8.68",
  marketCap: "$600.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/ihrt"
  },
  {
  symbol: "INFO",
  name: "IHS Markit Ltd.",
  lastSale: "81.29",
  marketCap: "$32.38B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/info"
  },
  {
  symbol: "IIVI",
  name: "II-VI Incorporated",
  lastSale: "46.73",
  marketCap: "$4.85B",
  ipoYear: "1987",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/iivi"
  },
  {
  symbol: "IIVIP",
  name: "II-VI Incorporated",
  lastSale: "211.53",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/iivip"
  },
  {
  symbol: "IKNX",
  name: "Ikonics Corporation",
  lastSale: "4.16",
  marketCap: "$8.22M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/iknx"
  },
  {
  symbol: "ILMN",
  name: "Illumina, Inc.",
  lastSale: "321.74",
  marketCap: "$47.09B",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ilmn"
  },
  {
  symbol: "IMAB",
  name: "I-MAB",
  lastSale: "41.16",
  marketCap: "$2.9B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imab"
  },
  {
  symbol: "IMAC",
  name: "IMAC Holdings, Inc.",
  lastSale: "0.79",
  marketCap: "$9.35M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/imac"
  },
  {
  symbol: "IMACW",
  name: "IMAC Holdings, Inc.",
  lastSale: "0.1499",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/imacw"
  },
  {
  symbol: "ISNS",
  name: "Image Sensing Systems, Inc.",
  lastSale: "3.6",
  marketCap: "$19.22M",
  ipoYear: "1995",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/isns"
  },
  {
  symbol: "IMRA",
  name: "IMARA Inc.",
  lastSale: "15.94",
  marketCap: "$276.16M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imra"
  },
  {
  symbol: "IMBI",
  name: "iMedia Brands, Inc.",
  lastSale: "5.185",
  marketCap: "$67.49M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/imbi"
  },
  {
  symbol: "IMTX",
  name: "Immatics N.V.",
  lastSale: "11.08",
  marketCap: "$697.03M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/imtx"
  },
  {
  symbol: "IMTXW",
  name: "Immatics N.V.",
  lastSale: "2.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/imtxw"
  },
  {
  symbol: "IMMR",
  name: "Immersion Corporation",
  lastSale: "6.63",
  marketCap: "$178.31M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/immr"
  },
  {
  symbol: "ICCC",
  name: "ImmuCell Corporation",
  lastSale: "5.3868",
  marketCap: "$38.85M",
  ipoYear: "1987",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/iccc"
  },
  {
  symbol: "IMUX",
  name: "Immunic, Inc. ",
  lastSale: "17.51",
  marketCap: "$362.78M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imux"
  },
  {
  symbol: "IMGN",
  name: "ImmunoGen, Inc.",
  lastSale: "5.51",
  marketCap: "$1.03B",
  ipoYear: "1989",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imgn"
  },
  {
  symbol: "IMNM",
  name: "Immunome, Inc.",
  lastSale: "12.5",
  marketCap: "$125.41M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imnm"
  },
  {
  symbol: "IMVT",
  name: "Immunovant, Inc. ",
  lastSale: "42.93",
  marketCap: "$3.51B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/imvt"
  },
  {
  symbol: "IMRN",
  name: "Immuron Limited",
  lastSale: "7.21",
  marketCap: "$39.83M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imrn"
  },
  {
  symbol: "IMRNW",
  name: "Immuron Limited",
  lastSale: "1.36",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imrnw"
  },
  {
  symbol: "IMMP",
  name: "Immutep Limited",
  lastSale: "1.76",
  marketCap: "$86.74M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/immp"
  },
  {
  symbol: "PI",
  name: "Impinj, Inc.",
  lastSale: "29.35",
  marketCap: "$670.8M",
  ipoYear: "2016",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/pi"
  },
  {
  symbol: "IMV",
  name: "IMV Inc.",
  lastSale: "3.32",
  marketCap: "$220.72M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/imv"
  },
  {
  symbol: "NARI",
  name: "Inari Medical, Inc.",
  lastSale: "63.9",
  marketCap: "$3.1B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nari"
  },
  {
  symbol: "INCY",
  name: "Incyte Corporation",
  lastSale: "88.35",
  marketCap: "$19.32B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/incy"
  },
  {
  symbol: "INDB",
  name: "Independent Bank Corp.",
  lastSale: "58.17",
  marketCap: "$1.92B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/indb"
  },
  {
  symbol: "IBCP",
  name: "Independent Bank Corporation",
  lastSale: "14.61",
  marketCap: "$319.68M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ibcp"
  },
  {
  symbol: "IBTX",
  name: "Independent Bank Group, Inc",
  lastSale: "51",
  marketCap: "$2.2B",
  ipoYear: "2013",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtx"
  },
  {
  symbol: "ILPT",
  name: "Industrial Logistics Properties Trust",
  lastSale: "19.99",
  marketCap: "$1.3B",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/ilpt"
  },
  {
  symbol: "ITACU",
  name: "Industrial Tech Acquisitions, Inc.",
  lastSale: "9.96",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/itacu"
  },
  {
  symbol: "INFN",
  name: "Infinera Corporation",
  lastSale: "6.66",
  marketCap: "$1.25B",
  ipoYear: "2007",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/infn"
  },
  {
  symbol: "INFI",
  name: "Infinity Pharmaceuticals, Inc.",
  lastSale: "1.12",
  marketCap: "$65.94M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/infi"
  },
  {
  symbol: "IFRX",
  name: "InflaRx N.V.",
  lastSale: "4.23",
  marketCap: "$110.43M",
  ipoYear: "2017",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ifrx"
  },
  {
  symbol: "III",
  name: "Information Services Group, Inc.",
  lastSale: "2.06",
  marketCap: "$99.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/iii"
  },
  {
  symbol: "IEA",
  name: "Infrastructure and Energy Alternatives, Inc.",
  lastSale: "6.87",
  marketCap: "$157.65M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/iea"
  },
  {
  symbol: "IEAWW",
  name: "Infrastructure and Energy Alternatives, Inc.",
  lastSale: "0.5475",
  marketCap: "n/a",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ieaww"
  },
  {
  symbol: "IMKTA",
  name: "Ingles Markets, Incorporated",
  lastSale: "36.09",
  marketCap: "$731.18M",
  ipoYear: "1987",
  sector: "Consumer Services",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/imkta"
  },
  {
  symbol: "INBX",
  name: "Inhibrx, Inc.",
  lastSale: "21.87",
  marketCap: "$824.71M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/inbx"
  },
  {
  symbol: "INMD",
  name: "INMODE LTD.",
  lastSale: "38.93",
  marketCap: "$1.28B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/inmd"
  },
  {
  symbol: "INMB",
  name: "INmune Bio Inc.",
  lastSale: "8",
  marketCap: "$107.58M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/inmb"
  },
  {
  symbol: "IPHA",
  name: "Innate Pharma S.A.",
  lastSale: "4.16",
  marketCap: "$328.48M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ipha"
  },
  {
  symbol: "INOD",
  name: "Innodata Inc.",
  lastSale: "2.48",
  marketCap: "$60.66M",
  ipoYear: "1993",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inod"
  },
  {
  symbol: "IOSP",
  name: "Innospec Inc.",
  lastSale: "65.21",
  marketCap: "$1.6B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/iosp"
  },
  {
  symbol: "ISSC",
  name: "Innovative Solutions and Support, Inc.",
  lastSale: "6.07",
  marketCap: "$103.1M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/issc"
  },
  {
  symbol: "INVA",
  name: "Innoviva, Inc.",
  lastSale: "9.63",
  marketCap: "$976.41M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/inva"
  },
  {
  symbol: "INGN",
  name: "Inogen, Inc",
  lastSale: "28.83",
  marketCap: "$636.16M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/ingn"
  },
  {
  symbol: "INOV",
  name: "Inovalon Holdings, Inc.",
  lastSale: "25.99",
  marketCap: "$4.04B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inov"
  },
  {
  symbol: "INO",
  name: "Inovio Pharmaceuticals, Inc.",
  lastSale: "11.11",
  marketCap: "$1.86B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ino"
  },
  {
  symbol: "INZY",
  name: "Inozyme Pharma, Inc.",
  lastSale: "23.36",
  marketCap: "$545.8M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/inzy"
  },
  {
  symbol: "IPHI",
  name: "Inphi Corporation",
  lastSale: "113.88",
  marketCap: "$5.91B",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/iphi"
  },
  {
  symbol: "INPX",
  name: "Inpixon ",
  lastSale: "1.02",
  marketCap: "$43.1M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inpx"
  },
  {
  symbol: "INSG",
  name: "Inseego Corp.",
  lastSale: "9.31",
  marketCap: "$904.56M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/insg"
  },
  {
  symbol: "NSIT",
  name: "Insight Enterprises, Inc.",
  lastSale: "57.81",
  marketCap: "$2.03B",
  ipoYear: "1995",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/nsit"
  },
  {
  symbol: "ISIG",
  name: "Insignia Systems, Inc.",
  lastSale: "1.28",
  marketCap: "$15.62M",
  ipoYear: "1991",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/isig"
  },
  {
  symbol: "INSM",
  name: "Insmed, Inc.",
  lastSale: "36.22",
  marketCap: "$3.68B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/insm"
  },
  {
  symbol: "INSE",
  name: "Inspired Entertainment, Inc.",
  lastSale: "3.84",
  marketCap: "$88.43M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/inse"
  },
  {
  symbol: "IIIN",
  name: "Insteel Industries, Inc.",
  lastSale: "21.06",
  marketCap: "$405.63M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/iiin"
  },
  {
  symbol: "INAQ",
  name: "INSU Acquisition Corp. II",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inaq"
  },
  {
  symbol: "INAQU",
  name: "INSU Acquisition Corp. II",
  lastSale: "10.1",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inaqu"
  },
  {
  symbol: "INAQW",
  name: "INSU Acquisition Corp. II",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/inaqw"
  },
  {
  symbol: "PODD",
  name: "Insulet Corporation",
  lastSale: "246.04",
  marketCap: "$16.15B",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/podd"
  },
  {
  symbol: "NTEC",
  name: "Intec Pharma Ltd.",
  lastSale: "0.2089",
  marketCap: "$16.5M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ntec"
  },
  {
  symbol: "IART",
  name: "Integra LifeSciences Holdings Corporation",
  lastSale: "46.55",
  marketCap: "$3.92B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/iart"
  },
  {
  symbol: "IMTE",
  name: "Integrated Media Technology Limited",
  lastSale: "4.12",
  marketCap: "$15.09M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/imte"
  },
  {
  symbol: "INTC",
  name: "Intel Corporation",
  lastSale: "45.64",
  marketCap: "$187.03B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/intc"
  },
  {
  symbol: "NTLA",
  name: "Intellia Therapeutics, Inc.",
  lastSale: "25.44",
  marketCap: "$1.49B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/ntla"
  },
  {
  symbol: "IDN",
  name: "Intellicheck, Inc.",
  lastSale: "8.13",
  marketCap: "$149.03M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/idn"
  },
  {
  symbol: "IPAR",
  name: "Inter Parfums, Inc.",
  lastSale: "39.34",
  marketCap: "$1.24B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Package Goods/Cosmetics",
  summaryQuote: "https://old.nasdaq.com/symbol/ipar"
  },
  {
  symbol: "IBKR",
  name: "Interactive Brokers Group, Inc.",
  lastSale: "48.03",
  marketCap: "$20.02B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/ibkr"
  },
  {
  symbol: "ICPT",
  name: "Intercept Pharmaceuticals, Inc.",
  lastSale: "28.92",
  marketCap: "$953.8M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/icpt"
  },
  {
  symbol: "IDCC",
  name: "InterDigital, Inc.",
  lastSale: "57.67",
  marketCap: "$1.78B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/idcc"
  },
  {
  symbol: "TILE",
  name: "Interface, Inc.",
  lastSale: "6.45",
  marketCap: "$377.63M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/tile"
  },
  {
  symbol: "IBOC",
  name: "International Bancshares Corporation",
  lastSale: "27.41",
  marketCap: "$1.73B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/iboc"
  },
  {
  symbol: "IGIC",
  name: "International General Insurance Holdings Ltd.",
  lastSale: "7.078",
  marketCap: "$342.85M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/igic"
  },
  {
  symbol: "IGICW",
  name: "International General Insurance Holdings Ltd.",
  lastSale: "0.65",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/igicw"
  },
  {
  symbol: "IMXI",
  name: "International Money Express, Inc.",
  lastSale: "14.49",
  marketCap: "$551.48M",
  ipoYear: "2017",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/imxi"
  },
  {
  symbol: "IDXG",
  name: "Interpace Biosciences, Inc.",
  lastSale: "3.68",
  marketCap: "$14.87M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/idxg"
  },
  {
  symbol: "XENT",
  name: "Intersect ENT, Inc.",
  lastSale: "15.97",
  marketCap: "$522.25M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/xent"
  },
  {
  symbol: "IPLDP",
  name: "Interstate Power and Light Company",
  lastSale: "25.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/ipldp"
  },
  {
  symbol: "IVAC",
  name: "Intevac, Inc.",
  lastSale: "5.3",
  marketCap: "$125.27M",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ivac"
  },
  {
  symbol: "ITCI",
  name: "Intra-Cellular Therapies Inc.",
  lastSale: "24.02",
  marketCap: "$1.9B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/itci"
  },
  {
  symbol: "IIN",
  name: "IntriCon Corporation",
  lastSale: "12.59",
  marketCap: "$112.48M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/iin"
  },
  {
  symbol: "INTZ",
  name: "Intrusion Inc.",
  lastSale: "10.41",
  marketCap: "$176.23M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/intz"
  },
  {
  symbol: "INTU",
  name: "Intuit Inc.",
  lastSale: "330.27",
  marketCap: "$86.47B",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/intu"
  },
  {
  symbol: "ISRG",
  name: "Intuitive Surgical, Inc.",
  lastSale: "720.9",
  marketCap: "$84.75B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/isrg"
  },
  {
  symbol: "IVA",
  name: "Inventiva S.A.",
  lastSale: "12.27",
  marketCap: "$470.91M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/iva"
  },
  {
  symbol: "PLW",
  name: "Invesco 1-30 Laddered Treasury ETF",
  lastSale: "38.87",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/plw"
  },
  {
  symbol: "ADRE",
  name: "Invesco BLDRS Emerging Markets 50 ADR Index Fund",
  lastSale: "50.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/adre"
  },
  {
  symbol: "BSCK",
  name: "Invesco BulletShares 2020 Corporate Bond ETF",
  lastSale: "21.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsck"
  },
  {
  symbol: "BSJK",
  name: "Invesco BulletShares 2020 High Yield Corporate Bond ETF",
  lastSale: "23.37",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjk"
  },
  {
  symbol: "BSCL",
  name: "Invesco BulletShares 2021 Corporate Bond ETF",
  lastSale: "21.3",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscl"
  },
  {
  symbol: "BSJL",
  name: "Invesco BulletShares 2021 High Yield Corporate Bond ETF",
  lastSale: "22.99",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjl"
  },
  {
  symbol: "BSML",
  name: "Invesco BulletShares 2021 Municipal Bond ETF",
  lastSale: "25.33",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsml"
  },
  {
  symbol: "BSAE",
  name: "Invesco BulletShares 2021 USD Emerging Markets Debt ETF",
  lastSale: "25.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsae"
  },
  {
  symbol: "BSCM",
  name: "Invesco BulletShares 2022 Corporate Bond ETF",
  lastSale: "21.83",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscm"
  },
  {
  symbol: "BSJM",
  name: "Invesco BulletShares 2022 High Yield Corporate Bond ETF",
  lastSale: "22.93",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjm"
  },
  {
  symbol: "BSMM",
  name: "Invesco BulletShares 2022 Municipal Bond ETF",
  lastSale: "25.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmm"
  },
  {
  symbol: "BSBE",
  name: "Invesco BulletShares 2022 USD Emerging Markets Debt ETF",
  lastSale: "25.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsbe"
  },
  {
  symbol: "BSCN",
  name: "Invesco BulletShares 2023 Corporate Bond ETF",
  lastSale: "21.84",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscn"
  },
  {
  symbol: "BSJN",
  name: "Invesco BulletShares 2023 High Yield Corporate Bond ETF",
  lastSale: "24.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjn"
  },
  {
  symbol: "BSMN",
  name: "Invesco BulletShares 2023 Municipal Bond ETF",
  lastSale: "25.54",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmn"
  },
  {
  symbol: "BSCE",
  name: "Invesco BulletShares 2023 USD Emerging Markets Debt ETF",
  lastSale: "26.06",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsce"
  },
  {
  symbol: "BSCO",
  name: "Invesco BulletShares 2024 Corporate Bond ETF",
  lastSale: "22.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsco"
  },
  {
  symbol: "BSJO",
  name: "Invesco BulletShares 2024 High Yield Corporate Bond ETF",
  lastSale: "24.17",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjo"
  },
  {
  symbol: "BSMO",
  name: "Invesco BulletShares 2024 Municipal Bond ETF",
  lastSale: "25.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmo"
  },
  {
  symbol: "BSDE",
  name: "Invesco BulletShares 2024 USD Emerging Markets Debt ETF",
  lastSale: "25.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsde"
  },
  {
  symbol: "BSCP",
  name: "Invesco BulletShares 2025 Corporate Bond ETF",
  lastSale: "22.44",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscp"
  },
  {
  symbol: "BSJP",
  name: "Invesco BulletShares 2025 High Yield Corporate Bond ETF",
  lastSale: "23.62",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjp"
  },
  {
  symbol: "BSMP",
  name: "Invesco BulletShares 2025 Municipal Bond ETF",
  lastSale: "25.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmp"
  },
  {
  symbol: "BSCQ",
  name: "Invesco BulletShares 2026 Corporate Bond ETF",
  lastSale: "21.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscq"
  },
  {
  symbol: "BSJQ",
  name: "Invesco BulletShares 2026 High Yield Corporate Bond ETF",
  lastSale: "24.63",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjq"
  },
  {
  symbol: "BSMQ",
  name: "Invesco BulletShares 2026 Municipal Bond ETF",
  lastSale: "25.42",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmq"
  },
  {
  symbol: "BSCR",
  name: "Invesco BulletShares 2027 Corporate Bond ETF",
  lastSale: "22.07",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscr"
  },
  {
  symbol: "BSJR",
  name: "Invesco BulletShares 2027 High Yield Corporate Bond ETF",
  lastSale: "24.61",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjr"
  },
  {
  symbol: "BSMR",
  name: "Invesco BulletShares 2027 Municipal Bond ETF",
  lastSale: "25.14",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmr"
  },
  {
  symbol: "BSCS",
  name: "Invesco BulletShares 2028 Corporate Bond ETF",
  lastSale: "23.21",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscs"
  },
  {
  symbol: "BSJS",
  name: "Invesco BulletShares 2028 High Yield Corporate Bond ETF",
  lastSale: "24.76",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsjs"
  },
  {
  symbol: "BSMS",
  name: "Invesco BulletShares 2028 Municipal Bond ETF",
  lastSale: "25.465",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsms"
  },
  {
  symbol: "BSCT",
  name: "Invesco BulletShares 2029 Corporate Bond ETF",
  lastSale: "21.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsct"
  },
  {
  symbol: "BSMT",
  name: "Invesco BulletShares 2029 Municipal Bond ETF",
  lastSale: "25.335",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmt"
  },
  {
  symbol: "BSCU",
  name: "Invesco BulletShares 2030 Corporate Bond ETF",
  lastSale: "19.93",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bscu"
  },
  {
  symbol: "BSMU",
  name: "Invesco BulletShares 2030 Municipal Bond ETF",
  lastSale: "24.73",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bsmu"
  },
  {
  symbol: "PKW",
  name: "Invesco BuyBack Achievers ETF",
  lastSale: "59.91",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pkw"
  },
  {
  symbol: "PFM",
  name: "Invesco Dividend Achievers ETF",
  lastSale: "30.505",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pfm"
  },
  {
  symbol: "PYZ",
  name: "Invesco DWA Basic Materials Momentum ETF",
  lastSale: "58.3618",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pyz"
  },
  {
  symbol: "PEZ",
  name: "Invesco DWA Consumer Cyclicals Momentum ETF",
  lastSale: "64.41",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pez"
  },
  {
  symbol: "PSL",
  name: "Invesco DWA Consumer Staples Momentum ETF",
  lastSale: "79.6854",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psl"
  },
  {
  symbol: "PIZ",
  name: "Invesco DWA Developed Markets Momentum ETF",
  lastSale: "30.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/piz"
  },
  {
  symbol: "PIE",
  name: "Invesco DWA Emerging Markets Momentum ETF",
  lastSale: "20.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pie"
  },
  {
  symbol: "PXI",
  name: "Invesco DWA Energy Momentum ETF",
  lastSale: "12.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pxi"
  },
  {
  symbol: "PFI",
  name: "Invesco DWA Financial Momentum ETF",
  lastSale: "36.9975",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pfi"
  },
  {
  symbol: "PTH",
  name: "Invesco DWA Healthcare Momentum ETF",
  lastSale: "143.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pth"
  },
  {
  symbol: "PRN",
  name: "Invesco DWA Industrials Momentum ETF",
  lastSale: "76.4131",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/prn"
  },
  {
  symbol: "PDP",
  name: "Invesco DWA Momentum ETF",
  lastSale: "78.56",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pdp"
  },
  {
  symbol: "DWAS",
  name: "Invesco DWA SmallCap Momentum ETF",
  lastSale: "62.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwas"
  },
  {
  symbol: "PTF",
  name: "Invesco DWA Technology Momentum ETF",
  lastSale: "116.0884",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ptf"
  },
  {
  symbol: "PUI",
  name: "Invesco DWA Utilities Momentum ETF",
  lastSale: "32.0375",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pui"
  },
  {
  symbol: "IDLB",
  name: "Invesco FTSE International Low Beta Equal Weight ETF",
  lastSale: "27.09",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/idlb"
  },
  {
  symbol: "PRFZ",
  name: "Invesco FTSE RAFI US 1500 Small-Mid ETF",
  lastSale: "123.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/prfz"
  },
  {
  symbol: "PIO",
  name: "Invesco Global Water ETF",
  lastSale: "32.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pio"
  },
  {
  symbol: "PGJ",
  name: "Invesco Golden Dragon China ETF",
  lastSale: "55.2137",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pgj"
  },
  {
  symbol: "PEY",
  name: "Invesco High Yield Equity Dividend Achievers ETF",
  lastSale: "15",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pey"
  },
  {
  symbol: "IPKW",
  name: "Invesco International BuyBack Achievers ETF",
  lastSale: "32.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ipkw"
  },
  {
  symbol: "PID",
  name: "Invesco International Dividend Achievers ETF",
  lastSale: "13.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pid"
  },
  {
  symbol: "KBWB",
  name: "Invesco KBW Bank ETF",
  lastSale: "39.48",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kbwb"
  },
  {
  symbol: "KBWD",
  name: "Invesco KBW High Dividend Yield Financial ETF",
  lastSale: "13.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kbwd"
  },
  {
  symbol: "KBWY",
  name: "Invesco KBW Premium Yield Equity REIT ETF",
  lastSale: "16.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kbwy"
  },
  {
  symbol: "KBWP",
  name: "Invesco KBW Property & Casualty Insurance ETF",
  lastSale: "58.2421",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kbwp"
  },
  {
  symbol: "KBWR",
  name: "Invesco KBW Regional Banking ETF",
  lastSale: "36.1507",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kbwr"
  },
  {
  symbol: "QQQM",
  name: "Invesco NASDAQ 100 ETF",
  lastSale: "116.09",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqqm"
  },
  {
  symbol: "PNQI",
  name: "Invesco Nasdaq Internet ETF",
  lastSale: "218.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pnqi"
  },
  {
  symbol: "QQQJ",
  name: "Invesco NASDAQ Next Gen 100 ETF",
  lastSale: "25.98",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqqj"
  },
  {
  symbol: "PDBC",
  name: "Invesco Optimum Yield Diversified Commodity Strategy No K-1 ET",
  lastSale: "13.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pdbc"
  },
  {
  symbol: "QQQ",
  name: "Invesco QQQ Trust, Series 1",
  lastSale: "282.66",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqq"
  },
  {
  symbol: "ISDX",
  name: "Invesco RAFI Strategic Developed ex-US ETF",
  lastSale: "22.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/isdx"
  },
  {
  symbol: "ISEM",
  name: "Invesco RAFI Strategic Emerging Markets ETF",
  lastSale: "23.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/isem"
  },
  {
  symbol: "IUS",
  name: "Invesco RAFI Strategic US ETF",
  lastSale: "27.1827",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ius"
  },
  {
  symbol: "IUSS",
  name: "Invesco RAFI Strategic US Small Company ETF",
  lastSale: "23.3683",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iuss"
  },
  {
  symbol: "USLB",
  name: "Invesco Russell 1000 Low Beta Equal Weight ETF",
  lastSale: "32.317",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/uslb"
  },
  {
  symbol: "PSCD",
  name: "Invesco S&P SmallCap Consumer Discretionary ETF",
  lastSale: "68.1856",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pscd"
  },
  {
  symbol: "PSCC",
  name: "Invesco S&P SmallCap Consumer Staples ETF",
  lastSale: "79.2239",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pscc"
  },
  {
  symbol: "PSCE",
  name: "Invesco S&P SmallCap Energy ETF",
  lastSale: "3.185",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psce"
  },
  {
  symbol: "PSCF",
  name: "Invesco S&P SmallCap Financials ETF",
  lastSale: "40.6295",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pscf"
  },
  {
  symbol: "PSCH",
  name: "Invesco S&P SmallCap Health Care ETF",
  lastSale: "137.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psch"
  },
  {
  symbol: "PSCI",
  name: "Invesco S&P SmallCap Industrials ETF",
  lastSale: "64.6501",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psci"
  },
  {
  symbol: "PSCT",
  name: "Invesco S&P SmallCap Information Technology ETF",
  lastSale: "92.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psct"
  },
  {
  symbol: "PSCM",
  name: "Invesco S&P SmallCap Materials ETF",
  lastSale: "43.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pscm"
  },
  {
  symbol: "PSCU",
  name: "Invesco S&P SmallCap Utilities & Communication Services ETF",
  lastSale: "45.3702",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pscu"
  },
  {
  symbol: "VRIG",
  name: "Invesco Variable Rate Investment Grade ETF",
  lastSale: "24.885",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vrig"
  },
  {
  symbol: "PHO",
  name: "Invesco Water Resources ETF",
  lastSale: "42.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pho"
  },
  {
  symbol: "ISTR",
  name: "Investar Holding Corporation",
  lastSale: "13.55",
  marketCap: "$146.89M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/istr"
  },
  {
  symbol: "CMFNL",
  name: "Investcorp Credit Management BDC, Inc.",
  lastSale: "23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cmfnl"
  },
  {
  symbol: "ICMB",
  name: "Investcorp Credit Management BDC, Inc.",
  lastSale: "3.12",
  marketCap: "$43.35M",
  ipoYear: "2014",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/icmb"
  },
  {
  symbol: "ISBC",
  name: "Investors Bancorp, Inc.",
  lastSale: "8",
  marketCap: "$2B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/isbc"
  },
  {
  symbol: "ITIC",
  name: "Investors Title Company",
  lastSale: "139.28",
  marketCap: "$263.58M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/itic"
  },
  {
  symbol: "NVIV",
  name: "InVivo Therapeutics Holdings Corp.",
  lastSale: "0.5649",
  marketCap: "$2.76M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nviv"
  },
  {
  symbol: "IONS",
  name: "Ionis Pharmaceuticals, Inc.",
  lastSale: "46.98",
  marketCap: "$6.56B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ions"
  },
  {
  symbol: "IOVA",
  name: "Iovance Biotherapeutics, Inc.",
  lastSale: "36.53",
  marketCap: "$5.35B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/iova"
  },
  {
  symbol: "IPGP",
  name: "IPG Photonics Corporation",
  lastSale: "201.79",
  marketCap: "$10.75B",
  ipoYear: "2006",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/ipgp"
  },
  {
  symbol: "CLRG",
  name: "IQ Chaikin U.S. Large Cap ETF",
  lastSale: "25.7013",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/clrg"
  },
  {
  symbol: "CSML",
  name: "IQ Chaikin U.S. Small Cap ETF",
  lastSale: "23.2823",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/csml"
  },
  {
  symbol: "IQ",
  name: "iQIYI, Inc.",
  lastSale: "23.98",
  marketCap: "$17.59B",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Consumer Electronics/Video Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/iq"
  },
  {
  symbol: "IRMD",
  name: "iRadimed Corporation",
  lastSale: "22.52",
  marketCap: "$275.79M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/irmd"
  },
  {
  symbol: "IRTC",
  name: "iRhythm Technologies, Inc.",
  lastSale: "225.09",
  marketCap: "$6.5B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/irtc"
  },
  {
  symbol: "IRIX",
  name: "IRIDEX Corporation",
  lastSale: "1.945",
  marketCap: "$27.01M",
  ipoYear: "1996",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/irix"
  },
  {
  symbol: "IRDM",
  name: "Iridium Communications Inc",
  lastSale: "26.4",
  marketCap: "$3.52B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/irdm"
  },
  {
  symbol: "IRBT",
  name: "iRobot Corporation",
  lastSale: "85.18",
  marketCap: "$2.39B",
  ipoYear: "2005",
  sector: "Consumer Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/irbt"
  },
  {
  symbol: "IRWD",
  name: "Ironwood Pharmaceuticals, Inc.",
  lastSale: "9.6",
  marketCap: "$1.54B",
  ipoYear: "2010",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/irwd"
  },
  {
  symbol: "IRCP",
  name: "IRSA Propiedades Comerciales S.A.",
  lastSale: "7.6",
  marketCap: "$239.43M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Building operators",
  summaryQuote: "https://old.nasdaq.com/symbol/ircp"
  },
  {
  symbol: "SLQD",
  name: "iShares 0-5 Year Investment Grade Corporate Bond ETF",
  lastSale: "52.13",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/slqd"
  },
  {
  symbol: "ISHG",
  name: "iShares 1-3 Year International Treasury Bond ETF",
  lastSale: "82.285",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ishg"
  },
  {
  symbol: "SHY",
  name: "iShares 1-3 Year Treasury Bond ETF",
  lastSale: "86.42",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/shy"
  },
  {
  symbol: "IGSB",
  name: "iShares 1-5 Year Investment Grade Corporate Bond ETF",
  lastSale: "54.99",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/igsb"
  },
  {
  symbol: "TLT",
  name: "iShares 20+ Year Treasury Bond ETF",
  lastSale: "160.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tlt"
  },
  {
  symbol: "IEI",
  name: "iShares 3-7 Year Treasury Bond ETF",
  lastSale: "133.19",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iei"
  },
  {
  symbol: "IGIB",
  name: "iShares 5-10 Year Investment Grade Corporate Bond ETF",
  lastSale: "61.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/igib"
  },
  {
  symbol: "IEF",
  name: "iShares 7-10 Year Treasury Bond ETF",
  lastSale: "120.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ief"
  },
  {
  symbol: "AIA",
  name: "iShares Asia 50 ETF",
  lastSale: "75.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/aia"
  },
  {
  symbol: "USIG",
  name: "iShares Broad USD Investment Grade Corporate Bond ETF",
  lastSale: "60.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/usig"
  },
  {
  symbol: "COMT",
  name: "iShares Commodities Select Strategy ETF",
  lastSale: "24.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/comt"
  },
  {
  symbol: "ISTB",
  name: "iShares Core 1-5 Year USD Bond ETF",
  lastSale: "51.49",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/istb"
  },
  {
  symbol: "IXUS",
  name: "iShares Core MSCI Total International Stock ETF",
  lastSale: "58.79",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ixus"
  },
  {
  symbol: "IUSG",
  name: "iShares Core S&P U.S. Growth ETF",
  lastSale: "81.0107",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iusg"
  },
  {
  symbol: "IUSV",
  name: "iShares Core S&P U.S. Value ETF",
  lastSale: "54.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iusv"
  },
  {
  symbol: "IUSB",
  name: "iShares Core Total USD Bond Market ETF",
  lastSale: "54.33",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/iusb"
  },
  {
  symbol: "HEWG",
  name: "iShares Currency Hedged MSCI Germany ETF",
  lastSale: "26.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hewg"
  },
  {
  symbol: "HYXF",
  name: "iShares ESG Advanced High Yield Corporate Bond ETF",
  lastSale: "51.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hyxf"
  },
  {
  symbol: "DMXF",
  name: "iShares ESG Advanced MSCI EAFE ETF",
  lastSale: "54.81",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dmxf"
  },
  {
  symbol: "EMXF",
  name: "iShares ESG Advanced MSCI EM ETF",
  lastSale: "36.6615",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/emxf"
  },
  {
  symbol: "USXF",
  name: "iShares ESG Advanced MSCI USA ETF",
  lastSale: "28.2598",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/usxf"
  },
  {
  symbol: "SUSB",
  name: "iShares ESG Aware 1-5 Year USD Corporate Bond ETF",
  lastSale: "26.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/susb"
  },
  {
  symbol: "ESGD",
  name: "iShares ESG Aware MSCI EAFE ETF",
  lastSale: "63.14",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/esgd"
  },
  {
  symbol: "ESGE",
  name: "iShares ESG Aware MSCI EM ETF",
  lastSale: "37.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/esge"
  },
  {
  symbol: "ESGU",
  name: "iShares ESG Aware MSCI USA ETF",
  lastSale: "77.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/esgu"
  },
  {
  symbol: "SUSC",
  name: "iShares ESG Aware USD Corporate Bond ETF",
  lastSale: "27.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/susc"
  },
  {
  symbol: "LDEM",
  name: "iShares ESG MSCI EM Leaders ETF",
  lastSale: "53.585",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ldem"
  },
  {
  symbol: "SUSL",
  name: "iShares ESG MSCI USA Leaders ETF",
  lastSale: "58.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/susl"
  },
  {
  symbol: "XT",
  name: "iShares Exponential Technologies ETF",
  lastSale: "49.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/xt"
  },
  {
  symbol: "FALN",
  name: "iShares Fallen Angels USD Bond ETF",
  lastSale: "27.67",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/faln"
  },
  {
  symbol: "IFGL",
  name: "iShares FTSE EPRA/NAREIT Global Real Estate ex-U.S. Index Fund",
  lastSale: "23.49",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ifgl"
  },
  {
  symbol: "BGRN",
  name: "iShares Global Green Bond ETF",
  lastSale: "56",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bgrn"
  },
  {
  symbol: "IGF",
  name: "iShares Global Infrastructure ETF",
  lastSale: "39.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/igf"
  },
  {
  symbol: "GNMA",
  name: "iShares GNMA Bond ETF",
  lastSale: "50.9851",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gnma"
  },
  {
  symbol: "IBTA",
  name: "iShares iBonds Dec 2021 Term Treasury ETF",
  lastSale: "25.36",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibta"
  },
  {
  symbol: "IBTB",
  name: "iShares iBonds Dec 2022 Term Treasury ETF",
  lastSale: "25.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtb"
  },
  {
  symbol: "IBTD",
  name: "iShares iBonds Dec 2023 Term Treasury ETF",
  lastSale: "25.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtd"
  },
  {
  symbol: "IBTE",
  name: "iShares iBonds Dec 2024 Term Treasury ETF",
  lastSale: "25.955",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibte"
  },
  {
  symbol: "IBTF",
  name: "iShares iBonds Dec 2025 Term Treasury ETF",
  lastSale: "26.12",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtf"
  },
  {
  symbol: "IBTG",
  name: "iShares iBonds Dec 2026 Term Treasury ETF",
  lastSale: "26.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtg"
  },
  {
  symbol: "IBTH",
  name: "iShares iBonds Dec 2027 Term Treasury ETF",
  lastSale: "26.315",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibth"
  },
  {
  symbol: "IBTI",
  name: "iShares iBonds Dec 2028 Term Treasury ETF",
  lastSale: "26.42",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibti"
  },
  {
  symbol: "IBTJ",
  name: "iShares iBonds Dec 2029 Term Treasury ETF",
  lastSale: "26.44",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtj"
  },
  {
  symbol: "IBTK",
  name: "iShares iBonds Dec 2030 Term Treasury ETF",
  lastSale: "24.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibtk"
  },
  {
  symbol: "IGOV",
  name: "iShares International Treasury Bond ETF",
  lastSale: "53.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/igov"
  },
  {
  symbol: "EMB",
  name: "iShares J.P. Morgan USD Emerging Markets Bond ETF",
  lastSale: "111.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/emb"
  },
  {
  symbol: "MBB",
  name: "iShares MBS ETF",
  lastSale: "110.29",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mbb"
  },
  {
  symbol: "JKI",
  name: "iShares Morningstar Mid-Cap ETF",
  lastSale: "135.6207",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/jki"
  },
  {
  symbol: "ACWX",
  name: "iShares MSCI ACWI ex US Index Fund",
  lastSale: "46.38",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/acwx"
  },
  {
  symbol: "ACWI",
  name: "iShares MSCI ACWI Index Fund",
  lastSale: "80.78",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/acwi"
  },
  {
  symbol: "AAXJ",
  name: "iShares MSCI All Country Asia ex Japan Index Fund",
  lastSale: "80.45",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/aaxj"
  },
  {
  symbol: "EWZS",
  name: "iShares MSCI Brazil Small-Cap ETF",
  lastSale: "13.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ewzs"
  },
  {
  symbol: "MCHI",
  name: "iShares MSCI China ETF",
  lastSale: "79.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mchi"
  },
  {
  symbol: "SCZ",
  name: "iShares MSCI EAFE Small-Cap ETF",
  lastSale: "58.66",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/scz"
  },
  {
  symbol: "EEMA",
  name: "iShares MSCI Emerging Markets Asia ETF",
  lastSale: "78.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/eema"
  },
  {
  symbol: "EMXC",
  name: "iShares MSCI Emerging Markets ex China ETF",
  lastSale: "47.42",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/emxc"
  },
  {
  symbol: "EUFN",
  name: "iShares MSCI Europe Financials Sector Index Fund",
  lastSale: "13.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/eufn"
  },
  {
  symbol: "IEUS",
  name: "iShares MSCI Europe Small-Cap ETF",
  lastSale: "50.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ieus"
  },
  {
  symbol: "RING",
  name: "iShares MSCI Global Gold Miners ETF",
  lastSale: "32.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ring"
  },
  {
  symbol: "SDG",
  name: "iShares MSCI Global Impact ETF",
  lastSale: "79.34",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/sdg"
  },
  {
  symbol: "EWJE",
  name: "iShares MSCI Japan Equal Weighted ETF",
  lastSale: "34.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ewje"
  },
  {
  symbol: "EWJV",
  name: "iShares MSCI Japan Value ETF",
  lastSale: "23.18",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ewjv"
  },
  {
  symbol: "ENZL",
  name: "iShares MSCI New Zealand ETF",
  lastSale: "61.2015",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/enzl"
  },
  {
  symbol: "QAT",
  name: "iShares MSCI Qatar ETF",
  lastSale: "17.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qat"
  },
  {
  symbol: "TUR",
  name: "iShares MSCI Turkey ETF",
  lastSale: "18.86",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tur"
  },
  {
  symbol: "UAE",
  name: "iShares MSCI UAE ETF",
  lastSale: "10.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/uae"
  },
  {
  symbol: "IBB",
  name: "iShares Nasdaq Biotechnology Index Fund",
  lastSale: "135.87",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ibb"
  },
  {
  symbol: "SOXX",
  name: "iShares PHLX SOX Semiconductor Sector Index Fund",
  lastSale: "312.17",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/soxx"
  },
  {
  symbol: "PFF",
  name: "iShares Preferred and Income Securities ETF",
  lastSale: "36.77",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pff"
  },
  {
  symbol: "AMCA",
  name: "iShares Russell 1000 Pure U.S. Revenue ETF",
  lastSale: "28.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/amca"
  },
  {
  symbol: "EMIF",
  name: "iShares S&P Emerging Markets Infrastructure Index Fund",
  lastSale: "20.76",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/emif"
  },
  {
  symbol: "ICLN",
  name: "iShares S&P Global Clean Energy Index Fund",
  lastSale: "19.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/icln"
  },
  {
  symbol: "WOOD",
  name: "iShares S&P Global Timber & Forestry Index Fund",
  lastSale: "64.83",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wood"
  },
  {
  symbol: "INDY",
  name: "iShares S&P India Nifty 50 Index Fund",
  lastSale: "36.29",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/indy"
  },
  {
  symbol: "IJT",
  name: "iShares S&P Small-Cap 600 Growth ETF",
  lastSale: "92.23",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ijt"
  },
  {
  symbol: "DVY",
  name: "iShares Select Dividend ETF",
  lastSale: "84.32",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dvy"
  },
  {
  symbol: "SHV",
  name: "iShares Short Treasury Bond ETF",
  lastSale: "110.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/shv"
  },
  {
  symbol: "ITMR",
  name: "Itamar Medical Ltd.",
  lastSale: "20.75",
  marketCap: "$292.88M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/itmr"
  },
  {
  symbol: "ITOS",
  name: "iTeos Therapeutics, Inc.",
  lastSale: "24.5",
  marketCap: "$858.6M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/itos"
  },
  {
  symbol: "ITI",
  name: "Iteris, Inc.",
  lastSale: "3.92",
  marketCap: "$160.43M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/iti"
  },
  {
  symbol: "ITRM",
  name: "Iterum Therapeutics plc",
  lastSale: "0.486",
  marketCap: "$10.32M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/itrm"
  },
  {
  symbol: "ITRI",
  name: "Itron, Inc.",
  lastSale: "71.48",
  marketCap: "$2.88B",
  ipoYear: "1993",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/itri"
  },
  {
  symbol: "ITRN",
  name: "Ituran Location and Control Ltd.",
  lastSale: "13.99",
  marketCap: "$328.42M",
  ipoYear: "2005",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/itrn"
  },
  {
  symbol: "ISEE",
  name: "IVERIC bio, Inc.",
  lastSale: "6.23",
  marketCap: "$557.6M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/isee"
  },
  {
  symbol: "IZEA",
  name: "IZEA Worldwide, Inc.",
  lastSale: "0.7647",
  marketCap: "$37.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/izea"
  },
  {
  symbol: "JJSF",
  name: "J & J Snack Foods Corp.",
  lastSale: "136.05",
  marketCap: "$2.57B",
  ipoYear: "1986",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/jjsf"
  },
  {
  symbol: "MAYS",
  name: "J. W. Mays, Inc.",
  lastSale: "22.6",
  marketCap: "$45.56M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Building operators",
  summaryQuote: "https://old.nasdaq.com/symbol/mays"
  },
  {
  symbol: "JBHT",
  name: "J.B. Hunt Transport Services, Inc.",
  lastSale: "126.33",
  marketCap: "$13.35B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jbht"
  },
  {
  symbol: "JCOM",
  name: "j2 Global, Inc.",
  lastSale: "69.56",
  marketCap: "$3.31B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/jcom"
  },
  {
  symbol: "JCIC",
  name: "Jack Creek Investment Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/jcic"
  },
  {
  symbol: "JCICU",
  name: "Jack Creek Investment Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jcicu"
  },
  {
  symbol: "JKHY",
  name: "Jack Henry & Associates, Inc.",
  lastSale: "151.22",
  marketCap: "$11.54B",
  ipoYear: "1985",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jkhy"
  },
  {
  symbol: "JACK",
  name: "Jack In The Box Inc.",
  lastSale: "84.73",
  marketCap: "$1.92B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/jack"
  },
  {
  symbol: "JAGX",
  name: "Jaguar Health, Inc.",
  lastSale: "0.2337",
  marketCap: "$13.12M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/jagx"
  },
  {
  symbol: "JAKK",
  name: "JAKKS Pacific, Inc.",
  lastSale: "4.29",
  marketCap: "$18.21M",
  ipoYear: "1996",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/jakk"
  },
  {
  symbol: "JRVR",
  name: "James River Group Holdings, Ltd.",
  lastSale: "52.74",
  marketCap: "$1.61B",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/jrvr"
  },
  {
  symbol: "JAMF",
  name: "Jamf Holding Corp.",
  lastSale: "33.7",
  marketCap: "$3.92B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/jamf"
  },
  {
  symbol: "JAN",
  name: "JanOne Inc.",
  lastSale: "3.5",
  marketCap: "$6.4M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/jan"
  },
  {
  symbol: "JSML",
  name: "Janus Henderson Small Cap Growth Alpha ETF",
  lastSale: "49.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/jsml"
  },
  {
  symbol: "JSMD",
  name: "Janus Henderson Small/Mid Cap Growth Alpha ETF",
  lastSale: "54.2197",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/jsmd"
  },
  {
  symbol: "JAZZ",
  name: "Jazz Pharmaceuticals plc",
  lastSale: "149.56",
  marketCap: "$8.29B",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/jazz"
  },
  {
  symbol: "JD",
  name: "JD.com, Inc.",
  lastSale: "83.01",
  marketCap: "$129.09B",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/jd"
  },
  {
  symbol: "JRSH",
  name: "Jerash Holdings (US), Inc.",
  lastSale: "4.9",
  marketCap: "$55.49M",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/jrsh"
  },
  {
  symbol: "JBLU",
  name: "JetBlue Airways Corporation",
  lastSale: "11.88",
  marketCap: "$3.24B",
  ipoYear: "2002",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jblu"
  },
  {
  symbol: "JCTCF",
  name: "Jewett-Cameron Trading Company",
  lastSale: "9.94",
  marketCap: "$34.6M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/jctcf"
  },
  {
  symbol: "FROG",
  name: "JFrog Ltd.",
  lastSale: "81.56",
  marketCap: "$7.23B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/frog"
  },
  {
  symbol: "JFIN",
  name: "Jiayin Group Inc.",
  lastSale: "2.96",
  marketCap: "$159.91M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jfin"
  },
  {
  symbol: "JMPNL",
  name: "JMP Group LLC",
  lastSale: "22.77",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/jmpnl"
  },
  {
  symbol: "JMPNZ",
  name: "JMP Group LLC",
  lastSale: "21.54",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/jmpnz"
  },
  {
  symbol: "JBSS",
  name: "John B. Sanfilippo & Son, Inc.",
  lastSale: "74.59",
  marketCap: "$851.79M",
  ipoYear: "1991",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/jbss"
  },
  {
  symbol: "JOUT",
  name: "Johnson Outdoors Inc.",
  lastSale: "86.11",
  marketCap: "$868.4M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/jout"
  },
  {
  symbol: "JNCE",
  name: "Jounce Therapeutics, Inc.",
  lastSale: "9",
  marketCap: "$307.93M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/jnce"
  },
  {
  symbol: "YY",
  name: "JOYY Inc.",
  lastSale: "90",
  marketCap: "$7.27B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/yy"
  },
  {
  symbol: "JAQC",
  name: "Jupiter Acquisition Corporation",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/jaqc"
  },
  {
  symbol: "JAQCU",
  name: "Jupiter Acquisition Corporation",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jaqcu"
  },
  {
  symbol: "JUPW",
  name: "Jupiter Wellness, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Package Goods/Cosmetics",
  summaryQuote: "https://old.nasdaq.com/symbol/jupw"
  },
  {
  symbol: "JUPWW",
  name: "Jupiter Wellness, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Package Goods/Cosmetics",
  summaryQuote: "https://old.nasdaq.com/symbol/jupww"
  },
  {
  symbol: "KDMN",
  name: "Kadmon Holdings, Inc.",
  lastSale: "3.48",
  marketCap: "$595.56M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kdmn"
  },
  {
  symbol: "KALU",
  name: "Kaiser Aluminum Corporation",
  lastSale: "62.63",
  marketCap: "$990.32M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/kalu"
  },
  {
  symbol: "KXIN",
  name: "Kaixin Auto Holdings",
  lastSale: "4.73",
  marketCap: "$305.93M",
  ipoYear: "2017",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/kxin"
  },
  {
  symbol: "KALA",
  name: "Kala Pharmaceuticals, Inc.",
  lastSale: "6.275",
  marketCap: "$351.78M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kala"
  },
  {
  symbol: "KLDO",
  name: "Kaleido Biosciences, Inc.",
  lastSale: "6.625",
  marketCap: "$235.5M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/kldo"
  },
  {
  symbol: "KALV",
  name: "KalVista Pharmaceuticals, Inc.",
  lastSale: "15.77",
  marketCap: "$282.4M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kalv"
  },
  {
  symbol: "KMDA",
  name: "Kamada Ltd.",
  lastSale: "7.62",
  marketCap: "$339.27M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kmda"
  },
  {
  symbol: "KNDI",
  name: "Kandi Technologies Group, Inc.",
  lastSale: "6.9",
  marketCap: "$376.81M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/kndi"
  },
  {
  symbol: "KRTX",
  name: "Karuna Therapeutics, Inc.",
  lastSale: "82.5",
  marketCap: "$2.2B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/krtx"
  },
  {
  symbol: "KPTI",
  name: "Karyopharm Therapeutics Inc.",
  lastSale: "16.44",
  marketCap: "$1.21B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kpti"
  },
  {
  symbol: "KSPN",
  name: "Kaspien Holdings Inc.",
  lastSale: "12.38",
  marketCap: "$22.6M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Consumer Electronics/Video Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/kspn"
  },
  {
  symbol: "KZIA",
  name: "Kazia Therapeutics Limited",
  lastSale: "5.85",
  marketCap: "$55.35M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kzia"
  },
  {
  symbol: "KBLM",
  name: "KBL Merger Corp. IV",
  lastSale: "10.96",
  marketCap: "$60M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kblm"
  },
  {
  symbol: "KBLMR",
  name: "KBL Merger Corp. IV",
  lastSale: "0.32",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kblmr"
  },
  {
  symbol: "KBLMU",
  name: "KBL Merger Corp. IV",
  lastSale: "12.3",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kblmu"
  },
  {
  symbol: "KBLMW",
  name: "KBL Merger Corp. IV",
  lastSale: "0.21",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kblmw"
  },
  {
  symbol: "KBSF",
  name: "KBS Fashion Group Limited",
  lastSale: "2.41",
  marketCap: "$6.25M",
  ipoYear: "2013",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/kbsf"
  },
  {
  symbol: "KRNY",
  name: "Kearny Financial",
  lastSale: "8.74",
  marketCap: "$782.38M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/krny"
  },
  {
  symbol: "KELYA",
  name: "Kelly Services, Inc.",
  lastSale: "18.33",
  marketCap: "$724.79M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kelya"
  },
  {
  symbol: "KELYB",
  name: "Kelly Services, Inc.",
  lastSale: "18.75",
  marketCap: "$741.4M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kelyb"
  },
  {
  symbol: "KFFB",
  name: "Kentucky First Federal Bancorp",
  lastSale: "6.3",
  marketCap: "$51.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/kffb"
  },
  {
  symbol: "KROS",
  name: "Keros Therapeutics, Inc.",
  lastSale: "58.41",
  marketCap: "$1.18B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kros"
  },
  {
  symbol: "KDP",
  name: "Keurig Dr Pepper Inc.",
  lastSale: "28.6",
  marketCap: "$40.25B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/kdp"
  },
  {
  symbol: "KEQU",
  name: "Kewaunee Scientific Corporation",
  lastSale: "8.63",
  marketCap: "$23.81M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/kequ"
  },
  {
  symbol: "KTCC",
  name: "Key Tronic Corporation",
  lastSale: "9.52",
  marketCap: "$102.43M",
  ipoYear: "1983",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ktcc"
  },
  {
  symbol: "KZR",
  name: "Kezar Life Sciences, Inc.",
  lastSale: "5.74",
  marketCap: "$265.51M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kzr"
  },
  {
  symbol: "KFRC",
  name: "Kforce, Inc.",
  lastSale: "35.32",
  marketCap: "$775.18M",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kfrc"
  },
  {
  symbol: "KE",
  name: "Kimball Electronics, Inc.",
  lastSale: "12.19",
  marketCap: "$306.5M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ke"
  },
  {
  symbol: "KBAL",
  name: "Kimball International, Inc.",
  lastSale: "10.4",
  marketCap: "$384.52M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/kbal"
  },
  {
  symbol: "KIN",
  name: "Kindred Biosciences, Inc.",
  lastSale: "3.93",
  marketCap: "$154.72M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kin"
  },
  {
  symbol: "KC",
  name: "Kingsoft Cloud Holdings Limited",
  lastSale: "31.15",
  marketCap: "$6.79B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/kc"
  },
  {
  symbol: "KINS",
  name: "Kingstone Companies, Inc",
  lastSale: "5.96",
  marketCap: "$63.6M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/kins"
  },
  {
  symbol: "KNSA",
  name: "Kiniksa Pharmaceuticals, Ltd.",
  lastSale: "18.43",
  marketCap: "$1.25B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/knsa"
  },
  {
  symbol: "KINZ",
  name: "KINS Technology Group Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kinz"
  },
  {
  symbol: "KINZU",
  name: "KINS Technology Group Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kinzu"
  },
  {
  symbol: "KNSL",
  name: "Kinsale Capital Group, Inc.",
  lastSale: "208",
  marketCap: "$4.51B",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/knsl"
  },
  {
  symbol: "KTRA",
  name: "Kintara Therapeutics, Inc.",
  lastSale: "1.36",
  marketCap: "$32.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ktra"
  },
  {
  symbol: "KIRK",
  name: "Kirkland&#39;s, Inc.",
  lastSale: "10.88",
  marketCap: "$155.02M",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/kirk"
  },
  {
  symbol: "KRBP",
  name: "Kiromic BioPharma, Inc.",
  lastSale: "10.15",
  marketCap: "$74.43M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/krbp"
  },
  {
  symbol: "KSMT",
  name: "Kismet Acquisition One Corp",
  lastSale: "9.63",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ksmt"
  },
  {
  symbol: "KSMTU",
  name: "Kismet Acquisition One Corp",
  lastSale: "10",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ksmtu"
  },
  {
  symbol: "KSMTW",
  name: "Kismet Acquisition One Corp",
  lastSale: "0.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ksmtw"
  },
  {
  symbol: "KTOV",
  name: "Kitov Pharma Ltd.",
  lastSale: "4.66",
  marketCap: "$80.2M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ktov"
  },
  {
  symbol: "KTOVW",
  name: "Kitov Pharma Ltd.",
  lastSale: "0.068",
  marketCap: "n/a",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ktovw"
  },
  {
  symbol: "KLAC",
  name: "KLA Corporation ",
  lastSale: "198.59",
  marketCap: "$30.8B",
  ipoYear: "1980",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/klac"
  },
  {
  symbol: "KLXE",
  name: "KLX Energy Services Holdings, Inc. ",
  lastSale: "4.3",
  marketCap: "$36.13M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/klxe"
  },
  {
  symbol: "KOD",
  name: "Kodiak Sciences Inc",
  lastSale: "97.74",
  marketCap: "$4.37B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/kod"
  },
  {
  symbol: "KOPN",
  name: "Kopin Corporation",
  lastSale: "1.32",
  marketCap: "$112.15M",
  ipoYear: "1992",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/kopn"
  },
  {
  symbol: "KRNT",
  name: "Kornit Digital Ltd.",
  lastSale: "66.22",
  marketCap: "$2.89B",
  ipoYear: "2015",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/krnt"
  },
  {
  symbol: "KOSS",
  name: "Koss Corporation",
  lastSale: "2.19",
  marketCap: "$16.22M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/koss"
  },
  {
  symbol: "KWEB",
  name: "KraneShares Trust KraneShares CSI China Internet ETF",
  lastSale: "72.46",
  marketCap: "$246.36M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kweb"
  },
  {
  symbol: "KTOS",
  name: "Kratos Defense & Security Solutions, Inc.",
  lastSale: "20.67",
  marketCap: "$2.54B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/ktos"
  },
  {
  symbol: "KRON",
  name: "Kronos Bio, Inc.",
  lastSale: "30",
  marketCap: "$1.65B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kron"
  },
  {
  symbol: "KRYS",
  name: "Krystal Biotech, Inc.",
  lastSale: "48.68",
  marketCap: "$957.25M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/krys"
  },
  {
  symbol: "KBNT",
  name: "Kubient, Inc.",
  lastSale: "3.25",
  marketCap: "$24.9M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kbnt"
  },
  {
  symbol: "KBNTW",
  name: "Kubient, Inc.",
  lastSale: "1.03",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/kbntw"
  },
  {
  symbol: "KLIC",
  name: "Kulicke and Soffa Industries, Inc.",
  lastSale: "25.87",
  marketCap: "$1.6B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/klic"
  },
  {
  symbol: "KURA",
  name: "Kura Oncology, Inc.",
  lastSale: "32.28",
  marketCap: "$1.82B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/kura"
  },
  {
  symbol: "KRUS",
  name: "Kura Sushi USA, Inc.",
  lastSale: "13.81",
  marketCap: "$115.2M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/krus"
  },
  {
  symbol: "KVHI",
  name: "KVH Industries, Inc.",
  lastSale: "9",
  marketCap: "$167.35M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/kvhi"
  },
  {
  symbol: "KYMR",
  name: "Kymera Therapeutics, Inc.",
  lastSale: "37.75",
  marketCap: "$1.68B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/kymr"
  },
  {
  symbol: "FSTR",
  name: "L.B. Foster Company",
  lastSale: "14.22",
  marketCap: "$152.7M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/fstr"
  },
  {
  symbol: "LJPC",
  name: "La Jolla Pharmaceutical Company",
  lastSale: "3.85",
  marketCap: "$105.34M",
  ipoYear: "1994",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ljpc"
  },
  {
  symbol: "LSBK",
  name: "Lake Shore Bancorp, Inc.",
  lastSale: "12.55",
  marketCap: "$73.49M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/lsbk"
  },
  {
  symbol: "LBAI",
  name: "Lakeland Bancorp, Inc.",
  lastSale: "10.92",
  marketCap: "$551.11M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lbai"
  },
  {
  symbol: "LKFN",
  name: "Lakeland Financial Corporation",
  lastSale: "50.5",
  marketCap: "$1.3B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lkfn"
  },
  {
  symbol: "LAKE",
  name: "Lakeland Industries, Inc.",
  lastSale: "24.12",
  marketCap: "$192.48M",
  ipoYear: "1986",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/lake"
  },
  {
  symbol: "LRCX",
  name: "Lam Research Corporation",
  lastSale: "343.83",
  marketCap: "$49.72B",
  ipoYear: "1984",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/lrcx"
  },
  {
  symbol: "LAMR",
  name: "Lamar Advertising Company",
  lastSale: "64.75",
  marketCap: "$6.53B",
  ipoYear: "1996",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/lamr"
  },
  {
  symbol: "LANC",
  name: "Lancaster Colony Corporation",
  lastSale: "177.23",
  marketCap: "$4.88B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/lanc"
  },
  {
  symbol: "LCA",
  name: "Landcadia Holdings II, Inc.",
  lastSale: "11.74",
  marketCap: "$464.1M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/lca"
  },
  {
  symbol: "LCAHU",
  name: "Landcadia Holdings II, Inc.",
  lastSale: "13.1",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/lcahu"
  },
  {
  symbol: "LCAHW",
  name: "Landcadia Holdings II, Inc.",
  lastSale: "3.09",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/lcahw"
  },
  {
  symbol: "LCYAU",
  name: "Landcadia Holdings III, Inc.",
  lastSale: "9.91",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lcyau"
  },
  {
  symbol: "LNDC",
  name: "Landec Corporation",
  lastSale: "10.15",
  marketCap: "$296.81M",
  ipoYear: "1996",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/lndc"
  },
  {
  symbol: "LARK",
  name: "Landmark Bancorp Inc.",
  lastSale: "22.75",
  marketCap: "$105.06M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lark"
  },
  {
  symbol: "LMRK",
  name: "Landmark Infrastructure Partners LP",
  lastSale: "10.5",
  marketCap: "$267.52M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/lmrk"
  },
  {
  symbol: "LMRKN",
  name: "Landmark Infrastructure Partners LP",
  lastSale: "25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/lmrkn"
  },
  {
  symbol: "LMRKO",
  name: "Landmark Infrastructure Partners LP",
  lastSale: "25.0648",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/lmrko"
  },
  {
  symbol: "LMRKP",
  name: "Landmark Infrastructure Partners LP",
  lastSale: "24.775",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/lmrkp"
  },
  {
  symbol: "LE",
  name: "Lands&#39; End, Inc.",
  lastSale: "15.85",
  marketCap: "$516.77M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/le"
  },
  {
  symbol: "LSTR",
  name: "Landstar System, Inc.",
  lastSale: "129.12",
  marketCap: "$4.96B",
  ipoYear: "1993",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lstr"
  },
  {
  symbol: "LTRN",
  name: "Lantern Pharma Inc.",
  lastSale: "16.6",
  marketCap: "$103.21M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ltrn"
  },
  {
  symbol: "LNTH",
  name: "Lantheus Holdings, Inc.",
  lastSale: "11.97",
  marketCap: "$799.76M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/lnth"
  },
  {
  symbol: "LTRX",
  name: "Lantronix, Inc.",
  lastSale: "4.52",
  marketCap: "$129.08M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ltrx"
  },
  {
  symbol: "LRMR",
  name: "Larimar Therapeutics, Inc.",
  lastSale: "19",
  marketCap: "$291.77M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lrmr"
  },
  {
  symbol: "LSCC",
  name: "Lattice Semiconductor Corporation",
  lastSale: "34.31",
  marketCap: "$4.64B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/lscc"
  },
  {
  symbol: "LAUR",
  name: "Laureate Education, Inc.",
  lastSale: "13.21",
  marketCap: "$2.77B",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/laur"
  },
  {
  symbol: "LAWS",
  name: "Lawson Products, Inc.",
  lastSale: "43.12",
  marketCap: "$388.44M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/laws"
  },
  {
  symbol: "LAZY",
  name: "Lazydays Holdings, Inc.",
  lastSale: "14.11",
  marketCap: "$133.37M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/lazy"
  },
  {
  symbol: "LCNB",
  name: "LCNB Corporation",
  lastSale: "13.61",
  marketCap: "$175.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lcnb"
  },
  {
  symbol: "LPTX",
  name: "LEAP THERAPEUTICS, INC.",
  lastSale: "2.08",
  marketCap: "$124.09M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lptx"
  },
  {
  symbol: "LFTRU",
  name: "Lefteris Acquisition Corp.",
  lastSale: "9.82",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lftru"
  },
  {
  symbol: "LEGH",
  name: "Legacy Housing Corporation",
  lastSale: "14.51",
  marketCap: "$351.03M",
  ipoYear: "2018",
  sector: "Basic Industries",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/legh"
  },
  {
  symbol: "LEGN",
  name: "Legend Biotech Corporation",
  lastSale: "27.89",
  marketCap: "$3.6B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/legn"
  },
  {
  symbol: "INFR",
  name: "Legg Mason Global Infrastructure ETF",
  lastSale: "27.295",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/infr"
  },
  {
  symbol: "LVHD",
  name: "Legg Mason Low Volatility High Dividend ETF",
  lastSale: "30.1398",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lvhd"
  },
  {
  symbol: "SQLV",
  name: "Legg Mason Small-Cap Quality Value ETF",
  lastSale: "24.613",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/sqlv"
  },
  {
  symbol: "LACQ",
  name: "Leisure Acquisition Corp.",
  lastSale: "10.5",
  marketCap: "$65.75M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lacq"
  },
  {
  symbol: "LACQU",
  name: "Leisure Acquisition Corp.",
  lastSale: "11",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lacqu"
  },
  {
  symbol: "LACQW",
  name: "Leisure Acquisition Corp.",
  lastSale: "0.416",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lacqw"
  },
  {
  symbol: "LMAT",
  name: "LeMaitre Vascular, Inc.",
  lastSale: "33.21",
  marketCap: "$671.74M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/lmat"
  },
  {
  symbol: "TREE",
  name: "LendingTree, Inc.",
  lastSale: "337.03",
  marketCap: "$4.42B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tree"
  },
  {
  symbol: "LNSR",
  name: "LENSAR, Inc.",
  lastSale: "7.87",
  marketCap: "$68.21M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/lnsr"
  },
  {
  symbol: "LEVL",
  name: "Level One Bancorp, Inc.",
  lastSale: "16.9",
  marketCap: "$130.71M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/levl"
  },
  {
  symbol: "LEVLP",
  name: "Level One Bancorp, Inc.",
  lastSale: "25.315",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/levlp"
  },
  {
  symbol: "LXRX",
  name: "Lexicon Pharmaceuticals, Inc.",
  lastSale: "1.32",
  marketCap: "$141.38M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lxrx"
  },
  {
  symbol: "LX",
  name: "LexinFintech Holdings Ltd.",
  lastSale: "7.64",
  marketCap: "$1.38B",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lx"
  },
  {
  symbol: "LFAC",
  name: "LF Capital Acquistion Corp.",
  lastSale: "10.5021",
  marketCap: "$181.86M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lfac"
  },
  {
  symbol: "LFACU",
  name: "LF Capital Acquistion Corp.",
  lastSale: "12",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lfacu"
  },
  {
  symbol: "LFACW",
  name: "LF Capital Acquistion Corp.",
  lastSale: "1.64",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lfacw"
  },
  {
  symbol: "LGIH",
  name: "LGI Homes, Inc.",
  lastSale: "113.17",
  marketCap: "$2.84B",
  ipoYear: "2013",
  sector: "Capital Goods",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/lgih"
  },
  {
  symbol: "LHCG",
  name: "LHC Group",
  lastSale: "222.84",
  marketCap: "$7.04B",
  ipoYear: "2005",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lhcg"
  },
  {
  symbol: "LI",
  name: "Li Auto Inc.",
  lastSale: "19.21",
  marketCap: "$16.07B",
  ipoYear: "2020",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/li"
  },
  {
  symbol: "LLIT",
  name: "Lianluo Smart Limited",
  lastSale: "4.66",
  marketCap: "$2.1M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/llit"
  },
  {
  symbol: "LBRDA",
  name: "Liberty Broadband Corporation",
  lastSale: "136.47",
  marketCap: "$24.55B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lbrda"
  },
  {
  symbol: "LBRDK",
  name: "Liberty Broadband Corporation",
  lastSale: "137.92",
  marketCap: "$24.81B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lbrdk"
  },
  {
  symbol: "LBTYA",
  name: "Liberty Global plc",
  lastSale: "20.2",
  marketCap: "$11.99B",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lbtya"
  },
  {
  symbol: "LBTYB",
  name: "Liberty Global plc",
  lastSale: "21.1834",
  marketCap: "$12.58B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lbtyb"
  },
  {
  symbol: "LBTYK",
  name: "Liberty Global plc",
  lastSale: "19.9",
  marketCap: "$11.81B",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/lbtyk"
  },
  {
  symbol: "LILA",
  name: "Liberty Latin America Ltd.",
  lastSale: "10.25",
  marketCap: "$2.38B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lila"
  },
  {
  symbol: "LILAK",
  name: "Liberty Latin America Ltd.",
  lastSale: "10.2",
  marketCap: "$2.37B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lilak"
  },
  {
  symbol: "BATRA",
  name: "Liberty Media Corporation",
  lastSale: "21.05",
  marketCap: "$1.08B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/batra"
  },
  {
  symbol: "BATRK",
  name: "Liberty Media Corporation",
  lastSale: "20.71",
  marketCap: "$1.06B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/batrk"
  },
  {
  symbol: "FWONA",
  name: "Liberty Media Corporation",
  lastSale: "33.12",
  marketCap: "$7.67B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/fwona"
  },
  {
  symbol: "FWONK",
  name: "Liberty Media Corporation",
  lastSale: "36",
  marketCap: "$8.34B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/fwonk"
  },
  {
  symbol: "LSXMA",
  name: "Liberty Media Corporation",
  lastSale: "35.5",
  marketCap: "$12.19B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/lsxma"
  },
  {
  symbol: "LSXMB",
  name: "Liberty Media Corporation",
  lastSale: "36.14",
  marketCap: "$12.41B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/lsxmb"
  },
  {
  symbol: "LSXMK",
  name: "Liberty Media Corporation",
  lastSale: "35.3",
  marketCap: "$12.13B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/lsxmk"
  },
  {
  symbol: "LTRPA",
  name: "Liberty TripAdvisor Holdings, Inc.",
  lastSale: "1.77",
  marketCap: "$132.96M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ltrpa"
  },
  {
  symbol: "LTRPB",
  name: "Liberty TripAdvisor Holdings, Inc.",
  lastSale: "34.55",
  marketCap: "$2.6B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ltrpb"
  },
  {
  symbol: "LSAC",
  name: "LifeSci Acquisition Corp.",
  lastSale: "14.81",
  marketCap: "$121.51M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lsac"
  },
  {
  symbol: "LSACU",
  name: "LifeSci Acquisition Corp.",
  lastSale: "15.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lsacu"
  },
  {
  symbol: "LSACW",
  name: "LifeSci Acquisition Corp.",
  lastSale: "1.44",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lsacw"
  },
  {
  symbol: "LCUT",
  name: "Lifetime Brands, Inc.",
  lastSale: "10.45",
  marketCap: "$227.48M",
  ipoYear: "1991",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/lcut"
  },
  {
  symbol: "LFVN",
  name: "Lifevantage Corporation",
  lastSale: "11.75",
  marketCap: "$167.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lfvn"
  },
  {
  symbol: "LWAY",
  name: "Lifeway Foods, Inc.",
  lastSale: "4.85",
  marketCap: "$75.68M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/lway"
  },
  {
  symbol: "LGND",
  name: "Ligand Pharmaceuticals Incorporated",
  lastSale: "86.18",
  marketCap: "$1.39B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lgnd"
  },
  {
  symbol: "LTBR",
  name: "Lightbridge Corporation",
  lastSale: "2.69",
  marketCap: "$10.64M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ltbr"
  },
  {
  symbol: "LPTH",
  name: "LightPath Technologies, Inc.",
  lastSale: "2.42",
  marketCap: "$62.95M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/lpth"
  },
  {
  symbol: "LMB",
  name: "Limbach Holdings, Inc.",
  lastSale: "9.03",
  marketCap: "$71.19M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/lmb"
  },
  {
  symbol: "LLNW",
  name: "Limelight Networks, Inc.",
  lastSale: "3.93",
  marketCap: "$482.7M",
  ipoYear: "2007",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/llnw"
  },
  {
  symbol: "LMST",
  name: "Limestone Bancorp, Inc.",
  lastSale: "10.46",
  marketCap: "$78.44M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lmst"
  },
  {
  symbol: "LMNL",
  name: "Liminal BioSciences Inc.",
  lastSale: "5.55",
  marketCap: "$131.14M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lmnl"
  },
  {
  symbol: "LMNR",
  name: "Limoneira Co",
  lastSale: "14.45",
  marketCap: "$257.44M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/lmnr"
  },
  {
  symbol: "LINC",
  name: "Lincoln Educational Services Corporation",
  lastSale: "4.89",
  marketCap: "$129.14M",
  ipoYear: "2005",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/linc"
  },
  {
  symbol: "LECO",
  name: "Lincoln Electric Holdings, Inc.",
  lastSale: "101.59",
  marketCap: "$6.03B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/leco"
  },
  {
  symbol: "LIND",
  name: "Lindblad Expeditions Holdings Inc. ",
  lastSale: "8.53",
  marketCap: "$425.29M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lind"
  },
  {
  symbol: "LGHL",
  name: "Lion Group Holding Ltd.",
  lastSale: "2.55",
  marketCap: "$46.11M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/lghl"
  },
  {
  symbol: "LGHLW",
  name: "Lion Group Holding Ltd.",
  lastSale: "0.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/lghlw"
  },
  {
  symbol: "LCAP",
  name: "Lionheart Acquisition Corp. II",
  lastSale: "9.66",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lcap"
  },
  {
  symbol: "LCAPU",
  name: "Lionheart Acquisition Corp. II",
  lastSale: "9.94",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lcapu"
  },
  {
  symbol: "LCAPW",
  name: "Lionheart Acquisition Corp. II",
  lastSale: "0.65",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lcapw"
  },
  {
  symbol: "LPCN",
  name: "Lipocine Inc.",
  lastSale: "1.34",
  marketCap: "$88.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lpcn"
  },
  {
  symbol: "LIQT",
  name: "LiqTech International, Inc.",
  lastSale: "7.62",
  marketCap: "$165.01M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/liqt"
  },
  {
  symbol: "YVR",
  name: "Liquid Media Group Ltd.",
  lastSale: "1.47",
  marketCap: "$14.69M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/yvr"
  },
  {
  symbol: "LQDA",
  name: "Liquidia Technologies, Inc.",
  lastSale: "4.27",
  marketCap: "$161.19M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/lqda"
  },
  {
  symbol: "LQDT",
  name: "Liquidity Services, Inc.",
  lastSale: "8.81",
  marketCap: "$299.94M",
  ipoYear: "2006",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lqdt"
  },
  {
  symbol: "LFUS",
  name: "Littelfuse, Inc.",
  lastSale: "196.5",
  marketCap: "$4.78B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/lfus"
  },
  {
  symbol: "LIVK",
  name: "LIV Capital Acquisition Corp.",
  lastSale: "9.87",
  marketCap: "$100.01M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/livk"
  },
  {
  symbol: "LIVKU",
  name: "LIV Capital Acquisition Corp.",
  lastSale: "10.43",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/livku"
  },
  {
  symbol: "LIVKW",
  name: "LIV Capital Acquisition Corp.",
  lastSale: "0.423",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/livkw"
  },
  {
  symbol: "LIVN",
  name: "LivaNova PLC",
  lastSale: "52.39",
  marketCap: "$2.55B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/livn"
  },
  {
  symbol: "LOB",
  name: "Live Oak Bancshares, Inc.",
  lastSale: "34.9",
  marketCap: "$1.42B",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lob"
  },
  {
  symbol: "LIVE",
  name: "Live Ventures Incorporated",
  lastSale: "10.8608",
  marketCap: "$17.41M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance/Investors Services",
  summaryQuote: "https://old.nasdaq.com/symbol/live"
  },
  {
  symbol: "LPSN",
  name: "LivePerson, Inc.",
  lastSale: "58.13",
  marketCap: "$3.85B",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/lpsn"
  },
  {
  symbol: "LIVX",
  name: "LiveXLive Media, Inc.",
  lastSale: "2.23",
  marketCap: "$160.13M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/livx"
  },
  {
  symbol: "LVGO",
  name: "Livongo Health, Inc.",
  lastSale: "142.89",
  marketCap: "$14.52B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/lvgo"
  },
  {
  symbol: "LXEH",
  name: "Lixiang Education Holding Co., Ltd.",
  lastSale: "9",
  marketCap: "$120M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lxeh"
  },
  {
  symbol: "LIZI",
  name: "LIZHI INC.",
  lastSale: "2.06",
  marketCap: "$94.48M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/lizi"
  },
  {
  symbol: "LKQ",
  name: "LKQ Corporation",
  lastSale: "30.9",
  marketCap: "$9.4B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Motor Vehicles",
  summaryQuote: "https://old.nasdaq.com/symbol/lkq"
  },
  {
  symbol: "LMFA",
  name: "LM Funding America, Inc.",
  lastSale: "0.5899",
  marketCap: "$8.62M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lmfa"
  },
  {
  symbol: "LMFAW",
  name: "LM Funding America, Inc.",
  lastSale: "0.0301",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lmfaw"
  },
  {
  symbol: "LMPX",
  name: "LMP Automotive Holdings, Inc.",
  lastSale: "24.98",
  marketCap: "$247.39M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/lmpx"
  },
  {
  symbol: "LOGC",
  name: "LogicBio Therapeutics, Inc.",
  lastSale: "5.76",
  marketCap: "$182.81M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/logc"
  },
  {
  symbol: "LOGI",
  name: "Logitech International S.A.",
  lastSale: "87.04",
  marketCap: "$14.72B",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/logi"
  },
  {
  symbol: "CNCR",
  name: "Loncar Cancer Immunotherapy ETF",
  lastSale: "27.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cncr"
  },
  {
  symbol: "CHNA",
  name: "Loncar China BioPharma ETF",
  lastSale: "30.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/chna"
  },
  {
  symbol: "LOAC",
  name: "Longevity Acquisition Corporation",
  lastSale: "10.74",
  marketCap: "$28.21M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/loac"
  },
  {
  symbol: "LOACR",
  name: "Longevity Acquisition Corporation",
  lastSale: "0.8899",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/loacr"
  },
  {
  symbol: "LOACU",
  name: "Longevity Acquisition Corporation",
  lastSale: "12.3",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/loacu"
  },
  {
  symbol: "LOACW",
  name: "Longevity Acquisition Corporation",
  lastSale: "0.55",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/loacw"
  },
  {
  symbol: "LOOP",
  name: "Loop Industries, Inc.",
  lastSale: "6.72",
  marketCap: "$283.67M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/loop"
  },
  {
  symbol: "LORL",
  name: "Loral Space and Communications, Inc.",
  lastSale: "19.26",
  marketCap: "$595.76M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/lorl"
  },
  {
  symbol: "RIDE",
  name: "Lordstown Motors Corp.",
  lastSale: "16.56",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/ride"
  },
  {
  symbol: "RIDEW",
  name: "Lordstown Motors Corp.",
  lastSale: "6.09",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/ridew"
  },
  {
  symbol: "LPLA",
  name: "LPL Financial Holdings Inc.",
  lastSale: "79.63",
  marketCap: "$6.3B",
  ipoYear: "2010",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/lpla"
  },
  {
  symbol: "LYTS",
  name: "LSI Industries Inc.",
  lastSale: "7.43",
  marketCap: "$195.71M",
  ipoYear: "1985",
  sector: "Consumer Durables",
  industry: "Building Products",
  summaryQuote: "https://old.nasdaq.com/symbol/lyts"
  },
  {
  symbol: "LULU",
  name: "lululemon athletica inc.",
  lastSale: "333.81",
  marketCap: "$43.5B",
  ipoYear: "2007",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/lulu"
  },
  {
  symbol: "LITE",
  name: "Lumentum Holdings Inc.",
  lastSale: "83.84",
  marketCap: "$6.33B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/lite"
  },
  {
  symbol: "LMNX",
  name: "Luminex Corporation",
  lastSale: "22.61",
  marketCap: "$1.05B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/lmnx"
  },
  {
  symbol: "LUMO",
  name: "Lumos Pharma, Inc.",
  lastSale: "14.515",
  marketCap: "$120.38M",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/lumo"
  },
  {
  symbol: "LUNA",
  name: "Luna Innovations Incorporated",
  lastSale: "6.63",
  marketCap: "$204.19M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/luna"
  },
  {
  symbol: "LKCO",
  name: "Luokung Technology Corp",
  lastSale: "0.4993",
  marketCap: "$100.52M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lkco"
  },
  {
  symbol: "LBC",
  name: "Luther Burbank Corporation",
  lastSale: "9.37",
  marketCap: "$490.93M",
  ipoYear: "2003",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/lbc"
  },
  {
  symbol: "LUXA",
  name: "Lux Health Tech Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/luxa"
  },
  {
  symbol: "LUXAU",
  name: "Lux Health Tech Acquisition Corp.",
  lastSale: "10.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/luxau"
  },
  {
  symbol: "LYFT",
  name: "Lyft, Inc.",
  lastSale: "22.94",
  marketCap: "$7.16B",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lyft"
  },
  {
  symbol: "LYRA",
  name: "Lyra Therapeutics, Inc.",
  lastSale: "11.76",
  marketCap: "$151.99M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/lyra"
  },
  {
  symbol: "MCBC",
  name: "Macatawa Bank Corporation",
  lastSale: "7.22",
  marketCap: "$246.21M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mcbc"
  },
  {
  symbol: "MFNC",
  name: "Mackinac Financial Corporation",
  lastSale: "10.43",
  marketCap: "$109.87M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mfnc"
  },
  {
  symbol: "MTSI",
  name: "MACOM Technology Solutions Holdings, Inc.",
  lastSale: "34.81",
  marketCap: "$2.33B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mtsi"
  },
  {
  symbol: "MGNX",
  name: "MacroGenics, Inc.",
  lastSale: "21.3",
  marketCap: "$1.15B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mgnx"
  },
  {
  symbol: "MDGL",
  name: "Madrigal Pharmaceuticals, Inc.",
  lastSale: "132.97",
  marketCap: "$2.05B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mdgl"
  },
  {
  symbol: "MAGS",
  name: "Magal Security Systems Ltd.",
  lastSale: "3.69",
  marketCap: "$85.44M",
  ipoYear: "1993",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/mags"
  },
  {
  symbol: "MGLN",
  name: "Magellan Health, Inc.",
  lastSale: "74.82",
  marketCap: "$1.89B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Hospital/Nursing Management",
  summaryQuote: "https://old.nasdaq.com/symbol/mgln"
  },
  {
  symbol: "MGTA",
  name: "Magenta Therapeutics, Inc.",
  lastSale: "6.59",
  marketCap: "$317.99M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mgta"
  },
  {
  symbol: "MGIC",
  name: "Magic Software Enterprises Ltd.",
  lastSale: "13.35",
  marketCap: "$653.84M",
  ipoYear: "1991",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mgic"
  },
  {
  symbol: "MGNI",
  name: "Magnite, Inc.",
  lastSale: "9.62",
  marketCap: "$1.06B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/mgni"
  },
  {
  symbol: "MGYR",
  name: "Magyar Bancorp, Inc.",
  lastSale: "8.292",
  marketCap: "$48.18M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/mgyr"
  },
  {
  symbol: "MHLD",
  name: "Maiden Holdings, Ltd.",
  lastSale: "1.27",
  marketCap: "$107.59M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/mhld"
  },
  {
  symbol: "MNSB",
  name: "MainStreet Bancshares, Inc.",
  lastSale: "14.73",
  marketCap: "$121.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mnsb"
  },
  {
  symbol: "MNSBP",
  name: "MainStreet Bancshares, Inc.",
  lastSale: "25.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mnsbp"
  },
  {
  symbol: "MMYT",
  name: "MakeMyTrip Limited",
  lastSale: "18.95",
  marketCap: "$1.96B",
  ipoYear: "2010",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mmyt"
  },
  {
  symbol: "MLAC",
  name: "Malacca Straits Acquisition Company Limited",
  lastSale: "9.71",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mlac"
  },
  {
  symbol: "MLACU",
  name: "Malacca Straits Acquisition Company Limited",
  lastSale: "9.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mlacu"
  },
  {
  symbol: "MLACW",
  name: "Malacca Straits Acquisition Company Limited",
  lastSale: "0.4",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mlacw"
  },
  {
  symbol: "MBUU",
  name: "Malibu Boats, Inc.",
  lastSale: "52.74",
  marketCap: "$1.09B",
  ipoYear: "2014",
  sector: "Capital Goods",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/mbuu"
  },
  {
  symbol: "MACU",
  name: "Mallard Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/macu"
  },
  {
  symbol: "MACUU",
  name: "Mallard Acquisition Corp.",
  lastSale: "9.91",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/macuu"
  },
  {
  symbol: "MLVF",
  name: "Malvern Bancorp, Inc.",
  lastSale: "12.73",
  marketCap: "$96.87M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/mlvf"
  },
  {
  symbol: "TUSK",
  name: "Mammoth Energy Services, Inc.",
  lastSale: "1.59",
  marketCap: "$72.76M",
  ipoYear: "2016",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/tusk"
  },
  {
  symbol: "MANH",
  name: "Manhattan Associates, Inc.",
  lastSale: "91.37",
  marketCap: "$5.8B",
  ipoYear: "1998",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/manh"
  },
  {
  symbol: "LOAN",
  name: "Manhattan Bridge Capital, Inc",
  lastSale: "4.25",
  marketCap: "$40.88M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/loan"
  },
  {
  symbol: "MNTX",
  name: "Manitex International, Inc.",
  lastSale: "3.97",
  marketCap: "$78.48M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mntx"
  },
  {
  symbol: "MTEX",
  name: "Mannatech, Incorporated",
  lastSale: "15.7",
  marketCap: "$32.99M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/mtex"
  },
  {
  symbol: "MNKD",
  name: "MannKind Corporation",
  lastSale: "2",
  marketCap: "$458.35M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mnkd"
  },
  {
  symbol: "MANT",
  name: "ManTech International Corporation",
  lastSale: "66.37",
  marketCap: "$2.68B",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mant"
  },
  {
  symbol: "MARA",
  name: "Marathon Patent Group, Inc.",
  lastSale: "2.76",
  marketCap: "$88.71M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/mara"
  },
  {
  symbol: "MCHX",
  name: "Marchex, Inc.",
  lastSale: "1.79",
  marketCap: "$70.81M",
  ipoYear: "2004",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mchx"
  },
  {
  symbol: "MRIN",
  name: "Marin Software Incorporated",
  lastSale: "2.86",
  marketCap: "$19.91M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mrin"
  },
  {
  symbol: "MARPS",
  name: "Marine Petroleum Trust",
  lastSale: "2.5",
  marketCap: "$5M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/marps"
  },
  {
  symbol: "MRNS",
  name: "Marinus Pharmaceuticals, Inc.",
  lastSale: "13.435",
  marketCap: "$410.74M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mrns"
  },
  {
  symbol: "MRKR",
  name: "Marker Therapeutics, Inc.",
  lastSale: "1.53",
  marketCap: "$71.32M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mrkr"
  },
  {
  symbol: "MKTX",
  name: "MarketAxess Holdings, Inc.",
  lastSale: "573",
  marketCap: "$21.76B",
  ipoYear: "2004",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/mktx"
  },
  {
  symbol: "MRLN",
  name: "Marlin Business Services Corp.",
  lastSale: "6.97",
  marketCap: "$83.23M",
  ipoYear: "2003",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mrln"
  },
  {
  symbol: "MAR",
  name: "Marriott International",
  lastSale: "93.46",
  marketCap: "$30.31B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/mar"
  },
  {
  symbol: "MBII",
  name: "Marrone Bio Innovations, Inc.",
  lastSale: "1.18",
  marketCap: "$176.26M",
  ipoYear: "2013",
  sector: "Basic Industries",
  industry: "Agricultural Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/mbii"
  },
  {
  symbol: "MRTN",
  name: "Marten Transport, Ltd.",
  lastSale: "15.5",
  marketCap: "$1.28B",
  ipoYear: "1986",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mrtn"
  },
  {
  symbol: "MMLP",
  name: "Martin Midstream Partners L.P.",
  lastSale: "1.61",
  marketCap: "$62.55M",
  ipoYear: "2002",
  sector: "Energy",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/mmlp"
  },
  {
  symbol: "MRVL",
  name: "Marvell Technology Group Ltd.",
  lastSale: "41.47",
  marketCap: "$27.79B",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mrvl"
  },
  {
  symbol: "MASI",
  name: "Masimo Corporation",
  lastSale: "251.18",
  marketCap: "$13.8B",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/masi"
  },
  {
  symbol: "MCFT",
  name: "MasterCraft Boat Holdings, Inc.",
  lastSale: "20.31",
  marketCap: "$383.29M",
  ipoYear: "2015",
  sector: "Capital Goods",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/mcft"
  },
  {
  symbol: "MTCH",
  name: "Match Group, Inc.",
  lastSale: "125.78",
  marketCap: "$32.7B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/mtch"
  },
  {
  symbol: "MTLS",
  name: "Materialise NV",
  lastSale: "42.19",
  marketCap: "$2.24B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mtls"
  },
  {
  symbol: "MTRX",
  name: "Matrix Service Company",
  lastSale: "7.8",
  marketCap: "$206.39M",
  ipoYear: "1990",
  sector: "Basic Industries",
  industry: "Engineering & Construction",
  summaryQuote: "https://old.nasdaq.com/symbol/mtrx"
  },
  {
  symbol: "MAT",
  name: "Mattel, Inc.",
  lastSale: "14.27",
  marketCap: "$4.95B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/mat"
  },
  {
  symbol: "MATW",
  name: "Matthews International Corporation",
  lastSale: "22.89",
  marketCap: "$715.65M",
  ipoYear: "1994",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/matw"
  },
  {
  symbol: "MVNR",
  name: "Mavenir plc",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mvnr"
  },
  {
  symbol: "MAXN",
  name: "Maxeon Solar Technologies, Ltd.",
  lastSale: "16.97",
  marketCap: "$512.17M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/maxn"
  },
  {
  symbol: "MXIM",
  name: "Maxim Integrated Products, Inc.",
  lastSale: "70.72",
  marketCap: "$18.91B",
  ipoYear: "1988",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mxim"
  },
  {
  symbol: "MCFE",
  name: "McAfee Corp.",
  lastSale: "18.68",
  marketCap: "$8.07B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mcfe"
  },
  {
  symbol: "MGRC",
  name: "McGrath RentCorp",
  lastSale: "60.1",
  marketCap: "$1.45B",
  ipoYear: "1984",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mgrc"
  },
  {
  symbol: "MDCA",
  name: "MDC Partners Inc.",
  lastSale: "2.06",
  marketCap: "$149.85M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/mdca"
  },
  {
  symbol: "MDJH",
  name: "MDJM LTD",
  lastSale: "3.45",
  marketCap: "$40.16M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/mdjh"
  },
  {
  symbol: "MDRR",
  name: "Medalist Diversified REIT, Inc.",
  lastSale: "2.46",
  marketCap: "$11.68M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/mdrr"
  },
  {
  symbol: "MDRRP",
  name: "Medalist Diversified REIT, Inc.",
  lastSale: "11.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/mdrrp"
  },
  {
  symbol: "MBNKP",
  name: "Medallion Bank",
  lastSale: "17.3",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mbnkp"
  },
  {
  symbol: "MFIN",
  name: "Medallion Financial Corp.",
  lastSale: "2.38",
  marketCap: "$59.06M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mfin"
  },
  {
  symbol: "MFINL",
  name: "Medallion Financial Corp.",
  lastSale: "25.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mfinl"
  },
  {
  symbol: "MDIA",
  name: "Mediaco Holding Inc.",
  lastSale: "2.83",
  marketCap: "$20.08M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/mdia"
  },
  {
  symbol: "MDNA",
  name: "Medicenna Therapeutics Corp.",
  lastSale: "4",
  marketCap: "$195.19M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mdna"
  },
  {
  symbol: "MNOV",
  name: "MediciNova, Inc.",
  lastSale: "5.58",
  marketCap: "$247.6M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mnov"
  },
  {
  symbol: "MDGS",
  name: "Medigus Ltd.",
  lastSale: "2.44",
  marketCap: "$18.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/mdgs"
  },
  {
  symbol: "MDGSW",
  name: "Medigus Ltd.",
  lastSale: "0.3098",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/mdgsw"
  },
  {
  symbol: "MDWD",
  name: "MediWound Ltd.",
  lastSale: "3.54",
  marketCap: "$96.33M",
  ipoYear: "2014",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/mdwd"
  },
  {
  symbol: "MEDP",
  name: "Medpace Holdings, Inc.",
  lastSale: "109.38",
  marketCap: "$3.87B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/medp"
  },
  {
  symbol: "MEIP",
  name: "MEI Pharma, Inc.",
  lastSale: "2.83",
  marketCap: "$318.44M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/meip"
  },
  {
  symbol: "MGTX",
  name: "MeiraGTx Holdings plc",
  lastSale: "13.65",
  marketCap: "$510M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/mgtx"
  },
  {
  symbol: "MLCO",
  name: "Melco Resorts & Entertainment Limited",
  lastSale: "16.15",
  marketCap: "$7.7B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/mlco"
  },
  {
  symbol: "MTSL",
  name: "MER Telemanagement Solutions Ltd.",
  lastSale: "1.36",
  marketCap: "$6M",
  ipoYear: "1997",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/mtsl"
  },
  {
  symbol: "MELI",
  name: "MercadoLibre, Inc.",
  lastSale: "1282.47",
  marketCap: "$63.75B",
  ipoYear: "2007",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/meli"
  },
  {
  symbol: "MBWM",
  name: "Mercantile Bank Corporation",
  lastSale: "22.25",
  marketCap: "$361.41M",
  ipoYear: "1998",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mbwm"
  },
  {
  symbol: "MERC",
  name: "Mercer International Inc.",
  lastSale: "6.09",
  marketCap: "$401.14M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Paper",
  summaryQuote: "https://old.nasdaq.com/symbol/merc"
  },
  {
  symbol: "MBIN",
  name: "Merchants Bancorp",
  lastSale: "21.61",
  marketCap: "$621.19M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mbin"
  },
  {
  symbol: "MBINO",
  name: "Merchants Bancorp",
  lastSale: "24.79",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mbino"
  },
  {
  symbol: "MBINP",
  name: "Merchants Bancorp",
  lastSale: "26.2535",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mbinp"
  },
  {
  symbol: "MFH",
  name: "Mercurity Fintech Holding Inc.",
  lastSale: "2.83",
  marketCap: "$23.27M",
  ipoYear: "2015",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mfh"
  },
  {
  symbol: "MRCY",
  name: "Mercury Systems Inc",
  lastSale: "73.01",
  marketCap: "$4.09B",
  ipoYear: "1998",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/mrcy"
  },
  {
  symbol: "MREO",
  name: "Mereo BioPharma Group plc",
  lastSale: "2.47",
  marketCap: "$167.32M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mreo"
  },
  {
  symbol: "MCMJ",
  name: "Merida Merger Corp. I",
  lastSale: "9.87",
  marketCap: "$161.59M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mcmj"
  },
  {
  symbol: "MCMJW",
  name: "Merida Merger Corp. I",
  lastSale: "0.59",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mcmjw"
  },
  {
  symbol: "EBSB",
  name: "Meridian Bancorp, Inc.",
  lastSale: "11.59",
  marketCap: "$607.47M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ebsb"
  },
  {
  symbol: "VIVO",
  name: "Meridian Bioscience Inc.",
  lastSale: "19.07",
  marketCap: "$817.39M",
  ipoYear: "1986",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/vivo"
  },
  {
  symbol: "MRBK",
  name: "Meridian Corporation",
  lastSale: "17.81",
  marketCap: "$108.55M",
  ipoYear: "2017",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mrbk"
  },
  {
  symbol: "MMSI",
  name: "Merit Medical Systems, Inc.",
  lastSale: "49.04",
  marketCap: "$2.72B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/mmsi"
  },
  {
  symbol: "SNUG",
  name: "Merlyn.AI Tactical Growth & Income ETF",
  lastSale: "25.82",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/snug"
  },
  {
  symbol: "MACK",
  name: "Merrimack Pharmaceuticals, Inc.",
  lastSale: "3.85",
  marketCap: "$51.51M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mack"
  },
  {
  symbol: "MRSN",
  name: "Mersana Therapeutics, Inc.",
  lastSale: "18.72",
  marketCap: "$1.28B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mrsn"
  },
  {
  symbol: "MRUS",
  name: "Merus N.V.",
  lastSale: "13.26",
  marketCap: "$385.3M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mrus"
  },
  {
  symbol: "MESA",
  name: "Mesa Air Group, Inc.",
  lastSale: "3.42",
  marketCap: "$121.12M",
  ipoYear: "2018",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mesa"
  },
  {
  symbol: "MLAB",
  name: "Mesa Laboratories, Inc.",
  lastSale: "274.44",
  marketCap: "$1.4B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mlab"
  },
  {
  symbol: "MESO",
  name: "Mesoblast Limited",
  lastSale: "10.78",
  marketCap: "$1.26B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/meso"
  },
  {
  symbol: "CASH",
  name: "Meta Financial Group, Inc.",
  lastSale: "23.96",
  marketCap: "$829.68M",
  ipoYear: "1993",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/cash"
  },
  {
  symbol: "MTCR",
  name: "Metacrine, Inc.",
  lastSale: "8.23",
  marketCap: "$213.33M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mtcr"
  },
  {
  symbol: "METX",
  name: "Meten EdtechX Education Group Ltd.",
  lastSale: "3.05",
  marketCap: "$162.54M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/metx"
  },
  {
  symbol: "METXW",
  name: "Meten EdtechX Education Group Ltd.",
  lastSale: "0.2079",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/metxw"
  },
  {
  symbol: "MEOH",
  name: "Methanex Corporation",
  lastSale: "30.55",
  marketCap: "$2.33B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/meoh"
  },
  {
  symbol: "MCBS",
  name: "MetroCity Bankshares, Inc.",
  lastSale: "14.25",
  marketCap: "$365.86M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mcbs"
  },
  {
  symbol: "MGEE",
  name: "MGE Energy Inc.",
  lastSale: "67.68",
  marketCap: "$2.45B",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/mgee"
  },
  {
  symbol: "MGPI",
  name: "MGP Ingredients, Inc.",
  lastSale: "40.85",
  marketCap: "$690.91M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/mgpi"
  },
  {
  symbol: "MBOT",
  name: "Microbot Medical Inc. ",
  lastSale: "7.38",
  marketCap: "$52.42M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/mbot"
  },
  {
  symbol: "MCHP",
  name: "Microchip Technology Incorporated",
  lastSale: "107.95",
  marketCap: "$27.25B",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mchp"
  },
  {
  symbol: "MU",
  name: "Micron Technology, Inc.",
  lastSale: "51.96",
  marketCap: "$57.84B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mu"
  },
  {
  symbol: "MSFT",
  name: "Microsoft Corporation",
  lastSale: "213.25",
  marketCap: "$1612.77B",
  ipoYear: "1986",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/msft"
  },
  {
  symbol: "MSTR",
  name: "MicroStrategy Incorporated",
  lastSale: "175.58",
  marketCap: "$1.7B",
  ipoYear: "1998",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mstr"
  },
  {
  symbol: "MVIS",
  name: "Microvision, Inc.",
  lastSale: "2.63",
  marketCap: "$378.34M",
  ipoYear: "1996",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mvis"
  },
  {
  symbol: "MICT",
  name: "MICT, Inc.",
  lastSale: "2.42",
  marketCap: "$133.4M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/mict"
  },
  {
  symbol: "MPB",
  name: "Mid Penn Bancorp",
  lastSale: "19.71",
  marketCap: "$165.97M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mpb"
  },
  {
  symbol: "MTP",
  name: "Midatech Pharma PLC",
  lastSale: "1.94",
  marketCap: "$24.47M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mtp"
  },
  {
  symbol: "MCEP",
  name: "Mid-Con Energy Partners, LP",
  lastSale: "2.35",
  marketCap: "$33.63M",
  ipoYear: "2011",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/mcep"
  },
  {
  symbol: "MBCN",
  name: "Middlefield Banc Corp.",
  lastSale: "20.14",
  marketCap: "$128.46M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mbcn"
  },
  {
  symbol: "MSEX",
  name: "Middlesex Water Company",
  lastSale: "68.97",
  marketCap: "$1.2B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/msex"
  },
  {
  symbol: "MSBI",
  name: "Midland States Bancorp, Inc.",
  lastSale: "14.54",
  marketCap: "$328.65M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/msbi"
  },
  {
  symbol: "MSVB",
  name: "Mid-Southern Bancorp, Inc.",
  lastSale: "13.68",
  marketCap: "$45.53M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/msvb"
  },
  {
  symbol: "MOFG",
  name: "MidWestOne Financial Group, Inc.",
  lastSale: "20.79",
  marketCap: "$334.7M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mofg"
  },
  {
  symbol: "MIST",
  name: "Milestone Pharmaceuticals Inc.",
  lastSale: "5.68",
  marketCap: "$140.35M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mist"
  },
  {
  symbol: "MLND",
  name: "Millendo Therapeutics, Inc. ",
  lastSale: "1.51",
  marketCap: "$28.69M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mlnd"
  },
  {
  symbol: "TIGO",
  name: "Millicom International Cellular S.A.",
  lastSale: "29.45",
  marketCap: "$2.98B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/tigo"
  },
  {
  symbol: "MIME",
  name: "Mimecast Limited",
  lastSale: "41.745",
  marketCap: "$2.64B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mime"
  },
  {
  symbol: "MNDO",
  name: "MIND C.T.I. Ltd.",
  lastSale: "2.28",
  marketCap: "$45.36M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mndo"
  },
  {
  symbol: "MIND",
  name: "MIND Technology, Inc.",
  lastSale: "2.27",
  marketCap: "$27.65M",
  ipoYear: "1994",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mind"
  },
  {
  symbol: "MINDP",
  name: "MIND Technology, Inc.",
  lastSale: "18.56",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mindp"
  },
  {
  symbol: "NERV",
  name: "Minerva Neurosciences, Inc",
  lastSale: "3.33",
  marketCap: "$137.21M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nerv"
  },
  {
  symbol: "YGMZ",
  name: "MingZhu Logistics Holdings Limited",
  lastSale: "3.85",
  marketCap: "$46.2M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ygmz"
  },
  {
  symbol: "MGEN",
  name: "Miragen Therapeutics, Inc.",
  lastSale: "0.5199",
  marketCap: "$29.43M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/mgen"
  },
  {
  symbol: "MRTX",
  name: "Mirati Therapeutics, Inc.",
  lastSale: "209.16",
  marketCap: "$9.32B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mrtx"
  },
  {
  symbol: "MIRM",
  name: "Mirum Pharmaceuticals, Inc.",
  lastSale: "17.59",
  marketCap: "$446.77M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mirm"
  },
  {
  symbol: "MSON",
  name: "MISONIX, Inc.",
  lastSale: "11.96",
  marketCap: "$207.8M",
  ipoYear: "1992",
  sector: "Capital Goods",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/mson"
  },
  {
  symbol: "AVO",
  name: "Mission Produce, Inc.",
  lastSale: "13.23",
  marketCap: "$917.51M",
  ipoYear: "2020",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/avo"
  },
  {
  symbol: "MITK",
  name: "Mitek Systems, Inc.",
  lastSale: "13.27",
  marketCap: "$547.89M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/mitk"
  },
  {
  symbol: "MKSI",
  name: "MKS Instruments, Inc.",
  lastSale: "109.8",
  marketCap: "$6.05B",
  ipoYear: "1999",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mksi"
  },
  {
  symbol: "MMAC",
  name: "MMA Capital Holdings, Inc.",
  lastSale: "26.02",
  marketCap: "$148.43M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/mmac"
  },
  {
  symbol: "MTC",
  name: "MMTec, Inc.",
  lastSale: "1.01",
  marketCap: "$20.27M",
  ipoYear: "2019",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mtc"
  },
  {
  symbol: "MOBL",
  name: "MobileIron, Inc.",
  lastSale: "7.02",
  marketCap: "$832.26M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mobl"
  },
  {
  symbol: "MRNA",
  name: "Moderna, Inc.",
  lastSale: "70.67",
  marketCap: "$27.89B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/mrna"
  },
  {
  symbol: "MOGO",
  name: "Mogo Inc.",
  lastSale: "1.44",
  marketCap: "$41.54M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mogo"
  },
  {
  symbol: "MWK",
  name: "Mohawk Group Holdings, Inc.",
  lastSale: "8.05",
  marketCap: "$170.02M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/mwk"
  },
  {
  symbol: "MKD",
  name: "Molecular Data Inc.",
  lastSale: "1.08",
  marketCap: "$140.01M",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mkd"
  },
  {
  symbol: "MTEM",
  name: "Molecular Templates, Inc.",
  lastSale: "9.32",
  marketCap: "$465.25M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mtem"
  },
  {
  symbol: "MBRX",
  name: "Moleculin Biotech, Inc.",
  lastSale: "0.73",
  marketCap: "$45.04M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mbrx"
  },
  {
  symbol: "MOMO",
  name: "Momo Inc.",
  lastSale: "15.86",
  marketCap: "$3.32B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/momo"
  },
  {
  symbol: "MKGI",
  name: "Monaker Group, Inc.",
  lastSale: "2.25",
  marketCap: "$32.77M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mkgi"
  },
  {
  symbol: "MCRI",
  name: "Monarch Casino & Resort, Inc.",
  lastSale: "42",
  marketCap: "$763.96M",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/mcri"
  },
  {
  symbol: "MDLZ",
  name: "Mondelez International, Inc.",
  lastSale: "55.01",
  marketCap: "$78.57B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/mdlz"
  },
  {
  symbol: "MGI",
  name: "Moneygram International, Inc.",
  lastSale: "4.47",
  marketCap: "$316.19M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mgi"
  },
  {
  symbol: "MDB",
  name: "MongoDB, Inc.",
  lastSale: "244.01",
  marketCap: "$14.36B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mdb"
  },
  {
  symbol: "MNCL",
  name: "Monocle Acquisition Corporation",
  lastSale: "10.25",
  marketCap: "$228.37M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/mncl"
  },
  {
  symbol: "MNCLU",
  name: "Monocle Acquisition Corporation",
  lastSale: "11.97",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/mnclu"
  },
  {
  symbol: "MNCLW",
  name: "Monocle Acquisition Corporation",
  lastSale: "0.5102",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/mnclw"
  },
  {
  symbol: "MPWR",
  name: "Monolithic Power Systems, Inc.",
  lastSale: "319.88",
  marketCap: "$14.37B",
  ipoYear: "2004",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mpwr"
  },
  {
  symbol: "MNPR",
  name: "Monopar Therapeutics Inc.",
  lastSale: "4.92",
  marketCap: "$52.82M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mnpr"
  },
  {
  symbol: "MNRO",
  name: "Monro, Inc. ",
  lastSale: "43.1",
  marketCap: "$1.43B",
  ipoYear: "1991",
  sector: "Consumer Services",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/mnro"
  },
  {
  symbol: "MRCC",
  name: "Monroe Capital Corporation",
  lastSale: "6.49",
  marketCap: "$138.26M",
  ipoYear: "2012",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mrcc"
  },
  {
  symbol: "MRCCL",
  name: "Monroe Capital Corporation",
  lastSale: "23.72",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/mrccl"
  },
  {
  symbol: "MNST",
  name: "Monster Beverage Corporation",
  lastSale: "80.39",
  marketCap: "$42.4B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/mnst"
  },
  {
  symbol: "MAACU",
  name: "Montes Archimedes Acquisition Corp.",
  lastSale: "9.8999",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/maacu"
  },
  {
  symbol: "MORN",
  name: "Morningstar, Inc.",
  lastSale: "183.19",
  marketCap: "$7.86B",
  ipoYear: "2005",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/morn"
  },
  {
  symbol: "MORF",
  name: "Morphic Holding, Inc.",
  lastSale: "26.82",
  marketCap: "$822.25M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/morf"
  },
  {
  symbol: "MOR",
  name: "MorphoSys AG",
  lastSale: "25.7",
  marketCap: "$3.36B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mor"
  },
  {
  symbol: "MOSY",
  name: "MoSys, Inc.",
  lastSale: "1.83",
  marketCap: "$6.47M",
  ipoYear: "2001",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/mosy"
  },
  {
  symbol: "MOTNU",
  name: "Motion Acquisition Corp.",
  lastSale: "9.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/motnu"
  },
  {
  symbol: "MPAA",
  name: "Motorcar Parts of America, Inc.",
  lastSale: "14.81",
  marketCap: "$281.69M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/mpaa"
  },
  {
  symbol: "MOTS",
  name: "Motus GI Holdings, Inc.",
  lastSale: "0.7837",
  marketCap: "$25.22M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/mots"
  },
  {
  symbol: "MCAC",
  name: "Mountain Crest Acquisition Corp.",
  lastSale: "10",
  marketCap: "$82.42M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mcac"
  },
  {
  symbol: "MCACR",
  name: "Mountain Crest Acquisition Corp.",
  lastSale: "0.6499",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mcacr"
  },
  {
  symbol: "MCACU",
  name: "Mountain Crest Acquisition Corp.",
  lastSale: "10.705",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/mcacu"
  },
  {
  symbol: "MOXC",
  name: "Moxian, Inc.",
  lastSale: "1.22",
  marketCap: "$19.75M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/moxc"
  },
  {
  symbol: "COOP",
  name: "Mr. Cooper Group Inc.",
  lastSale: "22.04",
  marketCap: "$2.03B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/coop"
  },
  {
  symbol: "MTBC",
  name: "MTBC, Inc.",
  lastSale: "8.2",
  marketCap: "$104.14M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mtbc"
  },
  {
  symbol: "MTBCP",
  name: "MTBC, Inc.",
  lastSale: "25.3828",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mtbcp"
  },
  {
  symbol: "MTSC",
  name: "MTS Systems Corporation",
  lastSale: "23.98",
  marketCap: "$462.25M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/mtsc"
  },
  {
  symbol: "GRIL",
  name: "Muscle Maker, Inc",
  lastSale: "1.76",
  marketCap: "$18.95M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/gril"
  },
  {
  symbol: "MBIO",
  name: "Mustang Bio, Inc.",
  lastSale: "2.72",
  marketCap: "$153.88M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mbio"
  },
  {
  symbol: "MVBF",
  name: "MVB Financial Corp.",
  lastSale: "16.63",
  marketCap: "$198.98M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/mvbf"
  },
  {
  symbol: "MYSZ",
  name: "My Size, Inc.",
  lastSale: "1.01",
  marketCap: "$7.31M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/mysz"
  },
  {
  symbol: "MYL",
  name: "Mylan N.V.",
  lastSale: "14.46",
  marketCap: "$7.48B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/myl"
  },
  {
  symbol: "MYOK",
  name: "MyoKardia, Inc.",
  lastSale: "222.91",
  marketCap: "$11.88B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/myok"
  },
  {
  symbol: "MYOS",
  name: "MYOS RENS Technology Inc.",
  lastSale: "1.035",
  marketCap: "$12.62M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/myos"
  },
  {
  symbol: "MYRG",
  name: "MYR Group, Inc.",
  lastSale: "43.74",
  marketCap: "$730.85M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/myrg"
  },
  {
  symbol: "MYGN",
  name: "Myriad Genetics, Inc.",
  lastSale: "14.35",
  marketCap: "$1.08B",
  ipoYear: "1995",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/mygn"
  },
  {
  symbol: "NBRV",
  name: "Nabriva Therapeutics plc",
  lastSale: "0.5335",
  marketCap: "$76.8M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nbrv"
  },
  {
  symbol: "NAKD",
  name: "Naked Brand Group Limited",
  lastSale: "0.092",
  marketCap: "$4M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/nakd"
  },
  {
  symbol: "NNDM",
  name: "Nano Dimension Ltd.",
  lastSale: "3.25",
  marketCap: "$174.54M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/nndm"
  },
  {
  symbol: "NSTG",
  name: "NanoString Technologies, Inc.",
  lastSale: "36.935",
  marketCap: "$1.62B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/nstg"
  },
  {
  symbol: "NAOV",
  name: "NanoVibronix, Inc.",
  lastSale: "0.637",
  marketCap: "$6.06M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/naov"
  },
  {
  symbol: "NNOX",
  name: "NANO-X IMAGING LTD",
  lastSale: "29.17",
  marketCap: "$1.31B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical Electronics",
  summaryQuote: "https://old.nasdaq.com/symbol/nnox"
  },
  {
  symbol: "NH",
  name: "NantHealth, Inc.",
  lastSale: "2.34",
  marketCap: "$259.8M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nh"
  },
  {
  symbol: "NK",
  name: "NantKwest, Inc.",
  lastSale: "8.35",
  marketCap: "$901.55M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/nk"
  },
  {
  symbol: "NSSC",
  name: "NAPCO Security Technologies, Inc.",
  lastSale: "24.94",
  marketCap: "$457.58M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/nssc"
  },
  {
  symbol: "NDAQ",
  name: "Nasdaq, Inc.",
  lastSale: "125.1",
  marketCap: "$20.55B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/ndaq"
  },
  {
  symbol: "NTRA",
  name: "Natera, Inc.",
  lastSale: "70.64",
  marketCap: "$5.94B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/ntra"
  },
  {
  symbol: "NATH",
  name: "Nathan&#39;s Famous, Inc.",
  lastSale: "51",
  marketCap: "$209.85M",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/nath"
  },
  {
  symbol: "NKSH",
  name: "National Bankshares, Inc.",
  lastSale: "27.31",
  marketCap: "$177.23M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/nksh"
  },
  {
  symbol: "FIZZ",
  name: "National Beverage Corp.",
  lastSale: "84.67",
  marketCap: "$3.95B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/fizz"
  },
  {
  symbol: "NCMI",
  name: "National CineMedia, Inc.",
  lastSale: "1.96",
  marketCap: "$156.04M",
  ipoYear: "2007",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/ncmi"
  },
  {
  symbol: "NESR",
  name: "National Energy Services Reunited Corp.",
  lastSale: "8.06",
  marketCap: "$705.21M",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/nesr"
  },
  {
  symbol: "NESRW",
  name: "National Energy Services Reunited Corp.",
  lastSale: "1.09",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/nesrw"
  },
  {
  symbol: "NGHC",
  name: "National General Holdings Corp",
  lastSale: "33.99",
  marketCap: "$3.85B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nghc"
  },
  {
  symbol: "NGHCN",
  name: "National General Holdings Corp",
  lastSale: "25.82",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nghcn"
  },
  {
  symbol: "NGHCO",
  name: "National General Holdings Corp",
  lastSale: "25.24",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nghco"
  },
  {
  symbol: "NGHCP",
  name: "National General Holdings Corp",
  lastSale: "25.2504",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nghcp"
  },
  {
  symbol: "NGHCZ",
  name: "National General Holdings Corp",
  lastSale: "25.4987",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nghcz"
  },
  {
  symbol: "NHLD",
  name: "National Holdings Corporation",
  lastSale: "1.8234",
  marketCap: "$24.77M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/nhld"
  },
  {
  symbol: "NHLDW",
  name: "National Holdings Corporation",
  lastSale: "0.1003",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/nhldw"
  },
  {
  symbol: "NATI",
  name: "National Instruments Corporation",
  lastSale: "34.02",
  marketCap: "$4.47B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/nati"
  },
  {
  symbol: "NRC",
  name: "National Research Corporation",
  lastSale: "51.8",
  marketCap: "$1.31B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/nrc"
  },
  {
  symbol: "NSEC",
  name: "National Security Group, Inc.",
  lastSale: "11.86",
  marketCap: "$30.02M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/nsec"
  },
  {
  symbol: "EYE",
  name: "National Vision Holdings, Inc.",
  lastSale: "42.17",
  marketCap: "$3.39B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Ophthalmic Goods",
  summaryQuote: "https://old.nasdaq.com/symbol/eye"
  },
  {
  symbol: "NWLI",
  name: "National Western Life Group, Inc.",
  lastSale: "177.92",
  marketCap: "$646.92M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/nwli"
  },
  {
  symbol: "NAII",
  name: "Natural Alternatives International, Inc.",
  lastSale: "8.1",
  marketCap: "$52.83M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/naii"
  },
  {
  symbol: "NHTC",
  name: "Natural Health Trends Corp.",
  lastSale: "5.56",
  marketCap: "$63.51M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Consumer Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/nhtc"
  },
  {
  symbol: "NATR",
  name: "Nature&#39;s Sunshine Products, Inc.",
  lastSale: "10.93",
  marketCap: "$213.25M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/natr"
  },
  {
  symbol: "NTUS",
  name: "Natus Medical Incorporated",
  lastSale: "18.05",
  marketCap: "$611.38M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/ntus"
  },
  {
  symbol: "JSM",
  name: "Navient Corporation",
  lastSale: "22.06",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/jsm"
  },
  {
  symbol: "NAVI",
  name: "Navient Corporation",
  lastSale: "8.57",
  marketCap: "$1.6B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/navi"
  },
  {
  symbol: "NMCI",
  name: "Navios Maritime Containers L.P.",
  lastSale: "1.51",
  marketCap: "$52.25M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/nmci"
  },
  {
  symbol: "NBTB",
  name: "NBT Bancorp Inc.",
  lastSale: "28.35",
  marketCap: "$1.24B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/nbtb"
  },
  {
  symbol: "NCNO",
  name: "nCino, Inc.",
  lastSale: "73.46",
  marketCap: "$6.7B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ncno"
  },
  {
  symbol: "NCSM",
  name: "NCS Multistage Holdings, Inc.",
  lastSale: "0.7",
  marketCap: "$33.03M",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ncsm"
  },
  {
  symbol: "NKTR",
  name: "Nektar Therapeutics",
  lastSale: "16.48",
  marketCap: "$2.95B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nktr"
  },
  {
  symbol: "NMRD",
  name: "Nemaura Medical Inc.",
  lastSale: "3.7",
  marketCap: "$84.71M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nmrd"
  },
  {
  symbol: "NEOG",
  name: "Neogen Corporation",
  lastSale: "71.18",
  marketCap: "$3.78B",
  ipoYear: "1989",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/neog"
  },
  {
  symbol: "NEO",
  name: "NeoGenomics, Inc.",
  lastSale: "41.25",
  marketCap: "$4.56B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Precision Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/neo"
  },
  {
  symbol: "NLTX",
  name: "Neoleukin Therapeutics, Inc.",
  lastSale: "11.31",
  marketCap: "$472.18M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nltx"
  },
  {
  symbol: "NEON",
  name: "Neonode Inc.",
  lastSale: "9.05",
  marketCap: "$97.59M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/neon"
  },
  {
  symbol: "NEOS",
  name: "Neos Therapeutics, Inc.",
  lastSale: "0.6835",
  marketCap: "$34.01M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/neos"
  },
  {
  symbol: "NVCN",
  name: "Neovasc Inc.",
  lastSale: "1.83",
  marketCap: "$41.44M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nvcn"
  },
  {
  symbol: "NEPH",
  name: "Nephros, Inc.",
  lastSale: "6.48",
  marketCap: "$58.58M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/neph"
  },
  {
  symbol: "NEPT",
  name: "Neptune Wellness Solutions Inc.",
  lastSale: "1.84",
  marketCap: "$205.29M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nept"
  },
  {
  symbol: "UEPS",
  name: "Net 1 UEPS Technologies, Inc.",
  lastSale: "3.06",
  marketCap: "$173.31M",
  ipoYear: "2005",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/ueps"
  },
  {
  symbol: "NETE",
  name: "Net Element, Inc.",
  lastSale: "6.31",
  marketCap: "$30.57M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nete"
  },
  {
  symbol: "NTAP",
  name: "NetApp, Inc.",
  lastSale: "44.05",
  marketCap: "$9.78B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ntap"
  },
  {
  symbol: "NTES",
  name: "NetEase, Inc.",
  lastSale: "88.42",
  marketCap: "$60.61B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ntes"
  },
  {
  symbol: "NFIN",
  name: "Netfin Acquisition Corp.",
  lastSale: "10.6",
  marketCap: "$342.44M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nfin"
  },
  {
  symbol: "NFINU",
  name: "Netfin Acquisition Corp.",
  lastSale: "12.2",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nfinu"
  },
  {
  symbol: "NFINW",
  name: "Netfin Acquisition Corp.",
  lastSale: "1.7",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nfinw"
  },
  {
  symbol: "NFLX",
  name: "Netflix, Inc.",
  lastSale: "488.93",
  marketCap: "$216.01B",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Consumer Electronics/Video Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/nflx"
  },
  {
  symbol: "NTGR",
  name: "NETGEAR, Inc.",
  lastSale: "33.6",
  marketCap: "$1B",
  ipoYear: "2003",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ntgr"
  },
  {
  symbol: "NTCT",
  name: "NetScout Systems, Inc.",
  lastSale: "22.09",
  marketCap: "$1.6B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ntct"
  },
  {
  symbol: "NTWK",
  name: "NetSol Technologies Inc.",
  lastSale: "2.62",
  marketCap: "$30.73M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ntwk"
  },
  {
  symbol: "NBSE",
  name: "NeuBase Therapeutics, Inc. ",
  lastSale: "8.62",
  marketCap: "$199.31M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nbse"
  },
  {
  symbol: "NRBO",
  name: "NeuroBo Pharmaceuticals, Inc.",
  lastSale: "5.6",
  marketCap: "$91.99M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nrbo"
  },
  {
  symbol: "NBIX",
  name: "Neurocrine Biosciences, Inc.",
  lastSale: "100.14",
  marketCap: "$9.34B",
  ipoYear: "1996",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/nbix"
  },
  {
  symbol: "NURO",
  name: "NeuroMetrix, Inc.",
  lastSale: "1.57",
  marketCap: "$5.94M",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nuro"
  },
  {
  symbol: "STIM",
  name: "Neuronetics, Inc.",
  lastSale: "5.4",
  marketCap: "$101.86M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/stim"
  },
  {
  symbol: "NTRP",
  name: "Neurotrope, Inc.",
  lastSale: "1.11",
  marketCap: "$26.39M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ntrp"
  },
  {
  symbol: "NFE",
  name: "New Fortress Energy Inc.",
  lastSale: "49.16",
  marketCap: "$8.29B",
  ipoYear: "2019",
  sector: "Public Utilities",
  industry: "Oil/Gas Transmission",
  summaryQuote: "https://old.nasdaq.com/symbol/nfe"
  },
  {
  symbol: "NMFC",
  name: "New Mountain Finance Corporation",
  lastSale: "9.45",
  marketCap: "$915.02M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/nmfc"
  },
  {
  symbol: "NMFCL",
  name: "New Mountain Finance Corporation",
  lastSale: "25.15",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/nmfcl"
  },
  {
  symbol: "NPA",
  name: "New Providence Acquisition Corp.",
  lastSale: "10.1101",
  marketCap: "$290.67M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/npa"
  },
  {
  symbol: "NPAUU",
  name: "New Providence Acquisition Corp.",
  lastSale: "10.4",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/npauu"
  },
  {
  symbol: "NPAWW",
  name: "New Providence Acquisition Corp.",
  lastSale: "0.89",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/npaww"
  },
  {
  symbol: "NYMT",
  name: "New York Mortgage Trust, Inc.",
  lastSale: "2.65",
  marketCap: "$1B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/nymt"
  },
  {
  symbol: "NYMTM",
  name: "New York Mortgage Trust, Inc.",
  lastSale: "19.13",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/nymtm"
  },
  {
  symbol: "NYMTN",
  name: "New York Mortgage Trust, Inc.",
  lastSale: "19.71",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/nymtn"
  },
  {
  symbol: "NYMTO",
  name: "New York Mortgage Trust, Inc.",
  lastSale: "20.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/nymto"
  },
  {
  symbol: "NYMTP",
  name: "New York Mortgage Trust, Inc.",
  lastSale: "20.195",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/nymtp"
  },
  {
  symbol: "NBEV",
  name: "NewAge, Inc.",
  lastSale: "2.71",
  marketCap: "$266.7M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/nbev"
  },
  {
  symbol: "NEWA",
  name: "Newater Technology, Inc.",
  lastSale: "3.57",
  marketCap: "$38.59M",
  ipoYear: "2017",
  sector: "Basic Industries",
  industry: "Miscellaneous",
  summaryQuote: "https://old.nasdaq.com/symbol/newa"
  },
  {
  symbol: "NBAC",
  name: "Newborn Acquisition Corp.",
  lastSale: "9.92",
  marketCap: "$74M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nbac"
  },
  {
  symbol: "NBACR",
  name: "Newborn Acquisition Corp.",
  lastSale: "0.26",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nbacr"
  },
  {
  symbol: "NBACU",
  name: "Newborn Acquisition Corp.",
  lastSale: "10.5",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nbacu"
  },
  {
  symbol: "NBACW",
  name: "Newborn Acquisition Corp.",
  lastSale: "0.2801",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nbacw"
  },
  {
  symbol: "NWL",
  name: "Newell Brands Inc.",
  lastSale: "17.19",
  marketCap: "$7.29B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Plastic Products",
  summaryQuote: "https://old.nasdaq.com/symbol/nwl"
  },
  {
  symbol: "NWGI",
  name: "Newgioco Group, Inc.",
  lastSale: "1.67",
  marketCap: "$27.83M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/nwgi"
  },
  {
  symbol: "NHIC",
  name: "NewHold Investment Corp.",
  lastSale: "9.69",
  marketCap: "$145.35M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nhic"
  },
  {
  symbol: "NHICU",
  name: "NewHold Investment Corp.",
  lastSale: "9.95",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nhicu"
  },
  {
  symbol: "NHICW",
  name: "NewHold Investment Corp.",
  lastSale: "0.6201",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nhicw"
  },
  {
  symbol: "NMRK",
  name: "Newmark Group, Inc.",
  lastSale: "4.57",
  marketCap: "$819.2M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/nmrk"
  },
  {
  symbol: "NWS",
  name: "News Corporation",
  lastSale: "13.35",
  marketCap: "$7.88B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Newspapers/Magazines",
  summaryQuote: "https://old.nasdaq.com/symbol/nws"
  },
  {
  symbol: "NWSA",
  name: "News Corporation",
  lastSale: "13.43",
  marketCap: "$7.93B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Newspapers/Magazines",
  summaryQuote: "https://old.nasdaq.com/symbol/nwsa"
  },
  {
  symbol: "NEWT",
  name: "Newtek Business Services Corp.",
  lastSale: "17.62",
  marketCap: "$373.25M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/newt"
  },
  {
  symbol: "NEWTI",
  name: "Newtek Business Services Corp.",
  lastSale: "25.263",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/newti"
  },
  {
  symbol: "NEWTL",
  name: "Newtek Business Services Corp.",
  lastSale: "25.225",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/newtl"
  },
  {
  symbol: "NXMD",
  name: "Nexeon Medsystems, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/nxmd"
  },
  {
  symbol: "NXST",
  name: "Nexstar Media Group, Inc.",
  lastSale: "84.79",
  marketCap: "$3.84B",
  ipoYear: "2003",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/nxst"
  },
  {
  symbol: "NXTC",
  name: "NextCure, Inc.",
  lastSale: "10.31",
  marketCap: "$284.07M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nxtc"
  },
  {
  symbol: "NEXT",
  name: "NextDecade Corporation",
  lastSale: "2.55",
  marketCap: "$307.67M",
  ipoYear: "2015",
  sector: "Public Utilities",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/next"
  },
  {
  symbol: "NGACU",
  name: "NextGen Acquisition Corporation",
  lastSale: "9.9",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ngacu"
  },
  {
  symbol: "NXGN",
  name: "NextGen Healthcare, Inc.",
  lastSale: "14.13",
  marketCap: "$942.95M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nxgn"
  },
  {
  symbol: "NGM",
  name: "NGM Biopharmaceuticals, Inc.",
  lastSale: "17.44",
  marketCap: "$1.2B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ngm"
  },
  {
  symbol: "NODK",
  name: "NI Holdings, Inc.",
  lastSale: "16.56",
  marketCap: "$355.58M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nodk"
  },
  {
  symbol: "EGOV",
  name: "NIC Inc.",
  lastSale: "20.99",
  marketCap: "$1.41B",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/egov"
  },
  {
  symbol: "NICE",
  name: "NICE Ltd",
  lastSale: "230.08",
  marketCap: "$14.43B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/nice"
  },
  {
  symbol: "NICK",
  name: "Nicholas Financial, Inc.",
  lastSale: "7.8",
  marketCap: "$60.84M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/nick"
  },
  {
  symbol: "NCBS",
  name: "Nicolet Bankshares Inc.",
  lastSale: "61.66",
  marketCap: "$628.69M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ncbs"
  },
  {
  symbol: "NKLA",
  name: "Nikola Corporation",
  lastSale: "21.39",
  marketCap: "$8.11B",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/nkla"
  },
  {
  symbol: "NIU",
  name: "Niu Technologies",
  lastSale: "27.78",
  marketCap: "$2.08B",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/niu"
  },
  {
  symbol: "NKTX",
  name: "Nkarta, Inc.",
  lastSale: "32.12",
  marketCap: "$1.05B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nktx"
  },
  {
  symbol: "LASR",
  name: "nLIGHT, Inc.",
  lastSale: "22.64",
  marketCap: "$880.11M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/lasr"
  },
  {
  symbol: "NMIH",
  name: "NMI Holdings Inc",
  lastSale: "21.97",
  marketCap: "$1.86B",
  ipoYear: "2013",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/nmih"
  },
  {
  symbol: "NNBR",
  name: "NN, Inc.",
  lastSale: "5.76",
  marketCap: "$246.22M",
  ipoYear: "1994",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/nnbr"
  },
  {
  symbol: "NBLX",
  name: "Noble Midstream Partners LP",
  lastSale: "8.35",
  marketCap: "$754.49M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/nblx"
  },
  {
  symbol: "NDLS",
  name: "Noodles & Company",
  lastSale: "7.91",
  marketCap: "$350.85M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/ndls"
  },
  {
  symbol: "NDSN",
  name: "Nordson Corporation",
  lastSale: "197.75",
  marketCap: "$11.48B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ndsn"
  },
  {
  symbol: "NSYS",
  name: "Nortech Systems Incorporated",
  lastSale: "4.7797",
  marketCap: "$12.7M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/nsys"
  },
  {
  symbol: "NMMCU",
  name: "North Mountain Merger Corp.",
  lastSale: "10.15",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nmmcu"
  },
  {
  symbol: "NBN",
  name: "Northeast Bank",
  lastSale: "19.84",
  marketCap: "$162.58M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/nbn"
  },
  {
  symbol: "NTIC",
  name: "Northern Technologies International Corporation",
  lastSale: "8.19",
  marketCap: "$74.53M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/ntic"
  },
  {
  symbol: "NTRS",
  name: "Northern Trust Corporation",
  lastSale: "80.7",
  marketCap: "$16.79B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ntrs"
  },
  {
  symbol: "NTRSO",
  name: "Northern Trust Corporation",
  lastSale: "26.82",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ntrso"
  },
  {
  symbol: "NFBK",
  name: "Northfield Bancorp, Inc.",
  lastSale: "10.35",
  marketCap: "$549.85M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/nfbk"
  },
  {
  symbol: "NRIM",
  name: "Northrim BanCorp Inc",
  lastSale: "31.03",
  marketCap: "$197.6M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/nrim"
  },
  {
  symbol: "NWBI",
  name: "Northwest Bancshares, Inc.",
  lastSale: "10.5",
  marketCap: "$1.34B",
  ipoYear: "2009",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/nwbi"
  },
  {
  symbol: "NWPX",
  name: "Northwest Pipe Company",
  lastSale: "29.28",
  marketCap: "$286.97M",
  ipoYear: "1995",
  sector: "Basic Industries",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/nwpx"
  },
  {
  symbol: "NWE",
  name: "NorthWestern Corporation",
  lastSale: "55.91",
  marketCap: "$2.83B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/nwe"
  },
  {
  symbol: "NLOK",
  name: "NortonLifeLock Inc.",
  lastSale: "20.8",
  marketCap: "$12.29B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/nlok"
  },
  {
  symbol: "NCLH",
  name: "Norwegian Cruise Line Holdings Ltd.",
  lastSale: "16.53",
  marketCap: "$4.56B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/nclh"
  },
  {
  symbol: "NWFL",
  name: "Norwood Financial Corp.",
  lastSale: "24.26",
  marketCap: "$198.8M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/nwfl"
  },
  {
  symbol: "NVFY",
  name: "Nova Lifestyle, Inc",
  lastSale: "2.1797",
  marketCap: "$12.09M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/nvfy"
  },
  {
  symbol: "NVMI",
  name: "Nova Measuring Instruments Ltd.",
  lastSale: "56.91",
  marketCap: "$1.6B",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/nvmi"
  },
  {
  symbol: "NOVN",
  name: "Novan, Inc.",
  lastSale: "0.5005",
  marketCap: "$68.8M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/novn"
  },
  {
  symbol: "NOVT",
  name: "Novanta Inc.",
  lastSale: "113.1",
  marketCap: "$3.98B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/novt"
  },
  {
  symbol: "NVAX",
  name: "Novavax, Inc.",
  lastSale: "89.59",
  marketCap: "$5.49B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/nvax"
  },
  {
  symbol: "NVCR",
  name: "NovoCure Limited",
  lastSale: "119.5",
  marketCap: "$12.08B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nvcr"
  },
  {
  symbol: "NOVS",
  name: "Novus Capital Corporation",
  lastSale: "11.53",
  marketCap: "$145.85M",
  ipoYear: "2020",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/novs"
  },
  {
  symbol: "NOVSU",
  name: "Novus Capital Corporation",
  lastSale: "14",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/novsu"
  },
  {
  symbol: "NOVSW",
  name: "Novus Capital Corporation",
  lastSale: "2.6",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/novsw"
  },
  {
  symbol: "NVUS",
  name: "Novus Therapeutics, Inc.",
  lastSale: "15.65",
  marketCap: "$19.6M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nvus"
  },
  {
  symbol: "NUAN",
  name: "Nuance Communications, Inc.",
  lastSale: "33.37",
  marketCap: "$9.42B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/nuan"
  },
  {
  symbol: "NCNA",
  name: "NuCana plc",
  lastSale: "5.35",
  marketCap: "$273.78M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ncna"
  },
  {
  symbol: "NRIX",
  name: "Nurix Therapeutics, Inc.",
  lastSale: "28.7",
  marketCap: "$1.12B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/nrix"
  },
  {
  symbol: "NTNX",
  name: "Nutanix, Inc.",
  lastSale: "24.54",
  marketCap: "$4.96B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ntnx"
  },
  {
  symbol: "NUVA",
  name: "NuVasive, Inc.",
  lastSale: "49.62",
  marketCap: "$2.54B",
  ipoYear: "2004",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/nuva"
  },
  {
  symbol: "QQQX",
  name: "Nuveen NASDAQ 100 Dynamic Overwrite Fund",
  lastSale: "23.65",
  marketCap: "$968.63M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqqx"
  },
  {
  symbol: "NUZE",
  name: "NuZee, Inc.",
  lastSale: "15.14",
  marketCap: "$220.56M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/nuze"
  },
  {
  symbol: "NVEE",
  name: "NV5 Global, Inc.",
  lastSale: "58.09",
  marketCap: "$767.61M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nvee"
  },
  {
  symbol: "NVEC",
  name: "NVE Corporation",
  lastSale: "48.19",
  marketCap: "$232.91M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/nvec"
  },
  {
  symbol: "NVDA",
  name: "NVIDIA Corporation",
  lastSale: "535.87",
  marketCap: "$331.01B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/nvda"
  },
  {
  symbol: "NXPI",
  name: "NXP Semiconductors N.V.",
  lastSale: "133.23",
  marketCap: "$37.2B",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/nxpi"
  },
  {
  symbol: "NXTD",
  name: "NXT-ID Inc.",
  lastSale: "0.4683",
  marketCap: "$16.4M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/nxtd"
  },
  {
  symbol: "NYMX",
  name: "Nymox Pharmaceutical Corporation",
  lastSale: "2.07",
  marketCap: "$158.06M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/nymx"
  },
  {
  symbol: "OIIM",
  name: "O2Micro International Limited",
  lastSale: "5.62",
  marketCap: "$151.76M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/oiim"
  },
  {
  symbol: "OVLY",
  name: "Oak Valley Bancorp (CA)",
  lastSale: "13.94",
  marketCap: "$114.52M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ovly"
  },
  {
  symbol: "OCSL",
  name: "Oaktree Specialty Lending Corporation",
  lastSale: "4.72",
  marketCap: "$665.33M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ocsl"
  },
  {
  symbol: "OCSI",
  name: "Oaktree Strategic Income Corporation",
  lastSale: "6.42",
  marketCap: "$189.18M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ocsi"
  },
  {
  symbol: "OMP",
  name: "Oasis Midstream Partners LP",
  lastSale: "8.41",
  marketCap: "$284.35M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/omp"
  },
  {
  symbol: "OBLN",
  name: "Obalon Therapeutics, Inc.",
  lastSale: "0.96",
  marketCap: "$7.42M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/obln"
  },
  {
  symbol: "OBSV",
  name: "ObsEva SA",
  lastSale: "2.2",
  marketCap: "$117.68M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/obsv"
  },
  {
  symbol: "OBCI",
  name: "Ocean Bio-Chem, Inc.",
  lastSale: "15.69",
  marketCap: "$148.46M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/obci"
  },
  {
  symbol: "OPTT",
  name: "Ocean Power Technologies, Inc.",
  lastSale: "1.89",
  marketCap: "$43.64M",
  ipoYear: "2007",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/optt"
  },
  {
  symbol: "OCFC",
  name: "OceanFirst Financial Corp.",
  lastSale: "16.125",
  marketCap: "$973.3M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/ocfc"
  },
  {
  symbol: "OCFCP",
  name: "OceanFirst Financial Corp.",
  lastSale: "26.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/ocfcp"
  },
  {
  symbol: "OFED",
  name: "Oconee Federal Financial Corp.",
  lastSale: "24.55",
  marketCap: "$137.59M",
  ipoYear: "2011",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/ofed"
  },
  {
  symbol: "OCGN",
  name: "Ocugen, Inc.",
  lastSale: "0.3",
  marketCap: "$48.61M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ocgn"
  },
  {
  symbol: "OCUL",
  name: "Ocular Therapeutix, Inc.",
  lastSale: "9.69",
  marketCap: "$691.17M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ocul"
  },
  {
  symbol: "ODT",
  name: "Odonate Therapeutics, Inc.",
  lastSale: "15.52",
  marketCap: "$498.61M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/odt"
  },
  {
  symbol: "OMEX",
  name: "Odyssey Marine Exploration, Inc.",
  lastSale: "6.99",
  marketCap: "$84.76M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/omex"
  },
  {
  symbol: "OPI",
  name: "Office Properties Income Trust",
  lastSale: "18.46",
  marketCap: "$890.27M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/opi"
  },
  {
  symbol: "OPINI",
  name: "Office Properties Income Trust",
  lastSale: "25.3805",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/opini"
  },
  {
  symbol: "OPINL",
  name: "Office Properties Income Trust",
  lastSale: "25.79",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/opinl"
  },
  {
  symbol: "OFS",
  name: "OFS Capital Corporation",
  lastSale: "4.14",
  marketCap: "$55.47M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ofs"
  },
  {
  symbol: "OFSSG",
  name: "OFS Capital Corporation",
  lastSale: "24.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ofssg"
  },
  {
  symbol: "OFSSI",
  name: "OFS Capital Corporation",
  lastSale: "21.458",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ofssi"
  },
  {
  symbol: "OFSSL",
  name: "OFS Capital Corporation",
  lastSale: "22.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ofssl"
  },
  {
  symbol: "OFSSZ",
  name: "OFS Capital Corporation",
  lastSale: "22.67",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ofssz"
  },
  {
  symbol: "OCCI",
  name: "OFS Credit Company, Inc.",
  lastSale: "9.45",
  marketCap: "$30.66M",
  ipoYear: "2018",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/occi"
  },
  {
  symbol: "OCCIP",
  name: "OFS Credit Company, Inc.",
  lastSale: "24.0999",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/occip"
  },
  {
  symbol: "OVBC",
  name: "Ohio Valley Banc Corp.",
  lastSale: "22.65",
  marketCap: "$108.44M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ovbc"
  },
  {
  symbol: "OKTA",
  name: "Okta, Inc.",
  lastSale: "221.33",
  marketCap: "$28.35B",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/okta"
  },
  {
  symbol: "ODFL",
  name: "Old Dominion Freight Line, Inc.",
  lastSale: "189.59",
  marketCap: "$22.24B",
  ipoYear: "1991",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/odfl"
  },
  {
  symbol: "ONB",
  name: "Old National Bancorp",
  lastSale: "14",
  marketCap: "$2.31B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/onb"
  },
  {
  symbol: "OPOF",
  name: "Old Point Financial Corporation",
  lastSale: "15.35",
  marketCap: "$80.15M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/opof"
  },
  {
  symbol: "OSBC",
  name: "Old Second Bancorp, Inc.",
  lastSale: "9.13",
  marketCap: "$268.89M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/osbc"
  },
  {
  symbol: "OLLI",
  name: "Ollie&#39;s Bargain Outlet Holdings, Inc.",
  lastSale: "92.14",
  marketCap: "$6.02B",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Department/Specialty Retail Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/olli"
  },
  {
  symbol: "ZEUS",
  name: "Olympic Steel, Inc.",
  lastSale: "12",
  marketCap: "$132.9M",
  ipoYear: "1994",
  sector: "Basic Industries",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/zeus"
  },
  {
  symbol: "OFLX",
  name: "Omega Flex, Inc.",
  lastSale: "162.18",
  marketCap: "$1.64B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/oflx"
  },
  {
  symbol: "OMER",
  name: "Omeros Corporation",
  lastSale: "10.54",
  marketCap: "$647.35M",
  ipoYear: "2009",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/omer"
  },
  {
  symbol: "OMCL",
  name: "Omnicell, Inc.",
  lastSale: "85.59",
  marketCap: "$3.66B",
  ipoYear: "2001",
  sector: "Technology",
  industry: "Computer Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/omcl"
  },
  {
  symbol: "ON",
  name: "ON Semiconductor Corporation",
  lastSale: "25.17",
  marketCap: "$10.34B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/on"
  },
  {
  symbol: "ONCY",
  name: "Oncolytics Biotech Inc.",
  lastSale: "2.27",
  marketCap: "$94.56M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/oncy"
  },
  {
  symbol: "ONTX",
  name: "Onconova Therapeutics, Inc.",
  lastSale: "0.2606",
  marketCap: "$47.84M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ontx"
  },
  {
  symbol: "ONTXW",
  name: "Onconova Therapeutics, Inc.",
  lastSale: "0.045",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ontxw"
  },
  {
  symbol: "ONCR",
  name: "Oncorus, Inc.",
  lastSale: "17.82",
  marketCap: "$389.29M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/oncr"
  },
  {
  symbol: "ONCS",
  name: "OncoSec Medical Incorporated",
  lastSale: "3.58",
  marketCap: "$82.54M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/oncs"
  },
  {
  symbol: "ONCT",
  name: "Oncternal Therapeutics, Inc. ",
  lastSale: "1.57",
  marketCap: "$34.64M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/onct"
  },
  {
  symbol: "OSS",
  name: "One Stop Systems, Inc.",
  lastSale: "2.22",
  marketCap: "$36.91M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/oss"
  },
  {
  symbol: "OSPN",
  name: "OneSpan Inc.",
  lastSale: "23.71",
  marketCap: "$956.59M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ospn"
  },
  {
  symbol: "OSW",
  name: "OneSpaWorld Holdings Limited",
  lastSale: "6.25",
  marketCap: "$531.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/osw"
  },
  {
  symbol: "ONEW",
  name: "OneWater Marine Inc.",
  lastSale: "18.82",
  marketCap: "$281.84M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/onew"
  },
  {
  symbol: "OTRK",
  name: "Ontrak, Inc.",
  lastSale: "66.75",
  marketCap: "$1.16B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/otrk"
  },
  {
  symbol: "OTRKP",
  name: "Ontrak, Inc.",
  lastSale: "25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/otrkp"
  },
  {
  symbol: "OPBK",
  name: "OP Bancorp",
  lastSale: "6.72",
  marketCap: "$102.04M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/opbk"
  },
  {
  symbol: "LPRO",
  name: "Open Lending Corporation",
  lastSale: "26.41",
  marketCap: "$3.05B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/lpro"
  },
  {
  symbol: "OTEX",
  name: "Open Text Corporation",
  lastSale: "39.62",
  marketCap: "$10.77B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/otex"
  },
  {
  symbol: "OPRA",
  name: "Opera Limited",
  lastSale: "9.62",
  marketCap: "$1.13B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/opra"
  },
  {
  symbol: "OPES",
  name: "Opes Acquisition Corp.",
  lastSale: "10.65",
  marketCap: "$83.74M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/opes"
  },
  {
  symbol: "OPESU",
  name: "Opes Acquisition Corp.",
  lastSale: "15.6164",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/opesu"
  },
  {
  symbol: "OPESW",
  name: "Opes Acquisition Corp.",
  lastSale: "1.73",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/opesw"
  },
  {
  symbol: "OPGN",
  name: "OpGen, Inc.",
  lastSale: "2.24",
  marketCap: "$44.35M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/opgn"
  },
  {
  symbol: "OPNT",
  name: "Opiant Pharmaceuticals, Inc.",
  lastSale: "7.235",
  marketCap: "$30.81M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/opnt"
  },
  {
  symbol: "OPK",
  name: "Opko Health, Inc.",
  lastSale: "4.14",
  marketCap: "$2.77B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/opk"
  },
  {
  symbol: "OPRT",
  name: "Oportun Financial Corporation",
  lastSale: "14.07",
  marketCap: "$384.55M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/oprt"
  },
  {
  symbol: "OPT",
  name: "Opthea Limited",
  lastSale: "13.35",
  marketCap: "$563.48M",
  ipoYear: "2020",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/opt"
  },
  {
  symbol: "OBAS",
  name: "Optibase Ltd.",
  lastSale: "11.1",
  marketCap: "$57.9M",
  ipoYear: "1999",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/obas"
  },
  {
  symbol: "OCC",
  name: "Optical Cable Corporation",
  lastSale: "2.84",
  marketCap: "$21.41M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/occ"
  },
  {
  symbol: "OPRX",
  name: "OptimizeRx Corporation",
  lastSale: "21.11",
  marketCap: "$317.56M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/oprx"
  },
  {
  symbol: "OPHC",
  name: "OptimumBank Holdings, Inc.",
  lastSale: "2.8",
  marketCap: "$8.26M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ophc"
  },
  {
  symbol: "OPTN",
  name: "OptiNose, Inc.",
  lastSale: "3.495",
  marketCap: "$181.71M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/optn"
  },
  {
  symbol: "OPCH",
  name: "Option Care Health, Inc.",
  lastSale: "13.66",
  marketCap: "$2.55B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/opch"
  },
  {
  symbol: "ORMP",
  name: "Oramed Pharmaceuticals Inc.",
  lastSale: "2.51",
  marketCap: "$59.05M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ormp"
  },
  {
  symbol: "OSUR",
  name: "OraSure Technologies, Inc.",
  lastSale: "15.61",
  marketCap: "$1.12B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/osur"
  },
  {
  symbol: "ORBC",
  name: "ORBCOMM Inc.",
  lastSale: "3.86",
  marketCap: "$300.9M",
  ipoYear: "2006",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/orbc"
  },
  {
  symbol: "OEG",
  name: "Orbital Energy Group, Inc.",
  lastSale: "0.73",
  marketCap: "$22.21M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/oeg"
  },
  {
  symbol: "ORTX",
  name: "Orchard Therapeutics plc",
  lastSale: "4.29",
  marketCap: "$418.61M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ortx"
  },
  {
  symbol: "ORLY",
  name: "O&#39;Reilly Automotive, Inc.",
  lastSale: "450.22",
  marketCap: "$33.35B",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/orly"
  },
  {
  symbol: "OGI",
  name: "Organigram Holdings Inc.",
  lastSale: "1.22",
  marketCap: "$237.3M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ogi"
  },
  {
  symbol: "ORGO",
  name: "Organogenesis Holdings Inc. ",
  lastSale: "3.95",
  marketCap: "$416.4M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/orgo"
  },
  {
  symbol: "ONVO",
  name: "Organovo Holdings, Inc.",
  lastSale: "9.37",
  marketCap: "$61.19M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/onvo"
  },
  {
  symbol: "ORGS",
  name: "Orgenesis Inc.",
  lastSale: "4.68",
  marketCap: "$103.4M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/orgs"
  },
  {
  symbol: "ORIC",
  name: "Oric Pharmaceuticals, Inc.",
  lastSale: "22.61",
  marketCap: "$697.01M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/oric"
  },
  {
  symbol: "SEED",
  name: "Origin Agritech Limited",
  lastSale: "9.5",
  marketCap: "$47.61M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/seed"
  },
  {
  symbol: "OBNK",
  name: "Origin Bancorp, Inc.",
  lastSale: "23.17",
  marketCap: "$544.52M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/obnk"
  },
  {
  symbol: "OESX",
  name: "Orion Energy Systems, Inc.",
  lastSale: "7.18",
  marketCap: "$219.89M",
  ipoYear: "2015",
  sector: "Consumer Durables",
  industry: "Building Products",
  summaryQuote: "https://old.nasdaq.com/symbol/oesx"
  },
  {
  symbol: "ORSN",
  name: "Orisun Acquisition Corp.",
  lastSale: "10.1335",
  marketCap: "$58.6M",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/orsn"
  },
  {
  symbol: "ORSNR",
  name: "Orisun Acquisition Corp.",
  lastSale: "0.5681",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/orsnr"
  },
  {
  symbol: "ORSNU",
  name: "Orisun Acquisition Corp.",
  lastSale: "10.9",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/orsnu"
  },
  {
  symbol: "ORSNW",
  name: "Orisun Acquisition Corp.",
  lastSale: "0.29",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/orsnw"
  },
  {
  symbol: "ORPH",
  name: "Orphazyme A/S",
  lastSale: "10.39",
  marketCap: "$360.51M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/orph"
  },
  {
  symbol: "ORRF",
  name: "Orrstown Financial Services Inc",
  lastSale: "13.7",
  marketCap: "$153.49M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/orrf"
  },
  {
  symbol: "OFIX",
  name: "Orthofix Medical Inc. ",
  lastSale: "32.49",
  marketCap: "$627.95M",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ofix"
  },
  {
  symbol: "KIDS",
  name: "OrthoPediatrics Corp.",
  lastSale: "45.61",
  marketCap: "$891.64M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/kids"
  },
  {
  symbol: "OSIS",
  name: "OSI Systems, Inc.",
  lastSale: "80.08",
  marketCap: "$1.43B",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/osis"
  },
  {
  symbol: "OSMT",
  name: "Osmotica Pharmaceuticals plc",
  lastSale: "5.58",
  marketCap: "$355.91M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/osmt"
  },
  {
  symbol: "OSN",
  name: "Ossen Innovation Co., Ltd.",
  lastSale: "4.45",
  marketCap: "$29.36M",
  ipoYear: "2010",
  sector: "Basic Industries",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/osn"
  },
  {
  symbol: "OTEL",
  name: "Otelco Inc.",
  lastSale: "11.49",
  marketCap: "$39.32M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/otel"
  },
  {
  symbol: "OTG",
  name: "OTG EXP, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/otg"
  },
  {
  symbol: "OTIC",
  name: "Otonomy, Inc.",
  lastSale: "3.72",
  marketCap: "$179.41M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/otic"
  },
  {
  symbol: "OTRA",
  name: "OTR Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/otra"
  },
  {
  symbol: "OTRAU",
  name: "OTR Acquisition Corp.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/otrau"
  },
  {
  symbol: "OTTR",
  name: "Otter Tail Corporation",
  lastSale: "40.29",
  marketCap: "$1.65B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Electric Utilities: Central",
  summaryQuote: "https://old.nasdaq.com/symbol/ottr"
  },
  {
  symbol: "OTLK",
  name: "Outlook Therapeutics, Inc.",
  lastSale: "0.74",
  marketCap: "$94.12M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/otlk"
  },
  {
  symbol: "OTLKW",
  name: "Outlook Therapeutics, Inc.",
  lastSale: "0.1201",
  marketCap: "n/a",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/otlkw"
  },
  {
  symbol: "OM",
  name: "Outset Medical, Inc.",
  lastSale: "49.06",
  marketCap: "$2.01B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/om"
  },
  {
  symbol: "OSTK",
  name: "Overstock.com, Inc.",
  lastSale: "72.33",
  marketCap: "$3.09B",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/ostk"
  },
  {
  symbol: "OVID",
  name: "Ovid Therapeutics Inc.",
  lastSale: "5.61",
  marketCap: "$355.3M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ovid"
  },
  {
  symbol: "OXBR",
  name: "Oxbridge Re Holdings Limited",
  lastSale: "1.93",
  marketCap: "$11.07M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/oxbr"
  },
  {
  symbol: "OXBRW",
  name: "Oxbridge Re Holdings Limited",
  lastSale: "0.1014",
  marketCap: "n/a",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/oxbrw"
  },
  {
  symbol: "OXFD",
  name: "Oxford Immunotec Global PLC",
  lastSale: "11.76",
  marketCap: "$305.24M",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/oxfd"
  },
  {
  symbol: "OXLC",
  name: "Oxford Lane Capital Corp.",
  lastSale: "4.34",
  marketCap: "$377.15M",
  ipoYear: "2011",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxlc"
  },
  {
  symbol: "OXLCM",
  name: "Oxford Lane Capital Corp.",
  lastSale: "23.91",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxlcm"
  },
  {
  symbol: "OXLCO",
  name: "Oxford Lane Capital Corp.",
  lastSale: "24.9533",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxlco"
  },
  {
  symbol: "OXLCP",
  name: "Oxford Lane Capital Corp.",
  lastSale: "23.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxlcp"
  },
  {
  symbol: "OXSQ",
  name: "Oxford Square Capital Corp.",
  lastSale: "2.49",
  marketCap: "$123.48M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxsq"
  },
  {
  symbol: "OXSQL",
  name: "Oxford Square Capital Corp.",
  lastSale: "24.56",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxsql"
  },
  {
  symbol: "OXSQZ",
  name: "Oxford Square Capital Corp.",
  lastSale: "24.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/oxsqz"
  },
  {
  symbol: "OYST",
  name: "Oyster Point Pharma, Inc.",
  lastSale: "20.66",
  marketCap: "$532.06M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/oyst"
  },
  {
  symbol: "PFIN",
  name: "P & F Industries, Inc.",
  lastSale: "4.91",
  marketCap: "$15.47M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/pfin"
  },
  {
  symbol: "PTSI",
  name: "P.A.M. Transportation Services, Inc.",
  lastSale: "43.7",
  marketCap: "$252.41M",
  ipoYear: "1986",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ptsi"
  },
  {
  symbol: "PCAR",
  name: "PACCAR Inc.",
  lastSale: "88.45",
  marketCap: "$30.62B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/pcar"
  },
  {
  symbol: "HERD",
  name: "Pacer Cash Cows Fund of Funds ETF",
  lastSale: "23.7339",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/herd"
  },
  {
  symbol: "ECOW",
  name: "Pacer Emerging Markets Cash Cows 100 ETF",
  lastSale: "20.4489",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ecow"
  },
  {
  symbol: "VETS",
  name: "Pacer Military Times Best Employers ETF",
  lastSale: "30.3412",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vets"
  },
  {
  symbol: "PACB",
  name: "Pacific Biosciences of California, Inc.",
  lastSale: "14.64",
  marketCap: "$2.59B",
  ipoYear: "2010",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pacb"
  },
  {
  symbol: "PEIX",
  name: "Pacific Ethanol, Inc.",
  lastSale: "7.275",
  marketCap: "$461.95M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/peix"
  },
  {
  symbol: "PMBC",
  name: "Pacific Mercantile Bancorp",
  lastSale: "3.72",
  marketCap: "$87.88M",
  ipoYear: "2000",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pmbc"
  },
  {
  symbol: "PPBI",
  name: "Pacific Premier Bancorp Inc",
  lastSale: "25.13",
  marketCap: "$2.37B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ppbi"
  },
  {
  symbol: "PCRX",
  name: "Pacira BioSciences, Inc.",
  lastSale: "52.7",
  marketCap: "$2.25B",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pcrx"
  },
  {
  symbol: "PTVE",
  name: "Pactiv Evergreen Inc.",
  lastSale: "13.19",
  marketCap: "$2.31B",
  ipoYear: "2020",
  sector: "Consumer Durables",
  industry: "Containers/Packaging",
  summaryQuote: "https://old.nasdaq.com/symbol/ptve"
  },
  {
  symbol: "PACW",
  name: "PacWest Bancorp",
  lastSale: "19.01",
  marketCap: "$2.25B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pacw"
  },
  {
  symbol: "PAE",
  name: "PAE Incorporated",
  lastSale: "9.11",
  marketCap: "$838.49M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pae"
  },
  {
  symbol: "PAEWW",
  name: "PAE Incorporated",
  lastSale: "2.64",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/paeww"
  },
  {
  symbol: "PRFX",
  name: "PainReform Ltd.",
  lastSale: "4.6",
  marketCap: "$40.99M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prfx"
  },
  {
  symbol: "PLMR",
  name: "Palomar Holdings, Inc.",
  lastSale: "97.61",
  marketCap: "$2.49B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/plmr"
  },
  {
  symbol: "PAAS",
  name: "Pan American Silver Corp.",
  lastSale: "33.38",
  marketCap: "$7.02B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/paas"
  },
  {
  symbol: "PAND",
  name: "Pandion Therapeutics Inc.",
  lastSale: "10.84",
  marketCap: "$320M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pand"
  },
  {
  symbol: "PANL",
  name: "Pangaea Logistics Solutions Ltd.",
  lastSale: "3.18",
  marketCap: "$143.31M",
  ipoYear: "1996",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/panl"
  },
  {
  symbol: "PZZA",
  name: "Papa John&#39;s International, Inc.",
  lastSale: "78.56",
  marketCap: "$2.58B",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/pzza"
  },
  {
  symbol: "PRTK",
  name: "Paratek Pharmaceuticals, Inc. ",
  lastSale: "4.81",
  marketCap: "$218.31M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prtk"
  },
  {
  symbol: "TEUM",
  name: "Pareteum Corporation",
  lastSale: "0.6606",
  marketCap: "$91.7M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/teum"
  },
  {
  symbol: "PCYG",
  name: "Park City Group, Inc.",
  lastSale: "4.7",
  marketCap: "$91.46M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pcyg"
  },
  {
  symbol: "PKBK",
  name: "Parke Bancorp, Inc.",
  lastSale: "12.9",
  marketCap: "$152.85M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pkbk"
  },
  {
  symbol: "PKOH",
  name: "Park-Ohio Holdings Corp.",
  lastSale: "20.36",
  marketCap: "$256.57M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/pkoh"
  },
  {
  symbol: "PTNR",
  name: "Partner Communications Company Ltd.",
  lastSale: "3.98",
  marketCap: "$730.82M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ptnr"
  },
  {
  symbol: "PTRS",
  name: "Partners Bancorp",
  lastSale: "5.13",
  marketCap: "$91.37M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ptrs"
  },
  {
  symbol: "PASG",
  name: "Passage Bio, Inc.",
  lastSale: "16.92",
  marketCap: "$769.63M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/pasg"
  },
  {
  symbol: "PBHC",
  name: "Pathfinder Bancorp, Inc.",
  lastSale: "10.1472",
  marketCap: "$48.24M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pbhc"
  },
  {
  symbol: "PATK",
  name: "Patrick Industries, Inc.",
  lastSale: "55.41",
  marketCap: "$1.3B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/patk"
  },
  {
  symbol: "PNBK",
  name: "Patriot National Bancorp Inc.",
  lastSale: "6.88",
  marketCap: "$27.26M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pnbk"
  },
  {
  symbol: "PATI",
  name: "Patriot Transportation Holding, Inc.",
  lastSale: "9.1988",
  marketCap: "$31.07M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pati"
  },
  {
  symbol: "PDCO",
  name: "Patterson Companies, Inc.",
  lastSale: "26.51",
  marketCap: "$2.55B",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/pdco"
  },
  {
  symbol: "PTEN",
  name: "Patterson-UTI Energy, Inc.",
  lastSale: "2.65",
  marketCap: "$496.63M",
  ipoYear: "1993",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/pten"
  },
  {
  symbol: "PAVM",
  name: "PAVmed Inc.",
  lastSale: "1.93",
  marketCap: "$96.7M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pavm"
  },
  {
  symbol: "PAVMW",
  name: "PAVmed Inc.",
  lastSale: "0.91",
  marketCap: "n/a",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pavmw"
  },
  {
  symbol: "PAVMZ",
  name: "PAVmed Inc.",
  lastSale: "0.85",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pavmz"
  },
  {
  symbol: "PXMD",
  name: "PaxMedica, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pxmd"
  },
  {
  symbol: "PXMDW",
  name: "PaxMedica, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pxmdw"
  },
  {
  symbol: "PAYA",
  name: "Paya Holdings Inc.",
  lastSale: "11.14",
  marketCap: "$1.3B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/paya"
  },
  {
  symbol: "PAYAW",
  name: "Paya Holdings Inc.",
  lastSale: "2.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/payaw"
  },
  {
  symbol: "PAYX",
  name: "Paychex, Inc.",
  lastSale: "81.93",
  marketCap: "$29.45B",
  ipoYear: "1983",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/payx"
  },
  {
  symbol: "PCTY",
  name: "Paylocity Holding Corporation",
  lastSale: "190.04",
  marketCap: "$10.31B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/pcty"
  },
  {
  symbol: "PYPL",
  name: "PayPal Holdings, Inc.",
  lastSale: "200.43",
  marketCap: "$235.16B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pypl"
  },
  {
  symbol: "PAYS",
  name: "Paysign, Inc.",
  lastSale: "5.07",
  marketCap: "$251.2M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pays"
  },
  {
  symbol: "CNXN",
  name: "PC Connection, Inc.",
  lastSale: "47.06",
  marketCap: "$1.23B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/cnxn"
  },
  {
  symbol: "PCB",
  name: "PCB Bancorp",
  lastSale: "9.07",
  marketCap: "$139.48M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pcb"
  },
  {
  symbol: "PCIM",
  name: "PCI Media, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pcim"
  },
  {
  symbol: "PCSB",
  name: "PCSB Financial Corporation",
  lastSale: "13.36",
  marketCap: "$224.46M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pcsb"
  },
  {
  symbol: "PCTI",
  name: "PCTEL, Inc.",
  lastSale: "5.4",
  marketCap: "$100.66M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/pcti"
  },
  {
  symbol: "PDCE",
  name: "PDC Energy, Inc.",
  lastSale: "12.24",
  marketCap: "$1.22B",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/pdce"
  },
  {
  symbol: "PDFS",
  name: "PDF Solutions, Inc.",
  lastSale: "19.51",
  marketCap: "$712.53M",
  ipoYear: "2001",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/pdfs"
  },
  {
  symbol: "PDLI",
  name: "PDL BioPharma, Inc.",
  lastSale: "2.23",
  marketCap: "$254.18M",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/pdli"
  },
  {
  symbol: "PDLB",
  name: "PDL Community Bancorp",
  lastSale: "9.48",
  marketCap: "$162.82M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/pdlb"
  },
  {
  symbol: "PDSB",
  name: "PDS Biotechnology Corporation",
  lastSale: "2.08",
  marketCap: "$46.3M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pdsb"
  },
  {
  symbol: "PGC",
  name: "Peapack-Gladstone Financial Corporation",
  lastSale: "16.6",
  marketCap: "$313.83M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Commercial Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pgc"
  },
  {
  symbol: "PEGA",
  name: "Pegasystems Inc.",
  lastSale: "123.91",
  marketCap: "$9.96B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pega"
  },
  {
  symbol: "PTON",
  name: "Peloton Interactive, Inc.",
  lastSale: "121.15",
  marketCap: "$35.27B",
  ipoYear: "2019",
  sector: "Energy",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/pton"
  },
  {
  symbol: "PENN",
  name: "Penn National Gaming, Inc.",
  lastSale: "57.75",
  marketCap: "$8.96B",
  ipoYear: "1994",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/penn"
  },
  {
  symbol: "PVAC",
  name: "Penn Virginia Corporation",
  lastSale: "8.64",
  marketCap: "$131.12M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/pvac"
  },
  {
  symbol: "PFLT",
  name: "PennantPark Floating Rate Capital Ltd.",
  lastSale: "8.21",
  marketCap: "$318.32M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pflt"
  },
  {
  symbol: "PNNT",
  name: "PennantPark Investment Corporation",
  lastSale: "3",
  marketCap: "$201.14M",
  ipoYear: "2007",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pnnt"
  },
  {
  symbol: "PNNTG",
  name: "PennantPark Investment Corporation",
  lastSale: "23.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pnntg"
  },
  {
  symbol: "PWOD",
  name: "Penns Woods Bancorp, Inc.",
  lastSale: "20.61",
  marketCap: "$145.23M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pwod"
  },
  {
  symbol: "PEBO",
  name: "Peoples Bancorp Inc.",
  lastSale: "23.5",
  marketCap: "$462.21M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pebo"
  },
  {
  symbol: "PEBK",
  name: "Peoples Bancorp of North Carolina, Inc.",
  lastSale: "18.14",
  marketCap: "$104.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pebk"
  },
  {
  symbol: "PFIS",
  name: "Peoples Financial Services Corp. ",
  lastSale: "36.13",
  marketCap: "$263.18M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pfis"
  },
  {
  symbol: "PBCT",
  name: "People&#39;s United Financial, Inc.",
  lastSale: "10.64",
  marketCap: "$4.52B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/pbct"
  },
  {
  symbol: "PBCTP",
  name: "People&#39;s United Financial, Inc.",
  lastSale: "27.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/pbctp"
  },
  {
  symbol: "PEP",
  name: "Pepsico, Inc.",
  lastSale: "139.12",
  marketCap: "$192.26B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/pep"
  },
  {
  symbol: "PRCP",
  name: "Perceptron, Inc.",
  lastSale: "6.88",
  marketCap: "$67.17M",
  ipoYear: "1992",
  sector: "Capital Goods",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/prcp"
  },
  {
  symbol: "PRDO",
  name: "Perdoceo Education Corporation",
  lastSale: "11.18",
  marketCap: "$772.88M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/prdo"
  },
  {
  symbol: "PRFT",
  name: "Perficient, Inc.",
  lastSale: "41.18",
  marketCap: "$1.37B",
  ipoYear: "1999",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/prft"
  },
  {
  symbol: "PSHG",
  name: "Performance Shipping Inc.",
  lastSale: "0.4954",
  marketCap: "$24.85M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/pshg"
  },
  {
  symbol: "PFMT",
  name: "Performant Financial Corporation",
  lastSale: "1.13",
  marketCap: "$61.82M",
  ipoYear: "2012",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pfmt"
  },
  {
  symbol: "PERI",
  name: "Perion Network Ltd",
  lastSale: "7.65",
  marketCap: "$204M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/peri"
  },
  {
  symbol: "PESI",
  name: "Perma-Fix Environmental Services, Inc.",
  lastSale: "6.7",
  marketCap: "$81.37M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pesi"
  },
  {
  symbol: "PPIH",
  name: "Perma-Pipe International Holdings, Inc.",
  lastSale: "5.434",
  marketCap: "$44.37M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Pollution Control Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ppih"
  },
  {
  symbol: "PSNL",
  name: "Personalis, Inc.",
  lastSale: "26.93",
  marketCap: "$1.04B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/psnl"
  },
  {
  symbol: "PETQ",
  name: "PetIQ, Inc.",
  lastSale: "29.505",
  marketCap: "$843.01M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Other Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/petq"
  },
  {
  symbol: "PETS",
  name: "PetMed Express, Inc.",
  lastSale: "29.99",
  marketCap: "$607.96M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pets"
  },
  {
  symbol: "PAICU",
  name: "Petra Acquisition, Inc.",
  lastSale: "9.9508",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/paicu"
  },
  {
  symbol: "PFSW",
  name: "PFSweb, Inc.",
  lastSale: "6.95",
  marketCap: "$140.72M",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pfsw"
  },
  {
  symbol: "PGTI",
  name: "PGT Innovations, Inc.",
  lastSale: "16.89",
  marketCap: "$995.88M",
  ipoYear: "2006",
  sector: "Capital Goods",
  industry: "Building Products",
  summaryQuote: "https://old.nasdaq.com/symbol/pgti"
  },
  {
  symbol: "PHAS",
  name: "PhaseBio Pharmaceuticals, Inc.",
  lastSale: "2.85",
  marketCap: "$83.63M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/phas"
  },
  {
  symbol: "PHAT",
  name: "Phathom Pharmaceuticals, Inc.",
  lastSale: "38.63",
  marketCap: "$989.48M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/phat"
  },
  {
  symbol: "PAHC",
  name: "Phibro Animal Health Corporation",
  lastSale: "17.95",
  marketCap: "$726.14M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pahc"
  },
  {
  symbol: "PHIO",
  name: "Phio Pharmaceuticals Corp.",
  lastSale: "2.01",
  marketCap: "$11.62M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/phio"
  },
  {
  symbol: "PHIOW",
  name: "Phio Pharmaceuticals Corp.",
  lastSale: "0.0524",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/phiow"
  },
  {
  symbol: "PLAB",
  name: "Photronics, Inc.",
  lastSale: "9.92",
  marketCap: "$651.38M",
  ipoYear: "1987",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/plab"
  },
  {
  symbol: "PHUN",
  name: "Phunware, Inc.",
  lastSale: "0.715",
  marketCap: "$32.5M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/phun"
  },
  {
  symbol: "PHUNW",
  name: "Phunware, Inc.",
  lastSale: "0.1449",
  marketCap: "n/a",
  ipoYear: "2016",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/phunw"
  },
  {
  symbol: "PICO",
  name: "PICO Holdings Inc.",
  lastSale: "8.81",
  marketCap: "$166.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/pico"
  },
  {
  symbol: "PLL",
  name: "Piedmont Lithium Limited",
  lastSale: "23.3",
  marketCap: "$269.18M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pll"
  },
  {
  symbol: "PIRS",
  name: "Pieris Pharmaceuticals, Inc.",
  lastSale: "2.36",
  marketCap: "$123.66M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/pirs"
  },
  {
  symbol: "PPC",
  name: "Pilgrim&#39;s Pride Corporation",
  lastSale: "16.2",
  marketCap: "$3.95B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Meat/Poultry/Fish",
  summaryQuote: "https://old.nasdaq.com/symbol/ppc"
  },
  {
  symbol: "PDD",
  name: "Pinduoduo Inc.",
  lastSale: "90.31",
  marketCap: "$108.16B",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pdd"
  },
  {
  symbol: "PME",
  name: "Pingtan Marine Enterprise Ltd.",
  lastSale: "2.27",
  marketCap: "$179.45M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pme"
  },
  {
  symbol: "PNFP",
  name: "Pinnacle Financial Partners, Inc.",
  lastSale: "43.6",
  marketCap: "$3.31B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pnfp"
  },
  {
  symbol: "PNFPP",
  name: "Pinnacle Financial Partners, Inc.",
  lastSale: "26.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pnfpp"
  },
  {
  symbol: "PT",
  name: "Pintec Technology Holdings Limited",
  lastSale: "1.06",
  marketCap: "$45.73M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/pt"
  },
  {
  symbol: "PBFS",
  name: "Pioneer Bancorp, Inc.",
  lastSale: "9.82",
  marketCap: "$255.1M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pbfs"
  },
  {
  symbol: "PPSI",
  name: "Pioneer Power Solutions, Inc.",
  lastSale: "2.64",
  marketCap: "$23.04M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ppsi"
  },
  {
  symbol: "PXLW",
  name: "Pixelworks, Inc.",
  lastSale: "2.36",
  marketCap: "$99.13M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/pxlw"
  },
  {
  symbol: "PLYA",
  name: "Playa Hotels & Resorts N.V.",
  lastSale: "4.2",
  marketCap: "$564.88M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/plya"
  },
  {
  symbol: "PLXS",
  name: "Plexus Corp.",
  lastSale: "70.66",
  marketCap: "$2.07B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/plxs"
  },
  {
  symbol: "PLRX",
  name: "Pliant Therapeutics, Inc.",
  lastSale: "22.16",
  marketCap: "$785.44M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/plrx"
  },
  {
  symbol: "PLUG",
  name: "Plug Power, Inc.",
  lastSale: "14.785",
  marketCap: "$5.94B",
  ipoYear: "1999",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/plug"
  },
  {
  symbol: "PLBC",
  name: "Plumas Bancorp",
  lastSale: "20.11",
  marketCap: "$104.19M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/plbc"
  },
  {
  symbol: "PS",
  name: "Pluralsight, Inc.",
  lastSale: "17.36",
  marketCap: "$2.51B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/ps"
  },
  {
  symbol: "PSTI",
  name: "Pluristem Therapeutics, Inc.",
  lastSale: "9.74",
  marketCap: "$248.9M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/psti"
  },
  {
  symbol: "PSTV",
  name: "PLUS THERAPEUTICS, Inc.",
  lastSale: "2.36",
  marketCap: "$11.28M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pstv"
  },
  {
  symbol: "PLXP",
  name: "PLx Pharma Inc.",
  lastSale: "3.06",
  marketCap: "$28.02M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/plxp"
  },
  {
  symbol: "PMVP",
  name: "PMV Pharmaceuticals, Inc.",
  lastSale: "35.34",
  marketCap: "$1.58B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pmvp"
  },
  {
  symbol: "PCOM",
  name: "Points International, Ltd.",
  lastSale: "10.19",
  marketCap: "$134.79M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pcom"
  },
  {
  symbol: "POLA",
  name: "Polar Power, Inc.",
  lastSale: "2.39",
  marketCap: "$27.19M",
  ipoYear: "2016",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/pola"
  },
  {
  symbol: "PTE",
  name: "PolarityTE, Inc.",
  lastSale: "1.03",
  marketCap: "$40.09M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/pte"
  },
  {
  symbol: "PYPD",
  name: "PolyPid Ltd.",
  lastSale: "11",
  marketCap: "$187.51M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pypd"
  },
  {
  symbol: "POOL",
  name: "Pool Corporation",
  lastSale: "366.99",
  marketCap: "$14.71B",
  ipoYear: "1995",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/pool"
  },
  {
  symbol: "BPOP",
  name: "Popular, Inc.",
  lastSale: "39.26",
  marketCap: "$3.31B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bpop"
  },
  {
  symbol: "BPOPM",
  name: "Popular, Inc.",
  lastSale: "25.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bpopm"
  },
  {
  symbol: "BPOPN",
  name: "Popular, Inc.",
  lastSale: "26.32",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bpopn"
  },
  {
  symbol: "KCAPL",
  name: "Portman Ridge Finance Corporation",
  lastSale: "24.54",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/kcapl"
  },
  {
  symbol: "PTMN",
  name: "Portman Ridge Finance Corporation",
  lastSale: "1.3",
  marketCap: "$57.84M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ptmn"
  },
  {
  symbol: "PSTX",
  name: "Poseida Therapeutics, Inc.",
  lastSale: "11.7",
  marketCap: "$723.29M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/pstx"
  },
  {
  symbol: "PBPB",
  name: "Potbelly Corporation",
  lastSale: "3.71",
  marketCap: "$88.67M",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/pbpb"
  },
  {
  symbol: "PCH",
  name: "PotlatchDeltic Corporation",
  lastSale: "43.04",
  marketCap: "$2.88B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/pch"
  },
  {
  symbol: "POWL",
  name: "Powell Industries, Inc.",
  lastSale: "24.06",
  marketCap: "$279.45M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/powl"
  },
  {
  symbol: "POWI",
  name: "Power Integrations, Inc.",
  lastSale: "59.39",
  marketCap: "$3.55B",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/powi"
  },
  {
  symbol: "PBTS",
  name: "Powerbridge Technologies Co., Ltd.",
  lastSale: "2.43",
  marketCap: "$22.35M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pbts"
  },
  {
  symbol: "PWFL",
  name: "PowerFleet, Inc.",
  lastSale: "6.33",
  marketCap: "$196.94M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/pwfl"
  },
  {
  symbol: "PPD",
  name: "PPD, Inc.",
  lastSale: "34.01",
  marketCap: "$11.86B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/ppd"
  },
  {
  symbol: "PRAA",
  name: "PRA Group, Inc.",
  lastSale: "36.61",
  marketCap: "$1.67B",
  ipoYear: "2002",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/praa"
  },
  {
  symbol: "PRAH",
  name: "PRA Health Sciences, Inc.",
  lastSale: "103.5",
  marketCap: "$6.62B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/prah"
  },
  {
  symbol: "PRAX",
  name: "Praxis Precision Medicines, Inc.",
  lastSale: "31.41",
  marketCap: "$1.15B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prax"
  },
  {
  symbol: "PGEN",
  name: "Precigen, Inc.",
  lastSale: "4.29",
  marketCap: "$795.54M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/pgen"
  },
  {
  symbol: "PRPO",
  name: "Precipio, Inc.",
  lastSale: "2.22",
  marketCap: "$36.47M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/prpo"
  },
  {
  symbol: "DTIL",
  name: "Precision BioSciences, Inc.",
  lastSale: "6.45",
  marketCap: "$337.62M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/dtil"
  },
  {
  symbol: "POAI",
  name: "Predictive Oncology Inc.",
  lastSale: "0.7875",
  marketCap: "$12.14M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/poai"
  },
  {
  symbol: "PFBC",
  name: "Preferred Bank",
  lastSale: "34.4",
  marketCap: "$513.72M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pfbc"
  },
  {
  symbol: "PLPC",
  name: "Preformed Line Products Company",
  lastSale: "50",
  marketCap: "$245.78M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/plpc"
  },
  {
  symbol: "PRLD",
  name: "Prelude Therapeutics Incorporated",
  lastSale: "36.75",
  marketCap: "$1.61B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prld"
  },
  {
  symbol: "PFBI",
  name: "Premier Financial Bancorp, Inc.",
  lastSale: "12.35",
  marketCap: "$181.21M",
  ipoYear: "1996",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pfbi"
  },
  {
  symbol: "PFC",
  name: "Premier Financial Corp. ",
  lastSale: "18.22",
  marketCap: "$679.56M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pfc"
  },
  {
  symbol: "PINC",
  name: "Premier, Inc.",
  lastSale: "33.54",
  marketCap: "$4.09B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pinc"
  },
  {
  symbol: "SQFT",
  name: "Presidio Property Trust, Inc.",
  lastSale: "4.08",
  marketCap: "$74.84M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sqft"
  },
  {
  symbol: "PBIO",
  name: "Pressure BioSciences, Inc.",
  lastSale: "1.69",
  marketCap: "$1.86M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pbio"
  },
  {
  symbol: "PRVL",
  name: "Prevail Therapeutics Inc.",
  lastSale: "10.72",
  marketCap: "$366.78M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/prvl"
  },
  {
  symbol: "PRGX",
  name: "PRGX Global, Inc.",
  lastSale: "5.07",
  marketCap: "$119.72M",
  ipoYear: "1996",
  sector: "Consumer Services",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/prgx"
  },
  {
  symbol: "PSMT",
  name: "PriceSmart, Inc.",
  lastSale: "74.37",
  marketCap: "$2.28B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Department/Specialty Retail Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/psmt"
  },
  {
  symbol: "PNRG",
  name: "PrimeEnergy Resources Corporation",
  lastSale: "61.54",
  marketCap: "$122.72M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/pnrg"
  },
  {
  symbol: "PRMW",
  name: "Primo Water Corporation",
  lastSale: "13.27",
  marketCap: "$2.12B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/prmw"
  },
  {
  symbol: "PRIM",
  name: "Primoris Services Corporation",
  lastSale: "18.495",
  marketCap: "$892.41M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/prim"
  },
  {
  symbol: "PFG",
  name: "Principal Financial Group Inc",
  lastSale: "39.35",
  marketCap: "$10.8B",
  ipoYear: "2001",
  sector: "Finance",
  industry: "Accident &Health Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/pfg"
  },
  {
  symbol: "BTEC",
  name: "Principal Healthcare Innovators Index ETF",
  lastSale: "50.6142",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/btec"
  },
  {
  symbol: "PDEV",
  name: "Principal International Multi-Factor ETF",
  lastSale: "24.9433",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pdev"
  },
  {
  symbol: "GENY",
  name: "Principal Millennials Index ETF",
  lastSale: "50.67",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/geny"
  },
  {
  symbol: "PSET",
  name: "Principal Quality ETF",
  lastSale: "43.3004",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pset"
  },
  {
  symbol: "PLC",
  name: "Principal U.S. Large-Cap Multi-Factor ETF",
  lastSale: "27.7725",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/plc"
  },
  {
  symbol: "USMC",
  name: "Principal U.S. Mega-Cap ETF",
  lastSale: "32.69",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/usmc"
  },
  {
  symbol: "PSC",
  name: "Principal U.S. Small-Cap Multi-Factor ETF",
  lastSale: "29.2296",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psc"
  },
  {
  symbol: "PSM",
  name: "Principal U.S. Small-MidCap Multi-Factor ETF",
  lastSale: "24.5341",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psm"
  },
  {
  symbol: "PY",
  name: "Principal Value ETF",
  lastSale: "28.99",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/py"
  },
  {
  symbol: "PRTH",
  name: "Priority Technology Holdings, Inc.",
  lastSale: "2.85",
  marketCap: "$191.43M",
  ipoYear: "2016",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/prth"
  },
  {
  symbol: "PCSA",
  name: "Processa Pharmaceuticals, Inc.",
  lastSale: "4.17",
  marketCap: "$43.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pcsa"
  },
  {
  symbol: "UFO",
  name: "Procure Space ETF",
  lastSale: "21.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ufo"
  },
  {
  symbol: "PDEX",
  name: "Pro-Dex, Inc.",
  lastSale: "34.8",
  marketCap: "$134.27M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/pdex"
  },
  {
  symbol: "IPDN",
  name: "Professional Diversity Network, Inc.",
  lastSale: "1.05",
  marketCap: "$13.46M",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/ipdn"
  },
  {
  symbol: "PFHD",
  name: "Professional Holding Corp.",
  lastSale: "13.41",
  marketCap: "$180.37M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pfhd"
  },
  {
  symbol: "PFIE",
  name: "Profire Energy, Inc.",
  lastSale: "0.662",
  marketCap: "$31.72M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/pfie"
  },
  {
  symbol: "PROF",
  name: "Profound Medical Corp.",
  lastSale: "17.85",
  marketCap: "$345.9M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/prof"
  },
  {
  symbol: "PROG",
  name: "Progenity, Inc.",
  lastSale: "7.91",
  marketCap: "$368.19M",
  ipoYear: "1995",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/prog"
  },
  {
  symbol: "PRGS",
  name: "Progress Software Corporation",
  lastSale: "38.14",
  marketCap: "$1.72B",
  ipoYear: "1991",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/prgs"
  },
  {
  symbol: "PGNY",
  name: "Progyny, Inc.",
  lastSale: "26.62",
  marketCap: "$2.29B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pgny"
  },
  {
  symbol: "PFPT",
  name: "Proofpoint, Inc.",
  lastSale: "105.69",
  marketCap: "$6.09B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pfpt"
  },
  {
  symbol: "PSAC",
  name: "Property Solutions Acquisition Corp.",
  lastSale: "9.685",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/psac"
  },
  {
  symbol: "PSACU",
  name: "Property Solutions Acquisition Corp.",
  lastSale: "10.15",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/psacu"
  },
  {
  symbol: "PSACW",
  name: "Property Solutions Acquisition Corp.",
  lastSale: "0.45",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/psacw"
  },
  {
  symbol: "PRPH",
  name: "ProPhase Labs, Inc.",
  lastSale: "6.87",
  marketCap: "$79.72M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prph"
  },
  {
  symbol: "PTAC",
  name: "PropTech Acquisition Corporation",
  lastSale: "10.31",
  marketCap: "$222.31M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ptac"
  },
  {
  symbol: "PTACU",
  name: "PropTech Acquisition Corporation",
  lastSale: "10.86",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ptacu"
  },
  {
  symbol: "PTACW",
  name: "PropTech Acquisition Corporation",
  lastSale: "1.53",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ptacw"
  },
  {
  symbol: "PRQR",
  name: "ProQR Therapeutics N.V.",
  lastSale: "3.98",
  marketCap: "$199.57M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prqr"
  },
  {
  symbol: "EQRR",
  name: "ProShares Equities for Rising Rates ETF",
  lastSale: "29.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/eqrr"
  },
  {
  symbol: "BIB",
  name: "ProShares Ultra Nasdaq Biotechnology",
  lastSale: "70.02",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bib"
  },
  {
  symbol: "TQQQ",
  name: "ProShares UltraPro QQQ",
  lastSale: "136.09",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tqqq"
  },
  {
  symbol: "SQQQ",
  name: "ProShares UltraPro Short QQQ",
  lastSale: "22.06",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/sqqq"
  },
  {
  symbol: "BIS",
  name: "ProShares UltraShort Nasdaq Biotechnology",
  lastSale: "30.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bis"
  },
  {
  symbol: "PSEC",
  name: "Prospect Capital Corporation",
  lastSale: "5.22",
  marketCap: "$1.97B",
  ipoYear: "2004",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/psec"
  },
  {
  symbol: "PTGX",
  name: "Protagonist Therapeutics, Inc.",
  lastSale: "20.27",
  marketCap: "$746.09M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ptgx"
  },
  {
  symbol: "TARA",
  name: "Protara Therapeutics, Inc. ",
  lastSale: "18.94",
  marketCap: "$110.96M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tara"
  },
  {
  symbol: "PTVCA",
  name: "Protective Insurance Corporation",
  lastSale: "14.5",
  marketCap: "$206.09M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/ptvca"
  },
  {
  symbol: "PTVCB",
  name: "Protective Insurance Corporation",
  lastSale: "13.85",
  marketCap: "$196.86M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/ptvcb"
  },
  {
  symbol: "PTI",
  name: "Proteostasis Therapeutics, Inc.",
  lastSale: "1.06",
  marketCap: "$55.31M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pti"
  },
  {
  symbol: "PRTA",
  name: "Prothena Corporation plc",
  lastSale: "11.49",
  marketCap: "$458.58M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prta"
  },
  {
  symbol: "PRVB",
  name: "Provention Bio, Inc.",
  lastSale: "12.37",
  marketCap: "$696.18M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/prvb"
  },
  {
  symbol: "PVBC",
  name: "Provident Bancorp, Inc.",
  lastSale: "8.62",
  marketCap: "$167.89M",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/pvbc"
  },
  {
  symbol: "PROV",
  name: "Provident Financial Holdings, Inc.",
  lastSale: "13.57",
  marketCap: "$100.98M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/prov"
  },
  {
  symbol: "PBIP",
  name: "Prudential Bancorp, Inc.",
  lastSale: "11.98",
  marketCap: "$97.6M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/pbip"
  },
  {
  symbol: "PMD",
  name: "Psychemedics Corporation",
  lastSale: "3.99",
  marketCap: "$22.05M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/pmd"
  },
  {
  symbol: "PTC",
  name: "PTC Inc.",
  lastSale: "84.26",
  marketCap: "$9.78B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ptc"
  },
  {
  symbol: "PTCT",
  name: "PTC Therapeutics, Inc.",
  lastSale: "53.26",
  marketCap: "$3.61B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ptct"
  },
  {
  symbol: "PHCF",
  name: "PUHUI WEALTH INVESTMENT MANAGEMENT CO., LTD.",
  lastSale: "3.09",
  marketCap: "$35.56M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/phcf"
  },
  {
  symbol: "PULM",
  name: "Pulmatrix, Inc.",
  lastSale: "1.11",
  marketCap: "$38.19M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pulm"
  },
  {
  symbol: "LUNG",
  name: "Pulmonx Corporation",
  lastSale: "41.89",
  marketCap: "$1.42B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/lung"
  },
  {
  symbol: "PLSE",
  name: "Pulse Biosciences, Inc",
  lastSale: "12.38",
  marketCap: "$312.12M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/plse"
  },
  {
  symbol: "PBYI",
  name: "Puma Biotechnology Inc",
  lastSale: "9.5",
  marketCap: "$376.93M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/pbyi"
  },
  {
  symbol: "PCYO",
  name: "Pure Cycle Corporation",
  lastSale: "8.72",
  marketCap: "$208M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/pcyo"
  },
  {
  symbol: "PRPL",
  name: "Purple Innovation, Inc.",
  lastSale: "30.92",
  marketCap: "$1.68B",
  ipoYear: "2015",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/prpl"
  },
  {
  symbol: "PRPLW",
  name: "Purple Innovation, Inc.",
  lastSale: "9.7",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/prplw"
  },
  {
  symbol: "PUYI",
  name: "Puyi Inc.",
  lastSale: "5.78",
  marketCap: "$348.62M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/puyi"
  },
  {
  symbol: "PXS",
  name: "Pyxis Tankers Inc.",
  lastSale: "0.8522",
  marketCap: "$18.37M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/pxs"
  },
  {
  symbol: "PXSAP",
  name: "Pyxis Tankers Inc.",
  lastSale: "18.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/pxsap"
  },
  {
  symbol: "PXSAW",
  name: "Pyxis Tankers Inc.",
  lastSale: "0.2611",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/pxsaw"
  },
  {
  symbol: "QK",
  name: "Q&K International Group Limited",
  lastSale: "4.27",
  marketCap: "$204.39M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/qk"
  },
  {
  symbol: "QADA",
  name: "QAD Inc.",
  lastSale: "43.63",
  marketCap: "$902.95M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/qada"
  },
  {
  symbol: "QADB",
  name: "QAD Inc.",
  lastSale: "30.5005",
  marketCap: "$631.23M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/qadb"
  },
  {
  symbol: "QCRH",
  name: "QCR Holdings, Inc.",
  lastSale: "29.35",
  marketCap: "$463.54M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/qcrh"
  },
  {
  symbol: "QELLU",
  name: "Qell Acquisition Corp.",
  lastSale: "10.085",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qellu"
  },
  {
  symbol: "QGEN",
  name: "Qiagen N.V.",
  lastSale: "50",
  marketCap: "$11.43B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/qgen"
  },
  {
  symbol: "QIWI",
  name: "QIWI plc",
  lastSale: "14.95",
  marketCap: "$937.56M",
  ipoYear: "2013",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qiwi"
  },
  {
  symbol: "QRVO",
  name: "Qorvo, Inc.",
  lastSale: "131.28",
  marketCap: "$15B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/qrvo"
  },
  {
  symbol: "QCOM",
  name: "QUALCOMM Incorporated",
  lastSale: "125.91",
  marketCap: "$142.06B",
  ipoYear: "1991",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/qcom"
  },
  {
  symbol: "QLGN",
  name: "Qualigen Therapeutics, Inc.",
  lastSale: "4.08",
  marketCap: "$91.92M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/qlgn"
  },
  {
  symbol: "QLYS",
  name: "Qualys, Inc.",
  lastSale: "96.03",
  marketCap: "$3.77B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/qlys"
  },
  {
  symbol: "QTRX",
  name: "Quanterix Corporation",
  lastSale: "39.51",
  marketCap: "$1.24B",
  ipoYear: "2017",
  sector: "Capital Goods",
  industry: "Biotechnology: Laboratory Analytical Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/qtrx"
  },
  {
  symbol: "QMCO",
  name: "Quantum Corporation",
  lastSale: "4.65",
  marketCap: "$185.57M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/qmco"
  },
  {
  symbol: "QRHC",
  name: "Quest Resource Holding Corporation",
  lastSale: "1.97",
  marketCap: "$36.71M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qrhc"
  },
  {
  symbol: "QH",
  name: "Quhuo Limited",
  lastSale: "7.56",
  marketCap: "$392.41M",
  ipoYear: "2020",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qh"
  },
  {
  symbol: "QUIK",
  name: "QuickLogic Corporation",
  lastSale: "2.89",
  marketCap: "$31.95M",
  ipoYear: "1999",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/quik"
  },
  {
  symbol: "QDEL",
  name: "Quidel Corporation",
  lastSale: "273.6",
  marketCap: "$11.48B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/qdel"
  },
  {
  symbol: "QNST",
  name: "QuinStreet, Inc.",
  lastSale: "16.215",
  marketCap: "$853.99M",
  ipoYear: "2010",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/qnst"
  },
  {
  symbol: "QUMU",
  name: "Qumu Corporation",
  lastSale: "4.86",
  marketCap: "$65.72M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/qumu"
  },
  {
  symbol: "QTNT",
  name: "Quotient Limited",
  lastSale: "4.57",
  marketCap: "$461.12M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/qtnt"
  },
  {
  symbol: "QRTEA",
  name: "Qurate Retail, Inc.",
  lastSale: "7.25",
  marketCap: "$3.02B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/qrtea"
  },
  {
  symbol: "QRTEB",
  name: "Qurate Retail, Inc.",
  lastSale: "7.29",
  marketCap: "$3.04B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/qrteb"
  },
  {
  symbol: "QRTEP",
  name: "Qurate Retail, Inc.",
  lastSale: "98.91",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/qrtep"
  },
  {
  symbol: "QTT",
  name: "Qutoutiao Inc.",
  lastSale: "2.34",
  marketCap: "$624.37M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/qtt"
  },
  {
  symbol: "RRD",
  name: "R.R. Donnelley & Sons Company",
  lastSale: "1.28",
  marketCap: "$91.39M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Publishing",
  summaryQuote: "https://old.nasdaq.com/symbol/rrd"
  },
  {
  symbol: "RCM",
  name: "R1 RCM Inc.",
  lastSale: "17.51",
  marketCap: "$2.02B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rcm"
  },
  {
  symbol: "RXT",
  name: "Rackspace Technology, Inc.",
  lastSale: "16.05",
  marketCap: "$3.2B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/rxt"
  },
  {
  symbol: "RADA",
  name: "RADA Electronic Industries Ltd.",
  lastSale: "6.25",
  marketCap: "$271.78M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/rada"
  },
  {
  symbol: "RDCM",
  name: "Radcom Ltd.",
  lastSale: "8.29",
  marketCap: "$115.59M",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/rdcm"
  },
  {
  symbol: "RADI",
  name: "Radius Global Infrastructure, Inc.",
  lastSale: "7.65",
  marketCap: "$446.95M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/radi"
  },
  {
  symbol: "RDUS",
  name: "Radius Health, Inc.",
  lastSale: "13.8",
  marketCap: "$641.32M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rdus"
  },
  {
  symbol: "RDNT",
  name: "RadNet, Inc.",
  lastSale: "16.2",
  marketCap: "$835.51M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/rdnt"
  },
  {
  symbol: "RDWR",
  name: "Radware Ltd.",
  lastSale: "23.41",
  marketCap: "$1.08B",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rdwr"
  },
  {
  symbol: "METC",
  name: "Ramaco Resources, Inc.",
  lastSale: "3.03",
  marketCap: "$129.14M",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Coal Mining",
  summaryQuote: "https://old.nasdaq.com/symbol/metc"
  },
  {
  symbol: "RMBS",
  name: "Rambus, Inc.",
  lastSale: "14.08",
  marketCap: "$1.6B",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/rmbs"
  },
  {
  symbol: "RAND",
  name: "Rand Capital Corporation",
  lastSale: "11.59",
  marketCap: "$29.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rand"
  },
  {
  symbol: "RNDB",
  name: "Randolph Bancorp, Inc.",
  lastSale: "13.25",
  marketCap: "$72.59M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rndb"
  },
  {
  symbol: "RPD",
  name: "Rapid7, Inc.",
  lastSale: "64.81",
  marketCap: "$3.31B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/rpd"
  },
  {
  symbol: "RAPT",
  name: "RAPT Therapeutics, Inc.",
  lastSale: "32.51",
  marketCap: "$795.48M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rapt"
  },
  {
  symbol: "RTLR",
  name: "Rattler Midstream LP",
  lastSale: "6.17",
  marketCap: "$936.68M",
  ipoYear: "2019",
  sector: "Public Utilities",
  industry: "Natural Gas Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/rtlr"
  },
  {
  symbol: "RAVE",
  name: "Rave Restaurant Group, Inc.",
  lastSale: "0.6742",
  marketCap: "$10.43M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/rave"
  },
  {
  symbol: "RAVN",
  name: "Raven Industries, Inc.",
  lastSale: "22.84",
  marketCap: "$818.7M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/ravn"
  },
  {
  symbol: "RBB",
  name: "RBB Bancorp",
  lastSale: "12.49",
  marketCap: "$246.54M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rbb"
  },
  {
  symbol: "ROLL",
  name: "RBC Bearings Incorporated",
  lastSale: "122.58",
  marketCap: "$3.07B",
  ipoYear: "2005",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/roll"
  },
  {
  symbol: "RICK",
  name: "RCI Hospitality Holdings, Inc.",
  lastSale: "25.02",
  marketCap: "$228.31M",
  ipoYear: "1995",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/rick"
  },
  {
  symbol: "RCMT",
  name: "RCM Technologies, Inc.",
  lastSale: "1.35",
  marketCap: "$15.48M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rcmt"
  },
  {
  symbol: "RDI",
  name: "Reading International Inc",
  lastSale: "2.42",
  marketCap: "$52.63M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/rdi"
  },
  {
  symbol: "RDIB",
  name: "Reading International Inc",
  lastSale: "18.3901",
  marketCap: "$399.95M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Movies/Entertainment",
  summaryQuote: "https://old.nasdaq.com/symbol/rdib"
  },
  {
  symbol: "BLCN",
  name: "Reality Shares Nasdaq NextGen Economy ETF",
  lastSale: "34.34",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/blcn"
  },
  {
  symbol: "RNWK",
  name: "RealNetworks, Inc.",
  lastSale: "1.8",
  marketCap: "$68.89M",
  ipoYear: "1997",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rnwk"
  },
  {
  symbol: "RP",
  name: "RealPage, Inc.",
  lastSale: "57.08",
  marketCap: "$5.82B",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/rp"
  },
  {
  symbol: "RETA",
  name: "Reata Pharmaceuticals, Inc.",
  lastSale: "119.05",
  marketCap: "$4B",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/reta"
  },
  {
  symbol: "RCHGU",
  name: "Recharge Acquisition Corp.",
  lastSale: "9.89",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rchgu"
  },
  {
  symbol: "RCON",
  name: "Recon Technology, Ltd.",
  lastSale: "1.1",
  marketCap: "$7.92M",
  ipoYear: "2009",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/rcon"
  },
  {
  symbol: "REPH",
  name: "Recro Pharma, Inc.",
  lastSale: "1.85",
  marketCap: "$43.73M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/reph"
  },
  {
  symbol: "RRBI",
  name: "Red River Bancshares, Inc.",
  lastSale: "46.21",
  marketCap: "$338.63M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rrbi"
  },
  {
  symbol: "RRGB",
  name: "Red Robin Gourmet Burgers, Inc.",
  lastSale: "12.59",
  marketCap: "$195.66M",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/rrgb"
  },
  {
  symbol: "RRR",
  name: "Red Rock Resorts, Inc.",
  lastSale: "18.75",
  marketCap: "$2.2B",
  ipoYear: "2016",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/rrr"
  },
  {
  symbol: "RDVT",
  name: "Red Violet, Inc.",
  lastSale: "22.25",
  marketCap: "$270.06M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/rdvt"
  },
  {
  symbol: "RDFN",
  name: "Redfin Corporation",
  lastSale: "43.26",
  marketCap: "$4.3B",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Real Estate",
  summaryQuote: "https://old.nasdaq.com/symbol/rdfn"
  },
  {
  symbol: "RDHL",
  name: "Redhill Biopharma Ltd.",
  lastSale: "9.74",
  marketCap: "$364.36M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rdhl"
  },
  {
  symbol: "REED",
  name: "Reeds, Inc.",
  lastSale: "0.9499",
  marketCap: "$59.78M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/reed"
  },
  {
  symbol: "REG",
  name: "Regency Centers Corporation",
  lastSale: "36.22",
  marketCap: "$6.15B",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/reg"
  },
  {
  symbol: "REGN",
  name: "Regeneron Pharmaceuticals, Inc.",
  lastSale: "582.52",
  marketCap: "$61.98B",
  ipoYear: "1991",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/regn"
  },
  {
  symbol: "RGNX",
  name: "REGENXBIO Inc.",
  lastSale: "29.75",
  marketCap: "$1.11B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/rgnx"
  },
  {
  symbol: "RGLS",
  name: "Regulus Therapeutics Inc.",
  lastSale: "0.5166",
  marketCap: "$18.56M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rgls"
  },
  {
  symbol: "REKR",
  name: "Rekor Systems, Inc.",
  lastSale: "4.8",
  marketCap: "$157.88M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/rekr"
  },
  {
  symbol: "RLAY",
  name: "Relay Therapeutics, Inc.",
  lastSale: "38.92",
  marketCap: "$3.5B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/rlay"
  },
  {
  symbol: "RBNC",
  name: "Reliant Bancorp, Inc.",
  lastSale: "17.04",
  marketCap: "$283.45M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rbnc"
  },
  {
  symbol: "RELV",
  name: "Reliv&#39; International, Inc.",
  lastSale: "3.63",
  marketCap: "$6.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/relv"
  },
  {
  symbol: "RLMD",
  name: "Relmada Therapeutics, Inc.",
  lastSale: "33.06",
  marketCap: "$529.75M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rlmd"
  },
  {
  symbol: "MARK",
  name: "Remark Holdings, Inc.",
  lastSale: "1.18",
  marketCap: "$117.41M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/mark"
  },
  {
  symbol: "RNLX",
  name: "Renalytix AI plc",
  lastSale: "12.04",
  marketCap: "$433.62M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/rnlx"
  },
  {
  symbol: "RNST",
  name: "Renasant Corporation",
  lastSale: "28.69",
  marketCap: "$1.61B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rnst"
  },
  {
  symbol: "REGI",
  name: "Renewable Energy Group, Inc.",
  lastSale: "59.12",
  marketCap: "$2.32B",
  ipoYear: "2012",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/regi"
  },
  {
  symbol: "RCII",
  name: "Rent-A-Center Inc.",
  lastSale: "32.34",
  marketCap: "$1.74B",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rcii"
  },
  {
  symbol: "RPTX",
  name: "Repare Therapeutics Inc.",
  lastSale: "26.3",
  marketCap: "$966.62M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rptx"
  },
  {
  symbol: "RPAY",
  name: "Repay Holdings Corporation",
  lastSale: "24.31",
  marketCap: "$1.77B",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rpay"
  },
  {
  symbol: "RGEN",
  name: "Repligen Corporation",
  lastSale: "175.84",
  marketCap: "$9.23B",
  ipoYear: "1986",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/rgen"
  },
  {
  symbol: "REPL",
  name: "Replimune Group, Inc.",
  lastSale: "44.89",
  marketCap: "$1.81B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/repl"
  },
  {
  symbol: "KRMD",
  name: "Repro Med Systems, Inc.",
  lastSale: "6.02",
  marketCap: "$264.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/krmd"
  },
  {
  symbol: "RBCAA",
  name: "Republic Bancorp, Inc.",
  lastSale: "33.52",
  marketCap: "$700.84M",
  ipoYear: "1998",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rbcaa"
  },
  {
  symbol: "FRBK",
  name: "Republic First Bancorp, Inc.",
  lastSale: "2.28",
  marketCap: "$134.19M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/frbk"
  },
  {
  symbol: "REFR",
  name: "Research Frontiers Incorporated",
  lastSale: "2.79",
  marketCap: "$88.1M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/refr"
  },
  {
  symbol: "RSSS",
  name: "Research Solutions, Inc",
  lastSale: "2.36",
  marketCap: "$61.79M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rsss"
  },
  {
  symbol: "RESN",
  name: "Resonant Inc.",
  lastSale: "2.28",
  marketCap: "$121.52M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/resn"
  },
  {
  symbol: "RGP",
  name: "Resources Connection, Inc.",
  lastSale: "10.98",
  marketCap: "$356.12M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rgp"
  },
  {
  symbol: "ROIC",
  name: "Retail Opportunity Investments Corp.",
  lastSale: "10.25",
  marketCap: "$1.21B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/roic"
  },
  {
  symbol: "RETO",
  name: "ReTo Eco-Solutions, Inc.",
  lastSale: "0.728",
  marketCap: "$17.57M",
  ipoYear: "2017",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/reto"
  },
  {
  symbol: "RTRX",
  name: "Retrophin, Inc.",
  lastSale: "21.51",
  marketCap: "$1.09B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rtrx"
  },
  {
  symbol: "RVNC",
  name: "Revance Therapeutics, Inc.",
  lastSale: "26.03",
  marketCap: "$1.72B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rvnc"
  },
  {
  symbol: "RVMD",
  name: "Revolution Medicines, Inc.",
  lastSale: "32.92",
  marketCap: "$2.17B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/rvmd"
  },
  {
  symbol: "RWLK",
  name: "ReWalk Robotics Ltd.",
  lastSale: "1.22",
  marketCap: "$23.37M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/rwlk"
  },
  {
  symbol: "REXN",
  name: "Rexahn Pharmaceuticals, Inc.",
  lastSale: "2.19",
  marketCap: "$9.82M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rexn"
  },
  {
  symbol: "REYN",
  name: "Reynolds Consumer Products Inc.",
  lastSale: "29.68",
  marketCap: "$6.22B",
  ipoYear: "2020",
  sector: "Consumer Durables",
  industry: "Containers/Packaging",
  summaryQuote: "https://old.nasdaq.com/symbol/reyn"
  },
  {
  symbol: "RFIL",
  name: "RF Industries, Ltd.",
  lastSale: "4.375",
  marketCap: "$42.75M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/rfil"
  },
  {
  symbol: "RGCO",
  name: "RGC Resources Inc.",
  lastSale: "23.6",
  marketCap: "$192.34M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/rgco"
  },
  {
  symbol: "RBKB",
  name: "Rhinebeck Bancorp, Inc.",
  lastSale: "6.8",
  marketCap: "$75.71M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rbkb"
  },
  {
  symbol: "RYTM",
  name: "Rhythm Pharmaceuticals, Inc.",
  lastSale: "23.24",
  marketCap: "$1.03B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rytm"
  },
  {
  symbol: "RBBN",
  name: "Ribbon Communications Inc. ",
  lastSale: "3.82",
  marketCap: "$554.47M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rbbn"
  },
  {
  symbol: "RIBT",
  name: "RiceBran Technologies",
  lastSale: "0.61",
  marketCap: "$24.53M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/ribt"
  },
  {
  symbol: "RELL",
  name: "Richardson Electronics, Ltd.",
  lastSale: "4.26",
  marketCap: "$56.26M",
  ipoYear: "1983",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/rell"
  },
  {
  symbol: "RMBI",
  name: "Richmond Mutual Bancorporation, Inc.",
  lastSale: "11.29",
  marketCap: "$146.15M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rmbi"
  },
  {
  symbol: "RIGL",
  name: "Rigel Pharmaceuticals, Inc.",
  lastSale: "2.47",
  marketCap: "$417.25M",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rigl"
  },
  {
  symbol: "RNET",
  name: "RigNet, Inc.",
  lastSale: "3.67",
  marketCap: "$75.43M",
  ipoYear: "2010",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/rnet"
  },
  {
  symbol: "RMNI",
  name: "Rimini Street, Inc.",
  lastSale: "3.55",
  marketCap: "$267.4M",
  ipoYear: "2015",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rmni"
  },
  {
  symbol: "RIOT",
  name: "Riot Blockchain, Inc",
  lastSale: "4.02",
  marketCap: "$196.67M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/riot"
  },
  {
  symbol: "REDU",
  name: "RISE Education Cayman Ltd",
  lastSale: "5.98",
  marketCap: "$337.14M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/redu"
  },
  {
  symbol: "RVSB",
  name: "Riverview Bancorp Inc",
  lastSale: "4.87",
  marketCap: "$108.34M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/rvsb"
  },
  {
  symbol: "RIVE",
  name: "Riverview Financial Corporation",
  lastSale: "7",
  marketCap: "$64.96M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/rive"
  },
  {
  symbol: "RMRM",
  name: "RMR Mortgage Trust",
  lastSale: "7.53",
  marketCap: "$76.82M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rmrm"
  },
  {
  symbol: "RCKT",
  name: "Rocket Pharmaceuticals, Inc.",
  lastSale: "28.87",
  marketCap: "$1.59B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rckt"
  },
  {
  symbol: "RMTI",
  name: "Rockwell Medical, Inc.",
  lastSale: "0.8852",
  marketCap: "$81.54M",
  ipoYear: "1998",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rmti"
  },
  {
  symbol: "RCKY",
  name: "Rocky Brands, Inc.",
  lastSale: "24.23",
  marketCap: "$177.25M",
  ipoYear: "1993",
  sector: "Consumer Non-Durables",
  industry: "Shoe Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/rcky"
  },
  {
  symbol: "RMCF",
  name: "Rocky Mountain Chocolate Factory, Inc.",
  lastSale: "2.77",
  marketCap: "$16.82M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/rmcf"
  },
  {
  symbol: "ROKU",
  name: "Roku, Inc.",
  lastSale: "225.07",
  marketCap: "$28.07B",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Television Services",
  summaryQuote: "https://old.nasdaq.com/symbol/roku"
  },
  {
  symbol: "ROOT",
  name: "Root, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/root"
  },
  {
  symbol: "ROST",
  name: "Ross Stores, Inc.",
  lastSale: "91.45",
  marketCap: "$32.56B",
  ipoYear: "1985",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/rost"
  },
  {
  symbol: "ROCH",
  name: "Roth CH Acquisition I Co.",
  lastSale: "9.92",
  marketCap: "$97.49M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/roch"
  },
  {
  symbol: "ROCHU",
  name: "Roth CH Acquisition I Co.",
  lastSale: "10.505",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rochu"
  },
  {
  symbol: "ROCHW",
  name: "Roth CH Acquisition I Co.",
  lastSale: "0.825",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rochw"
  },
  {
  symbol: "RGLD",
  name: "Royal Gold, Inc.",
  lastSale: "121.33",
  marketCap: "$7.96B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/rgld"
  },
  {
  symbol: "RPRX",
  name: "Royalty Pharma plc",
  lastSale: "37.87",
  marketCap: "$22.99B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rprx"
  },
  {
  symbol: "RBCN",
  name: "Rubicon Technology, Inc.",
  lastSale: "8.46",
  marketCap: "$20.36M",
  ipoYear: "2007",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/rbcn"
  },
  {
  symbol: "RUBY",
  name: "Rubius Therapeutics, Inc.",
  lastSale: "4.65",
  marketCap: "$375.57M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ruby"
  },
  {
  symbol: "RUHN",
  name: "Ruhnn Holding Limited",
  lastSale: "2.43",
  marketCap: "$204.58M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/ruhn"
  },
  {
  symbol: "RMBL",
  name: "RumbleOn, Inc.",
  lastSale: "40.49",
  marketCap: "$90.5M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rmbl"
  },
  {
  symbol: "RUSHA",
  name: "Rush Enterprises, Inc.",
  lastSale: "36.63",
  marketCap: "$2.01B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/rusha"
  },
  {
  symbol: "RUSHB",
  name: "Rush Enterprises, Inc.",
  lastSale: "32.5",
  marketCap: "$1.78B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/rushb"
  },
  {
  symbol: "RUTH",
  name: "Ruth&#39;s Hospitality Group, Inc.",
  lastSale: "11.29",
  marketCap: "$394.29M",
  ipoYear: "2005",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/ruth"
  },
  {
  symbol: "RYAAY",
  name: "Ryanair Holdings plc",
  lastSale: "83.05",
  marketCap: "$18.69B",
  ipoYear: "1997",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ryaay"
  },
  {
  symbol: "STBA",
  name: "S&T Bancorp, Inc.",
  lastSale: "19.96",
  marketCap: "$783.46M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/stba"
  },
  {
  symbol: "SANW",
  name: "S&W Seed Company",
  lastSale: "2.39",
  marketCap: "$79.95M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/sanw"
  },
  {
  symbol: "SBRA",
  name: "Sabra Health Care REIT, Inc.",
  lastSale: "13.735",
  marketCap: "$2.82B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sbra"
  },
  {
  symbol: "SABR",
  name: "Sabre Corporation",
  lastSale: "6.47",
  marketCap: "$2.05B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/sabr"
  },
  {
  symbol: "SABRP",
  name: "Sabre Corporation",
  lastSale: "93",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/sabrp"
  },
  {
  symbol: "SFET",
  name: "Safe-T Group Ltd.",
  lastSale: "1",
  marketCap: "$18.15M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/sfet"
  },
  {
  symbol: "SAFT",
  name: "Safety Insurance Group, Inc.",
  lastSale: "69",
  marketCap: "$1.04B",
  ipoYear: "2002",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/saft"
  },
  {
  symbol: "SGA",
  name: "Saga Communications, Inc.",
  lastSale: "18.67",
  marketCap: "$111.89M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/sga"
  },
  {
  symbol: "SAGE",
  name: "Sage Therapeutics, Inc.",
  lastSale: "70.8",
  marketCap: "$3.68B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sage"
  },
  {
  symbol: "SAIA",
  name: "Saia, Inc.",
  lastSale: "143.79",
  marketCap: "$3.76B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/saia"
  },
  {
  symbol: "SLRX",
  name: "Salarius Pharmaceuticals, Inc.",
  lastSale: "0.716",
  marketCap: "$14.19M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/slrx"
  },
  {
  symbol: "SALM",
  name: "Salem Media Group, Inc.",
  lastSale: "0.9534",
  marketCap: "$25.44M",
  ipoYear: "1999",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/salm"
  },
  {
  symbol: "SAL",
  name: "Salisbury Bancorp, Inc.",
  lastSale: "34.22",
  marketCap: "$97.3M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/sal"
  },
  {
  symbol: "SAFM",
  name: "Sanderson Farms, Inc.",
  lastSale: "128.44",
  marketCap: "$2.86B",
  ipoYear: "1987",
  sector: "Consumer Non-Durables",
  industry: "Meat/Poultry/Fish",
  summaryQuote: "https://old.nasdaq.com/symbol/safm"
  },
  {
  symbol: "SASR",
  name: "Sandy Spring Bancorp, Inc.",
  lastSale: "25.24",
  marketCap: "$1.19B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sasr"
  },
  {
  symbol: "SGMO",
  name: "Sangamo Therapeutics, Inc.",
  lastSale: "11.19",
  marketCap: "$1.58B",
  ipoYear: "2000",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/sgmo"
  },
  {
  symbol: "SANM",
  name: "Sanmina Corporation",
  lastSale: "25.16",
  marketCap: "$1.7B",
  ipoYear: "1993",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/sanm"
  },
  {
  symbol: "SNY",
  name: "Sanofi",
  lastSale: "47.4",
  marketCap: "$119.1B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sny"
  },
  {
  symbol: "SPNS",
  name: "Sapiens International Corporation N.V.",
  lastSale: "28.43",
  marketCap: "$1.43B",
  ipoYear: "1992",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/spns"
  },
  {
  symbol: "SRPT",
  name: "Sarepta Therapeutics, Inc.",
  lastSale: "139.62",
  marketCap: "$10.96B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/srpt"
  },
  {
  symbol: "SRSAU",
  name: "Sarissa Capital Acquisition Corp.",
  lastSale: "10.2",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/srsau"
  },
  {
  symbol: "STSA",
  name: "Satsuma Pharmaceuticals, Inc.",
  lastSale: "3.83",
  marketCap: "$66.68M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/stsa"
  },
  {
  symbol: "SVRA",
  name: "Savara, Inc.",
  lastSale: "1.14",
  marketCap: "$61.71M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/svra"
  },
  {
  symbol: "SBFG",
  name: "SB Financial Group, Inc.",
  lastSale: "15.68",
  marketCap: "$119.9M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sbfg"
  },
  {
  symbol: "SBAC",
  name: "SBA Communications Corporation",
  lastSale: "301.83",
  marketCap: "$33.79B",
  ipoYear: "1999",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sbac"
  },
  {
  symbol: "SCSC",
  name: "ScanSource, Inc.",
  lastSale: "20.41",
  marketCap: "$517.62M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Retail: Computer Software & Peripheral Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/scsc"
  },
  {
  symbol: "SMIT",
  name: "Schmitt Industries, Inc.",
  lastSale: "5.06",
  marketCap: "$18.99M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/smit"
  },
  {
  symbol: "SCHN",
  name: "Schnitzer Steel Industries, Inc.",
  lastSale: "20.25",
  marketCap: "$548.93M",
  ipoYear: "1993",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/schn"
  },
  {
  symbol: "SRRK",
  name: "Scholar Rock Holding Corporation",
  lastSale: "30.02",
  marketCap: "$896.84M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/srrk"
  },
  {
  symbol: "SCHL",
  name: "Scholastic Corporation",
  lastSale: "20.935",
  marketCap: "$716.05M",
  ipoYear: "1992",
  sector: "Consumer Services",
  industry: "Books",
  summaryQuote: "https://old.nasdaq.com/symbol/schl"
  },
  {
  symbol: "SDGR",
  name: "Schrodinger, Inc.",
  lastSale: "59.63",
  marketCap: "$4.12B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sdgr"
  },
  {
  symbol: "SAMA",
  name: "Schultze Special Purpose Acquisition Corp.",
  lastSale: "10.15",
  marketCap: "$164.58M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sama"
  },
  {
  symbol: "SAMAU",
  name: "Schultze Special Purpose Acquisition Corp.",
  lastSale: "11.45",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/samau"
  },
  {
  symbol: "SAMAW",
  name: "Schultze Special Purpose Acquisition Corp.",
  lastSale: "0.39",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/samaw"
  },
  {
  symbol: "SJ",
  name: "Scienjoy Holding Corporation",
  lastSale: "5.81",
  marketCap: "$157.09M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sj"
  },
  {
  symbol: "SGMS",
  name: "Scientific Games Corp",
  lastSale: "31.77",
  marketCap: "$3.02B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sgms"
  },
  {
  symbol: "SCPL",
  name: "SciPlay Corporation",
  lastSale: "15.2",
  marketCap: "$346.37M",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/scpl"
  },
  {
  symbol: "SCPH",
  name: "scPharmaceuticals Inc.",
  lastSale: "8.08",
  marketCap: "$220.75M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/scph"
  },
  {
  symbol: "WORX",
  name: "SCWorx Corp.",
  lastSale: "1.31",
  marketCap: "$12.43M",
  ipoYear: "2016",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/worx"
  },
  {
  symbol: "SCYX",
  name: "SCYNEXIS, Inc.",
  lastSale: "4.65",
  marketCap: "$49.3M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/scyx"
  },
  {
  symbol: "SEAC",
  name: "SeaChange International, Inc.",
  lastSale: "0.7323",
  marketCap: "$27.5M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/seac"
  },
  {
  symbol: "SBCF",
  name: "Seacoast Banking Corporation of Florida",
  lastSale: "20.92",
  marketCap: "$1.15B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sbcf"
  },
  {
  symbol: "STX",
  name: "Seagate Technology PLC",
  lastSale: "48.555",
  marketCap: "$12.53B",
  ipoYear: "2002",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/stx"
  },
  {
  symbol: "SGEN",
  name: "Seagen Inc. ",
  lastSale: "196.92",
  marketCap: "$34.26B",
  ipoYear: "2001",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/sgen"
  },
  {
  symbol: "SHIP",
  name: "Seanergy Maritime Holdings Corp",
  lastSale: "0.47",
  marketCap: "$31.17M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/ship"
  },
  {
  symbol: "SHIPW",
  name: "Seanergy Maritime Holdings Corp",
  lastSale: "0.0235",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/shipw"
  },
  {
  symbol: "SHIPZ",
  name: "Seanergy Maritime Holdings Corp",
  lastSale: "0.0291",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/shipz"
  },
  {
  symbol: "SPNE",
  name: "SeaSpine Holdings Corporation",
  lastSale: "13.93",
  marketCap: "$384.43M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/spne"
  },
  {
  symbol: "EYES",
  name: "Second Sight Medical Products, Inc.",
  lastSale: "0.8001",
  marketCap: "$18.5M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/eyes"
  },
  {
  symbol: "EYESW",
  name: "Second Sight Medical Products, Inc.",
  lastSale: "0.0561",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/eyesw"
  },
  {
  symbol: "SECO",
  name: "Secoo Holding Limited",
  lastSale: "2.76",
  marketCap: "$195M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/seco"
  },
  {
  symbol: "SCWX",
  name: "SecureWorks Corp.",
  lastSale: "10.6",
  marketCap: "$871.2M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/scwx"
  },
  {
  symbol: "SNFCA",
  name: "Security National Financial Corporation",
  lastSale: "6.7",
  marketCap: "$128.03M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/snfca"
  },
  {
  symbol: "SEEL",
  name: "Seelos Therapeutics, Inc.",
  lastSale: "0.78",
  marketCap: "$41.55M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/seel"
  },
  {
  symbol: "SEIC",
  name: "SEI Investments Company",
  lastSale: "49.83",
  marketCap: "$7.3B",
  ipoYear: "1981",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/seic"
  },
  {
  symbol: "SLCT",
  name: "Select Bancorp, Inc.",
  lastSale: "7.45",
  marketCap: "$132.51M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/slct"
  },
  {
  symbol: "SIC",
  name: "Select Interior Concepts, Inc.",
  lastSale: "6.91",
  marketCap: "$175.29M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/sic"
  },
  {
  symbol: "SELB",
  name: "Selecta Biosciences, Inc.",
  lastSale: "2.96",
  marketCap: "$317.14M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/selb"
  },
  {
  symbol: "SIGI",
  name: "Selective Insurance Group, Inc.",
  lastSale: "54.04",
  marketCap: "$3.23B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/sigi"
  },
  {
  symbol: "SLS",
  name: "SELLAS Life Sciences Group, Inc. ",
  lastSale: "2.75",
  marketCap: "$26.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sls"
  },
  {
  symbol: "LEDS",
  name: "SemiLEDS Corporation",
  lastSale: "2.89",
  marketCap: "$11.58M",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/leds"
  },
  {
  symbol: "SMTC",
  name: "Semtech Corporation",
  lastSale: "55.47",
  marketCap: "$3.61B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/smtc"
  },
  {
  symbol: "SNCA",
  name: "Seneca Biopharma, Inc.",
  lastSale: "0.62",
  marketCap: "$10.72M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/snca"
  },
  {
  symbol: "SENEA",
  name: "Seneca Foods Corp.",
  lastSale: "40.58",
  marketCap: "$369.38M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/senea"
  },
  {
  symbol: "SENEB",
  name: "Seneca Foods Corp.",
  lastSale: "42",
  marketCap: "$382.3M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/seneb"
  },
  {
  symbol: "SNES",
  name: "SenesTech, Inc.",
  lastSale: "1.45",
  marketCap: "$4.93M",
  ipoYear: "2016",
  sector: "Basic Industries",
  industry: "Agricultural Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/snes"
  },
  {
  symbol: "AIHS",
  name: "Senmiao Technology Limited",
  lastSale: "1.14",
  marketCap: "$49.43M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/aihs"
  },
  {
  symbol: "SRTS",
  name: "Sensus Healthcare, Inc.",
  lastSale: "2.59",
  marketCap: "$42.74M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/srts"
  },
  {
  symbol: "SQBG",
  name: "Sequential Brands Group, Inc.",
  lastSale: "6.59",
  marketCap: "$10.87M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/sqbg"
  },
  {
  symbol: "MCRB",
  name: "Seres Therapeutics, Inc.",
  lastSale: "30.21",
  marketCap: "$2.7B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mcrb"
  },
  {
  symbol: "SVC",
  name: "Service Properties Trust",
  lastSale: "7.5",
  marketCap: "$1.23B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/svc"
  },
  {
  symbol: "SREV",
  name: "ServiceSource International, Inc.",
  lastSale: "1.4",
  marketCap: "$133.86M",
  ipoYear: "2011",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/srev"
  },
  {
  symbol: "SFBS",
  name: "ServisFirst Bancshares, Inc.",
  lastSale: "37.18",
  marketCap: "$2B",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sfbs"
  },
  {
  symbol: "SESN",
  name: "Sesen Bio, Inc.",
  lastSale: "1.11",
  marketCap: "$130.06M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sesn"
  },
  {
  symbol: "SVBI",
  name: "Severn Bancorp Inc",
  lastSale: "6.36",
  marketCap: "$81.49M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/svbi"
  },
  {
  symbol: "SGBX",
  name: "SG Blocks, Inc.",
  lastSale: "2.5",
  marketCap: "$21.49M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/sgbx"
  },
  {
  symbol: "SGOC",
  name: "SGOCO Group, Ltd",
  lastSale: "1.14",
  marketCap: "$114.68M",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/sgoc"
  },
  {
  symbol: "SMED",
  name: "Sharps Compliance Corp.",
  lastSale: "6.34",
  marketCap: "$104.12M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/smed"
  },
  {
  symbol: "SHSP",
  name: "SharpSpring, Inc.",
  lastSale: "10.92",
  marketCap: "$126.16M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/shsp"
  },
  {
  symbol: "STTK",
  name: "Shattuck Labs, Inc.",
  lastSale: "24.95",
  marketCap: "$997.05M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sttk"
  },
  {
  symbol: "SHEN",
  name: "Shenandoah Telecommunications Co",
  lastSale: "44.91",
  marketCap: "$2.24B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/shen"
  },
  {
  symbol: "SFT",
  name: "Shift Technologies, Inc.",
  lastSale: "9.51",
  marketCap: "$780.84M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/sft"
  },
  {
  symbol: "SFTTW",
  name: "Shift Technologies, Inc.",
  lastSale: "2.17",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/sfttw"
  },
  {
  symbol: "PIXY",
  name: "ShiftPixy, Inc.",
  lastSale: "2.24",
  marketCap: "$46.82M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Diversified Commercial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pixy"
  },
  {
  symbol: "SCCI",
  name: "Shimmick Construction Company, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/scci"
  },
  {
  symbol: "TYHT",
  name: "Shineco, Inc.",
  lastSale: "2.72",
  marketCap: "$8.26M",
  ipoYear: "2016",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/tyht"
  },
  {
  symbol: "SWAV",
  name: "ShockWave Medical, Inc.",
  lastSale: "72.25",
  marketCap: "$2.46B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/swav"
  },
  {
  symbol: "SCVL",
  name: "Shoe Carnival, Inc.",
  lastSale: "32.69",
  marketCap: "$460.97M",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/scvl"
  },
  {
  symbol: "SHBI",
  name: "Shore Bancshares Inc",
  lastSale: "10.77",
  marketCap: "$131.59M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/shbi"
  },
  {
  symbol: "SSTI",
  name: "ShotSpotter, Inc.",
  lastSale: "31.56",
  marketCap: "$360.48M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ssti"
  },
  {
  symbol: "SIBN",
  name: "SI-BONE, Inc.",
  lastSale: "21.01",
  marketCap: "$669.09M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/sibn"
  },
  {
  symbol: "SIEB",
  name: "Siebert Financial Corp.",
  lastSale: "3.63",
  marketCap: "$111.27M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/sieb"
  },
  {
  symbol: "SIEN",
  name: "Sientra, Inc.",
  lastSale: "4.33",
  marketCap: "$217.85M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/sien"
  },
  {
  symbol: "BSRR",
  name: "Sierra Bancorp",
  lastSale: "21.39",
  marketCap: "$324.97M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/bsrr"
  },
  {
  symbol: "SRRA",
  name: "Sierra Oncology, Inc.",
  lastSale: "12.85",
  marketCap: "$133.59M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/srra"
  },
  {
  symbol: "SWIR",
  name: "Sierra Wireless, Inc.",
  lastSale: "11.22",
  marketCap: "$408.01M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/swir"
  },
  {
  symbol: "SIFY",
  name: "Sify Technologies Limited",
  lastSale: "1.09",
  marketCap: "$195.35M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/sify"
  },
  {
  symbol: "SIGA",
  name: "SIGA Technologies Inc.",
  lastSale: "6.49",
  marketCap: "$507M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/siga"
  },
  {
  symbol: "SGLB",
  name: "Sigma Labs, Inc.",
  lastSale: "2.33",
  marketCap: "$13.58M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/sglb"
  },
  {
  symbol: "SGLBW",
  name: "Sigma Labs, Inc.",
  lastSale: "0.1899",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/sglbw"
  },
  {
  symbol: "SGMA",
  name: "SigmaTron International, Inc.",
  lastSale: "3.5",
  marketCap: "$14.85M",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/sgma"
  },
  {
  symbol: "SBNY",
  name: "Signature Bank",
  lastSale: "79.62",
  marketCap: "$4.26B",
  ipoYear: "2004",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sbny"
  },
  {
  symbol: "SLN",
  name: "Silence Therapeutics Plc",
  lastSale: "15.52",
  marketCap: "$429.03M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sln"
  },
  {
  symbol: "SLGN",
  name: "Silgan Holdings Inc.",
  lastSale: "35.37",
  marketCap: "$3.92B",
  ipoYear: "1997",
  sector: "Consumer Durables",
  industry: "Containers/Packaging",
  summaryQuote: "https://old.nasdaq.com/symbol/slgn"
  },
  {
  symbol: "SILC",
  name: "Silicom Ltd",
  lastSale: "35.58",
  marketCap: "$255.31M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/silc"
  },
  {
  symbol: "SLAB",
  name: "Silicon Laboratories, Inc.",
  lastSale: "99.93",
  marketCap: "$4.38B",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/slab"
  },
  {
  symbol: "SIMO",
  name: "Silicon Motion Technology Corporation",
  lastSale: "38.35",
  marketCap: "$1.35B",
  ipoYear: "2005",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/simo"
  },
  {
  symbol: "SILK",
  name: "Silk Road Medical, Inc.",
  lastSale: "62.08",
  marketCap: "$2.09B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/silk"
  },
  {
  symbol: "SSPK",
  name: "Silver Spike Acquisition Corp.",
  lastSale: "10.08",
  marketCap: "$315M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sspk"
  },
  {
  symbol: "SSPKU",
  name: "Silver Spike Acquisition Corp.",
  lastSale: "10.25",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sspku"
  },
  {
  symbol: "SSPKW",
  name: "Silver Spike Acquisition Corp.",
  lastSale: "0.4901",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sspkw"
  },
  {
  symbol: "SAMG",
  name: "Silvercrest Asset Management Group Inc.",
  lastSale: "11.68",
  marketCap: "$167.87M",
  ipoYear: "2013",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/samg"
  },
  {
  symbol: "SSNT",
  name: "SilverSun Technologies, Inc.",
  lastSale: "3.21",
  marketCap: "$14.45M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ssnt"
  },
  {
  symbol: "SFNC",
  name: "Simmons First National Corporation",
  lastSale: "16.895",
  marketCap: "$1.84B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sfnc"
  },
  {
  symbol: "SLP",
  name: "Simulations Plus, Inc.",
  lastSale: "68.19",
  marketCap: "$1.36B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/slp"
  },
  {
  symbol: "SINA",
  name: "Sina Corporation",
  lastSale: "42.69",
  marketCap: "$2.55B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/sina"
  },
  {
  symbol: "SBGI",
  name: "Sinclair Broadcast Group, Inc.",
  lastSale: "17.29",
  marketCap: "$1.29B",
  ipoYear: "1995",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/sbgi"
  },
  {
  symbol: "SINO",
  name: "Sino-Global Shipping America, Ltd.",
  lastSale: "1.8406",
  marketCap: "$8.17M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Oil Refining/Marketing",
  summaryQuote: "https://old.nasdaq.com/symbol/sino"
  },
  {
  symbol: "SVA",
  name: "Sinovac Biotech, Ltd.",
  lastSale: "6.47",
  marketCap: "$639.9M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sva"
  },
  {
  symbol: "SINT",
  name: "SiNtx Technologies, Inc.",
  lastSale: "1.78",
  marketCap: "$43.7M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/sint"
  },
  {
  symbol: "SPQQ",
  name: "Siren Large Cap Blend Index ETF",
  lastSale: "27.69",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/spqq"
  },
  {
  symbol: "SG",
  name: "Sirius International Insurance Group, Ltd.",
  lastSale: "11.5",
  marketCap: "$1.33B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/sg"
  },
  {
  symbol: "SIRI",
  name: "Sirius XM Holdings Inc.",
  lastSale: "5.91",
  marketCap: "$25.11B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/siri"
  },
  {
  symbol: "SRVA",
  name: "SIRVA, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/srva"
  },
  {
  symbol: "SITM",
  name: "SiTime Corporation",
  lastSale: "92.85",
  marketCap: "$1.55B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/sitm"
  },
  {
  symbol: "SYTA",
  name: "Siyata Mobile, Inc.",
  lastSale: "6.05",
  marketCap: "$18.83M",
  ipoYear: "2020",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/syta"
  },
  {
  symbol: "SYTAW",
  name: "Siyata Mobile, Inc.",
  lastSale: "2.545",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/sytaw"
  },
  {
  symbol: "EDTK",
  name: "Skillful Craftsman Education Technology Limited",
  lastSale: "3.1",
  marketCap: "$37.2M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/edtk"
  },
  {
  symbol: "SKYW",
  name: "SkyWest, Inc.",
  lastSale: "29.72",
  marketCap: "$1.49B",
  ipoYear: "1986",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/skyw"
  },
  {
  symbol: "SWKS",
  name: "Skyworks Solutions, Inc.",
  lastSale: "145.12",
  marketCap: "$24.24B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/swks"
  },
  {
  symbol: "SNBR",
  name: "Sleep Number Corporation",
  lastSale: "64.73",
  marketCap: "$1.8B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/snbr"
  },
  {
  symbol: "SLM",
  name: "SLM Corporation",
  lastSale: "9.19",
  marketCap: "$3.45B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/slm"
  },
  {
  symbol: "SLMBP",
  name: "SLM Corporation",
  lastSale: "44.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/slmbp"
  },
  {
  symbol: "SGH",
  name: "SMART Global Holdings, Inc.",
  lastSale: "24.56",
  marketCap: "$599.75M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/sgh"
  },
  {
  symbol: "SND",
  name: "Smart Sand, Inc.",
  lastSale: "1.405",
  marketCap: "$61.16M",
  ipoYear: "2016",
  sector: "Basic Industries",
  industry: "Mining & Quarrying of Nonmetallic Minerals (No Fuels)",
  summaryQuote: "https://old.nasdaq.com/symbol/snd"
  },
  {
  symbol: "SMBK",
  name: "SmartFinancial, Inc.",
  lastSale: "14.5",
  marketCap: "$220.88M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/smbk"
  },
  {
  symbol: "SDC",
  name: "SmileDirectClub, Inc.",
  lastSale: "9.88",
  marketCap: "$3.81B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/sdc"
  },
  {
  symbol: "SWBI",
  name: "Smith & Wesson Brands, Inc.",
  lastSale: "16.96",
  marketCap: "$948.12M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Ordnance And Accessories",
  summaryQuote: "https://old.nasdaq.com/symbol/swbi"
  },
  {
  symbol: "SMSI",
  name: "Smith Micro Software, Inc.",
  lastSale: "4.27",
  marketCap: "$176.59M",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/smsi"
  },
  {
  symbol: "SMTX",
  name: "SMTC Corporation",
  lastSale: "3.49",
  marketCap: "$98.47M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/smtx"
  },
  {
  symbol: "SCKT",
  name: "Socket Mobile, Inc.",
  lastSale: "2.52",
  marketCap: "$15.25M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/sckt"
  },
  {
  symbol: "GIGE",
  name: "SoFi Gig Economy ETF",
  lastSale: "30.16",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/gige"
  },
  {
  symbol: "SAII",
  name: "Software Acquisition Group Inc. II",
  lastSale: "9.75",
  marketCap: "$210.23M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/saii"
  },
  {
  symbol: "SAIIU",
  name: "Software Acquisition Group Inc. II",
  lastSale: "9.93",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/saiiu"
  },
  {
  symbol: "SAIIW",
  name: "Software Acquisition Group Inc. II",
  lastSale: "0.65",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/saiiw"
  },
  {
  symbol: "SOHU",
  name: "Sohu.com Limited ",
  lastSale: "18.47",
  marketCap: "$725.29M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sohu"
  },
  {
  symbol: "SLRC",
  name: "Solar Capital Ltd.",
  lastSale: "16.14",
  marketCap: "$682.09M",
  ipoYear: "2010",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/slrc"
  },
  {
  symbol: "SUNS",
  name: "Solar Senior Capital Ltd.",
  lastSale: "12.95",
  marketCap: "$207.83M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/suns"
  },
  {
  symbol: "SEDG",
  name: "SolarEdge Technologies, Inc.",
  lastSale: "261.84",
  marketCap: "$13.12B",
  ipoYear: "2015",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/sedg"
  },
  {
  symbol: "SLNO",
  name: "Soleno Therapeutics, Inc.",
  lastSale: "1.73",
  marketCap: "$137.7M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/slno"
  },
  {
  symbol: "SLGL",
  name: "Sol-Gel Technologies Ltd.",
  lastSale: "8.3199",
  marketCap: "$191.33M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/slgl"
  },
  {
  symbol: "SLDB",
  name: "Solid Biosciences Inc.",
  lastSale: "3.39",
  marketCap: "$156.29M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/sldb"
  },
  {
  symbol: "SNGX",
  name: "Soligenix, Inc.",
  lastSale: "1.75",
  marketCap: "$52.23M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sngx"
  },
  {
  symbol: "SNGXW",
  name: "Soligenix, Inc.",
  lastSale: "0.5499",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sngxw"
  },
  {
  symbol: "SOLY",
  name: "Soliton, Inc.",
  lastSale: "8.06",
  marketCap: "$170.79M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/soly"
  },
  {
  symbol: "SONM",
  name: "Sonim Technologies, Inc.",
  lastSale: "0.5698",
  marketCap: "$37.57M",
  ipoYear: "2019",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/sonm"
  },
  {
  symbol: "SONN",
  name: "Sonnet BioTherapeutics Holdings, Inc.",
  lastSale: "2.7",
  marketCap: "$36.84M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sonn"
  },
  {
  symbol: "SNOA",
  name: "Sonoma Pharmaceuticals, Inc.",
  lastSale: "7.74",
  marketCap: "$15.64M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/snoa"
  },
  {
  symbol: "SONO",
  name: "Sonos, Inc.",
  lastSale: "16.17",
  marketCap: "$1.79B",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/sono"
  },
  {
  symbol: "SRNE",
  name: "Sorrento Therapeutics, Inc.",
  lastSale: "7.71",
  marketCap: "$2.02B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/srne"
  },
  {
  symbol: "SOHO",
  name: "Sotherly Hotels Inc.",
  lastSale: "1.6",
  marketCap: "$23.81M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/soho"
  },
  {
  symbol: "SOHOB",
  name: "Sotherly Hotels Inc.",
  lastSale: "6.0101",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sohob"
  },
  {
  symbol: "SOHON",
  name: "Sotherly Hotels Inc.",
  lastSale: "6.08",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sohon"
  },
  {
  symbol: "SOHOO",
  name: "Sotherly Hotels Inc.",
  lastSale: "6.18",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/sohoo"
  },
  {
  symbol: "SFBC",
  name: "Sound Financial Bancorp, Inc.",
  lastSale: "29.01",
  marketCap: "$75.29M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/sfbc"
  },
  {
  symbol: "SMMC",
  name: "South Mountain Merger Corp.",
  lastSale: "11.12",
  marketCap: "$347.5M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/smmc"
  },
  {
  symbol: "SMMCU",
  name: "South Mountain Merger Corp.",
  lastSale: "12.24",
  marketCap: "$382.5M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/smmcu"
  },
  {
  symbol: "SMMCW",
  name: "South Mountain Merger Corp.",
  lastSale: "2.17",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/smmcw"
  },
  {
  symbol: "SPFI",
  name: "South Plains Financial, Inc.",
  lastSale: "14.19",
  marketCap: "$256.26M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/spfi"
  },
  {
  symbol: "SSB",
  name: "South State Corporation",
  lastSale: "59.28",
  marketCap: "$4.2B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ssb"
  },
  {
  symbol: "SFST",
  name: "Southern First Bancshares, Inc.",
  lastSale: "26.15",
  marketCap: "$202.26M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sfst"
  },
  {
  symbol: "SMBC",
  name: "Southern Missouri Bancorp, Inc.",
  lastSale: "26.84",
  marketCap: "$244.96M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/smbc"
  },
  {
  symbol: "SONA",
  name: "Southern National Bancorp of Virginia, Inc.",
  lastSale: "10.01",
  marketCap: "$243.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sona"
  },
  {
  symbol: "SBSI",
  name: "Southside Bancshares, Inc.",
  lastSale: "26.45",
  marketCap: "$873.73M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sbsi"
  },
  {
  symbol: "SY",
  name: "So-Young International Inc.",
  lastSale: "12.2",
  marketCap: "$1.3B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sy"
  },
  {
  symbol: "SP",
  name: "SP Plus Corporation",
  lastSale: "18.86",
  marketCap: "$435.42M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Rental/Leasing Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/sp"
  },
  {
  symbol: "SGRP",
  name: "SPAR Group, Inc.",
  lastSale: "0.8094",
  marketCap: "$17.09M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sgrp"
  },
  {
  symbol: "SPKE",
  name: "Spark Energy, Inc.",
  lastSale: "9.61",
  marketCap: "$340.89M",
  ipoYear: "2014",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/spke"
  },
  {
  symbol: "SPKEP",
  name: "Spark Energy, Inc.",
  lastSale: "22.2802",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/spkep"
  },
  {
  symbol: "TMTSU",
  name: "Spartacus Acquisition Corporation",
  lastSale: "9.93",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tmtsu"
  },
  {
  symbol: "SPTN",
  name: "SpartanNash Company",
  lastSale: "19.49",
  marketCap: "$679.27M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/sptn"
  },
  {
  symbol: "DWFI",
  name: "SPDR Dorsey Wright Fixed Income Allocation ETF",
  lastSale: "24.645",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dwfi"
  },
  {
  symbol: "SPPI",
  name: "Spectrum Pharmaceuticals, Inc.",
  lastSale: "3.41",
  marketCap: "$496.95M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sppi"
  },
  {
  symbol: "SPRO",
  name: "Spero Therapeutics, Inc.",
  lastSale: "13.52",
  marketCap: "$351.12M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/spro"
  },
  {
  symbol: "ANY",
  name: "Sphere 3D Corp.",
  lastSale: "1.57",
  marketCap: "$10.92M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/any"
  },
  {
  symbol: "SPI",
  name: "SPI Energy Co., Ltd.",
  lastSale: "8.82",
  marketCap: "$157.01M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/spi"
  },
  {
  symbol: "SPEL",
  name: "Spinal Elements Holdings, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/spel"
  },
  {
  symbol: "SAVE",
  name: "Spirit Airlines, Inc.",
  lastSale: "16.53",
  marketCap: "$1.61B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/save"
  },
  {
  symbol: "STXB",
  name: "Spirit of Texas Bancshares, Inc.",
  lastSale: "13.29",
  marketCap: "$230.13M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/stxb"
  },
  {
  symbol: "SPLK",
  name: "Splunk Inc.",
  lastSale: "208.77",
  marketCap: "$33.49B",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/splk"
  },
  {
  symbol: "SPOK",
  name: "Spok Holdings, Inc.",
  lastSale: "8.75",
  marketCap: "$166.69M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/spok"
  },
  {
  symbol: "SPWH",
  name: "Sportsman&#39;s Warehouse Holdings, Inc.",
  lastSale: "14.55",
  marketCap: "$634.49M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/spwh"
  },
  {
  symbol: "SBPH",
  name: "Spring Bank Pharmaceuticals, Inc.",
  lastSale: "1.14",
  marketCap: "$19.66M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sbph"
  },
  {
  symbol: "SWTX",
  name: "SpringWorks Therapeutics, Inc.",
  lastSale: "60.95",
  marketCap: "$2.97B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/swtx"
  },
  {
  symbol: "FUND",
  name: "Sprott Focus Trust, Inc.",
  lastSale: "5.975",
  marketCap: "$176.52M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Miscellaneous",
  summaryQuote: "https://old.nasdaq.com/symbol/fund"
  },
  {
  symbol: "SPT",
  name: "Sprout Social, Inc",
  lastSale: "46.45",
  marketCap: "$2.37B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/spt"
  },
  {
  symbol: "SFM",
  name: "Sprouts Farmers Market, Inc.",
  lastSale: "20.4",
  marketCap: "$2.41B",
  ipoYear: "2013",
  sector: "Consumer Services",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/sfm"
  },
  {
  symbol: "SPRB",
  name: "Spruce Biosciences, Inc.",
  lastSale: "19.92",
  marketCap: "$462.42M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sprb"
  },
  {
  symbol: "SPSC",
  name: "SPS Commerce, Inc.",
  lastSale: "85.69",
  marketCap: "$3.01B",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/spsc"
  },
  {
  symbol: "SRAX",
  name: "SRAX, Inc.",
  lastSale: "2.38",
  marketCap: "$37.45M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/srax"
  },
  {
  symbol: "SSNC",
  name: "SS&C Technologies Holdings, Inc.",
  lastSale: "62.98",
  marketCap: "$16.22B",
  ipoYear: "2010",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ssnc"
  },
  {
  symbol: "SSRM",
  name: "SSR Mining Inc.",
  lastSale: "19.21",
  marketCap: "$4.21B",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/ssrm"
  },
  {
  symbol: "STAA",
  name: "STAAR Surgical Company",
  lastSale: "74.59",
  marketCap: "$3.42B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Ophthalmic Goods",
  summaryQuote: "https://old.nasdaq.com/symbol/staa"
  },
  {
  symbol: "SRAC",
  name: "Stable Road Acquisition Corp.",
  lastSale: "10.25",
  marketCap: "$226.6M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/srac"
  },
  {
  symbol: "SRACU",
  name: "Stable Road Acquisition Corp.",
  lastSale: "11.17",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sracu"
  },
  {
  symbol: "SRACW",
  name: "Stable Road Acquisition Corp.",
  lastSale: "2.18",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sracw"
  },
  {
  symbol: "STAF",
  name: "Staffing 360 Solutions, Inc.",
  lastSale: "1.23",
  marketCap: "$11.47M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/staf"
  },
  {
  symbol: "STMP",
  name: "Stamps.com Inc.",
  lastSale: "249.13",
  marketCap: "$4.38B",
  ipoYear: "1999",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/stmp"
  },
  {
  symbol: "STND",
  name: "Standard AVB Financial Corp.",
  lastSale: "32.82",
  marketCap: "$153.59M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/stnd"
  },
  {
  symbol: "SBLK",
  name: "Star Bulk Carriers Corp.",
  lastSale: "6.815",
  marketCap: "$654.7M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/sblk"
  },
  {
  symbol: "SBLKZ",
  name: "Star Bulk Carriers Corp.",
  lastSale: "25.3727",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/sblkz"
  },
  {
  symbol: "SVACU",
  name: "Starboard Value Acquisition Corp.",
  lastSale: "9.99",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/svacu"
  },
  {
  symbol: "SBUX",
  name: "Starbucks Corporation",
  lastSale: "90.05",
  marketCap: "$105.27B",
  ipoYear: "1992",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/sbux"
  },
  {
  symbol: "STFC",
  name: "State Auto Financial Corporation",
  lastSale: "13.01",
  marketCap: "$570.33M",
  ipoYear: "1991",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/stfc"
  },
  {
  symbol: "MITO",
  name: "Stealth BioTherapeutics Corp.",
  lastSale: "1.5162",
  marketCap: "$75.2M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/mito"
  },
  {
  symbol: "GASS",
  name: "StealthGas, Inc.",
  lastSale: "2.35",
  marketCap: "$88.97M",
  ipoYear: "2005",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/gass"
  },
  {
  symbol: "STCN",
  name: "Steel Connect, Inc.",
  lastSale: "0.551",
  marketCap: "$34.58M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/stcn"
  },
  {
  symbol: "STLD",
  name: "Steel Dynamics, Inc.",
  lastSale: "31.4",
  marketCap: "$6.61B",
  ipoYear: "1996",
  sector: "Basic Industries",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/stld"
  },
  {
  symbol: "STEP",
  name: "StepStone Group Inc.",
  lastSale: "25.92",
  marketCap: "$2.46B",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/step"
  },
  {
  symbol: "SRCL",
  name: "Stericycle, Inc.",
  lastSale: "65.33",
  marketCap: "$5.98B",
  ipoYear: "1996",
  sector: "Basic Industries",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/srcl"
  },
  {
  symbol: "SBT",
  name: "Sterling Bancorp, Inc.",
  lastSale: "3.75",
  marketCap: "$187.41M",
  ipoYear: "2017",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/sbt"
  },
  {
  symbol: "STRL",
  name: "Sterling Construction Company Inc",
  lastSale: "15.84",
  marketCap: "$444.6M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/strl"
  },
  {
  symbol: "SHOO",
  name: "Steven Madden, Ltd.",
  lastSale: "25.36",
  marketCap: "$2.11B",
  ipoYear: "1993",
  sector: "Consumer Non-Durables",
  industry: "Shoe Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/shoo"
  },
  {
  symbol: "SFIX",
  name: "Stitch Fix, Inc.",
  lastSale: "37.7",
  marketCap: "$3.93B",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/sfix"
  },
  {
  symbol: "SYBT",
  name: "Stock Yards Bancorp, Inc.",
  lastSale: "38.16",
  marketCap: "$865.54M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sybt"
  },
  {
  symbol: "STOK",
  name: "Stoke Therapeutics, Inc.",
  lastSale: "41.02",
  marketCap: "$1.36B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/stok"
  },
  {
  symbol: "BANX",
  name: "StoneCastle Financial Corp",
  lastSale: "19.25",
  marketCap: "$126.35M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/banx"
  },
  {
  symbol: "STNE",
  name: "StoneCo Ltd.",
  lastSale: "55.98",
  marketCap: "$17.28B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/stne"
  },
  {
  symbol: "SNEX",
  name: "StoneX Group Inc.",
  lastSale: "55.51",
  marketCap: "$1.08B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/snex"
  },
  {
  symbol: "SSKN",
  name: "Strata Skin Sciences, Inc.",
  lastSale: "1.37",
  marketCap: "$46.24M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/sskn"
  },
  {
  symbol: "SSYS",
  name: "Stratasys, Ltd.",
  lastSale: "13.56",
  marketCap: "$747.32M",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ssys"
  },
  {
  symbol: "STRA",
  name: "Strategic Education, Inc.",
  lastSale: "89.99",
  marketCap: "$2.2B",
  ipoYear: "1996",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/stra"
  },
  {
  symbol: "HNDL",
  name: "Strategy Shares Nasdaq 7HANDL Index ETF",
  lastSale: "24.64",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hndl"
  },
  {
  symbol: "STRT",
  name: "Strattec Security Corporation",
  lastSale: "28.96",
  marketCap: "$111.77M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/strt"
  },
  {
  symbol: "STRS",
  name: "Stratus Properties Inc.",
  lastSale: "22",
  marketCap: "$180.62M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Homebuilding",
  summaryQuote: "https://old.nasdaq.com/symbol/strs"
  },
  {
  symbol: "STRM",
  name: "Streamline Health Solutions, Inc.",
  lastSale: "1.33",
  marketCap: "$42.06M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/strm"
  },
  {
  symbol: "SBBP",
  name: "Strongbridge Biopharma plc",
  lastSale: "1.99",
  marketCap: "$130.28M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sbbp"
  },
  {
  symbol: "SUMR",
  name: "Summer Infant, Inc.",
  lastSale: "20.475",
  marketCap: "$43.29M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/sumr"
  },
  {
  symbol: "SMMF",
  name: "Summit Financial Group, Inc.",
  lastSale: "17.68",
  marketCap: "$229.43M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/smmf"
  },
  {
  symbol: "SSBI",
  name: "Summit State Bank",
  lastSale: "12.39",
  marketCap: "$75.2M",
  ipoYear: "2006",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ssbi"
  },
  {
  symbol: "SMMT",
  name: "Summit Therapeutics Inc. ",
  lastSale: "3.33",
  marketCap: "$223.88M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/smmt"
  },
  {
  symbol: "WISA",
  name: "Summit Wireless Technologies, Inc.",
  lastSale: "2.09",
  marketCap: "$16.35M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/wisa"
  },
  {
  symbol: "SUMO",
  name: "Sumo Logic, Inc.",
  lastSale: "19.29",
  marketCap: "$1.9B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/sumo"
  },
  {
  symbol: "SNBP",
  name: "Sun BioPharma, Inc.",
  lastSale: "2.89",
  marketCap: "$27.89M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/snbp"
  },
  {
  symbol: "SNDE",
  name: "Sundance Energy Inc. ",
  lastSale: "2.04",
  marketCap: "$14.03M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/snde"
  },
  {
  symbol: "SNDL",
  name: "Sundial Growers Inc.",
  lastSale: "0.1702",
  marketCap: "$42.83M",
  ipoYear: "2019",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/sndl"
  },
  {
  symbol: "SNSS",
  name: "Sunesis Pharmaceuticals, Inc.",
  lastSale: "1.29",
  marketCap: "$23.34M",
  ipoYear: "2005",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/snss"
  },
  {
  symbol: "STKL",
  name: "SunOpta, Inc.",
  lastSale: "7.79",
  marketCap: "$696.45M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/stkl"
  },
  {
  symbol: "SPWR",
  name: "SunPower Corporation",
  lastSale: "15.49",
  marketCap: "$2.63B",
  ipoYear: "2005",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/spwr"
  },
  {
  symbol: "RUN",
  name: "Sunrun Inc.",
  lastSale: "54.66",
  marketCap: "$10.72B",
  ipoYear: "2015",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/run"
  },
  {
  symbol: "SUNW",
  name: "Sunworks, Inc.",
  lastSale: "2.88",
  marketCap: "$47.89M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/sunw"
  },
  {
  symbol: "SLGG",
  name: "Super League Gaming, Inc.",
  lastSale: "1.84",
  marketCap: "$27.66M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/slgg"
  },
  {
  symbol: "SMCI",
  name: "Super Micro Computer, Inc.",
  lastSale: "23.74",
  marketCap: "$1.24B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/smci"
  },
  {
  symbol: "SPCB",
  name: "SuperCom, Ltd.",
  lastSale: "0.81",
  marketCap: "$13.19M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/spcb"
  },
  {
  symbol: "SGC",
  name: "Superior Group of Companies, Inc.",
  lastSale: "24.33",
  marketCap: "$372.84M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/sgc"
  },
  {
  symbol: "SUPN",
  name: "Supernus Pharmaceuticals, Inc.",
  lastSale: "18.84",
  marketCap: "$992.19M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/supn"
  },
  {
  symbol: "SPRT",
  name: "support.com, Inc.",
  lastSale: "2.17",
  marketCap: "$41.4M",
  ipoYear: "2000",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sprt"
  },
  {
  symbol: "SURF",
  name: "Surface Oncology, Inc.",
  lastSale: "9.09",
  marketCap: "$362.75M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/surf"
  },
  {
  symbol: "SRGA",
  name: "Surgalign Holdings, Inc.",
  lastSale: "1.92",
  marketCap: "$144.28M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/srga"
  },
  {
  symbol: "SGRY",
  name: "Surgery Partners, Inc.",
  lastSale: "21.71",
  marketCap: "$1.1B",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Hospital/Nursing Management",
  summaryQuote: "https://old.nasdaq.com/symbol/sgry"
  },
  {
  symbol: "SRDX",
  name: "Surmodics, Inc.",
  lastSale: "38.88",
  marketCap: "$530.72M",
  ipoYear: "1998",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/srdx"
  },
  {
  symbol: "SSSS",
  name: "SuRo Capital Corp.",
  lastSale: "8.385",
  marketCap: "$169.86M",
  ipoYear: "2011",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ssss"
  },
  {
  symbol: "STRO",
  name: "Sutro Biopharma, Inc.",
  lastSale: "12.67",
  marketCap: "$454.59M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/stro"
  },
  {
  symbol: "SIVB",
  name: "SVB Financial Group",
  lastSale: "289.56",
  marketCap: "$15B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sivb"
  },
  {
  symbol: "SIVBP",
  name: "SVB Financial Group",
  lastSale: "26.53",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/sivbp"
  },
  {
  symbol: "SVMK",
  name: "SVMK Inc.",
  lastSale: "22.35",
  marketCap: "$3.14B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/svmk"
  },
  {
  symbol: "SWKH",
  name: "SWK Holdings Corporation",
  lastSale: "13.95",
  marketCap: "$178.52M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Diversified Financial Services",
  summaryQuote: "https://old.nasdaq.com/symbol/swkh"
  },
  {
  symbol: "SYKE",
  name: "Sykes Enterprises, Incorporated",
  lastSale: "35.35",
  marketCap: "$1.42B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/syke"
  },
  {
  symbol: "SYNC",
  name: "Synacor, Inc.",
  lastSale: "1.37",
  marketCap: "$54.06M",
  ipoYear: "2012",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/sync"
  },
  {
  symbol: "SYNL",
  name: "Synalloy Corporation",
  lastSale: "5.2",
  marketCap: "$47.1M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/synl"
  },
  {
  symbol: "SYNA",
  name: "Synaptics Incorporated",
  lastSale: "81.54",
  marketCap: "$2.79B",
  ipoYear: "2002",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/syna"
  },
  {
  symbol: "SNCR",
  name: "Synchronoss Technologies, Inc.",
  lastSale: "2.75",
  marketCap: "$125.77M",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/sncr"
  },
  {
  symbol: "SNDX",
  name: "Syndax Pharmaceuticals, Inc.",
  lastSale: "17.84",
  marketCap: "$687.72M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sndx"
  },
  {
  symbol: "SYNH",
  name: "Syneos Health, Inc.",
  lastSale: "55.92",
  marketCap: "$5.81B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/synh"
  },
  {
  symbol: "SYBX",
  name: "Synlogic, Inc.",
  lastSale: "1.91",
  marketCap: "$65.26M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/sybx"
  },
  {
  symbol: "SNPS",
  name: "Synopsys, Inc.",
  lastSale: "222.91",
  marketCap: "$33.83B",
  ipoYear: "1992",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/snps"
  },
  {
  symbol: "SYPR",
  name: "Sypris Solutions, Inc.",
  lastSale: "1.15",
  marketCap: "$24.59M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/sypr"
  },
  {
  symbol: "SYRS",
  name: "Syros Pharmaceuticals, Inc.",
  lastSale: "7",
  marketCap: "$320.34M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/syrs"
  },
  {
  symbol: "TROW",
  name: "T. Rowe Price Group, Inc.",
  lastSale: "142.3",
  marketCap: "$32.3B",
  ipoYear: "1986",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/trow"
  },
  {
  symbol: "TTOO",
  name: "T2 Biosystems, Inc.",
  lastSale: "1.37",
  marketCap: "$202.69M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ttoo"
  },
  {
  symbol: "TRHC",
  name: "Tabula Rasa HealthCare, Inc.",
  lastSale: "37.31",
  marketCap: "$882.43M",
  ipoYear: "2016",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/trhc"
  },
  {
  symbol: "TCMD",
  name: "Tactile Systems Technology, Inc.",
  lastSale: "38.85",
  marketCap: "$754.2M",
  ipoYear: "2016",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/tcmd"
  },
  {
  symbol: "TAIT",
  name: "Taitron Components Incorporated",
  lastSale: "2.47",
  marketCap: "$14.33M",
  ipoYear: "1995",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tait"
  },
  {
  symbol: "TLC",
  name: "Taiwan Liposome Company, Ltd.",
  lastSale: "4.69",
  marketCap: "$197.34M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tlc"
  },
  {
  symbol: "TTWO",
  name: "Take-Two Interactive Software, Inc.",
  lastSale: "167.36",
  marketCap: "$19.14B",
  ipoYear: "1997",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/ttwo"
  },
  {
  symbol: "TLND",
  name: "Talend S.A.",
  lastSale: "39.15",
  marketCap: "$1.24B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/tlnd"
  },
  {
  symbol: "TNDM",
  name: "Tandem Diabetes Care, Inc.",
  lastSale: "115.04",
  marketCap: "$7.01B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/tndm"
  },
  {
  symbol: "TANH",
  name: "Tantech Holdings Ltd.",
  lastSale: "2.98",
  marketCap: "$86.09M",
  ipoYear: "2015",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/tanh"
  },
  {
  symbol: "TAOP",
  name: "Taoping Inc.",
  lastSale: "2.93",
  marketCap: "$22.43M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/taop"
  },
  {
  symbol: "TEDU",
  name: "Tarena International, Inc.",
  lastSale: "2.05",
  marketCap: "$111.1M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tedu"
  },
  {
  symbol: "TH",
  name: "Target Hospitality Corp.",
  lastSale: "0.9415",
  marketCap: "$96.55M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/th"
  },
  {
  symbol: "THWWW",
  name: "Target Hospitality Corp.",
  lastSale: "0.0632",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/thwww"
  },
  {
  symbol: "TARS",
  name: "Tarsus Pharmaceuticals, Inc.",
  lastSale: "20.195",
  marketCap: "$388.94M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tars"
  },
  {
  symbol: "TATT",
  name: "TAT Technologies Ltd.",
  lastSale: "4.36",
  marketCap: "$38.69M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Aerospace",
  summaryQuote: "https://old.nasdaq.com/symbol/tatt"
  },
  {
  symbol: "TTCF",
  name: "Tattooed Chef, Inc.",
  lastSale: "19.01",
  marketCap: "$487.61M",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/ttcf"
  },
  {
  symbol: "TTCFW",
  name: "Tattooed Chef, Inc.",
  lastSale: "7.7",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/ttcfw"
  },
  {
  symbol: "TAYD",
  name: "Taylor Devices, Inc.",
  lastSale: "9.31",
  marketCap: "$32.47M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tayd"
  },
  {
  symbol: "TSHA",
  name: "Taysha Gene Therapies, Inc.",
  lastSale: "21.05",
  marketCap: "$778.69M",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tsha"
  },
  {
  symbol: "TCF",
  name: "TCF Financial Corporation",
  lastSale: "27.01",
  marketCap: "$4.11B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcf"
  },
  {
  symbol: "TCFCP",
  name: "TCF Financial Corporation",
  lastSale: "26.12",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcfcp"
  },
  {
  symbol: "CGBD",
  name: "TCG BDC, Inc.",
  lastSale: "8.35",
  marketCap: "$470.18M",
  ipoYear: "2017",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cgbd"
  },
  {
  symbol: "TCRR",
  name: "TCR2 Therapeutics Inc.",
  lastSale: "19.99",
  marketCap: "$666.55M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tcrr"
  },
  {
  symbol: "GLG",
  name: "TD Holdings, Inc.",
  lastSale: "2.8",
  marketCap: "$193.1M",
  ipoYear: "2013",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/glg"
  },
  {
  symbol: "PETZ",
  name: "TDH Holdings, Inc.",
  lastSale: "1.56",
  marketCap: "$71.53M",
  ipoYear: "2017",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/petz"
  },
  {
  symbol: "TCCO",
  name: "Technical Communications Corporation",
  lastSale: "3.4",
  marketCap: "$6.29M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/tcco"
  },
  {
  symbol: "TTGT",
  name: "TechTarget, Inc.",
  lastSale: "47.26",
  marketCap: "$1.3B",
  ipoYear: "2007",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ttgt"
  },
  {
  symbol: "TGLS",
  name: "Tecnoglass Inc.",
  lastSale: "5.28",
  marketCap: "$243.5M",
  ipoYear: "2012",
  sector: "Consumer Durables",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tgls"
  },
  {
  symbol: "TECTP",
  name: "Tectonic Financial, Inc.",
  lastSale: "7.8633",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tectp"
  },
  {
  symbol: "TEKKU",
  name: "Tekkorp Digital Acquisition Corp.",
  lastSale: "9.97",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tekku"
  },
  {
  symbol: "TELA",
  name: "TELA Bio, Inc.",
  lastSale: "16.16",
  marketCap: "$232.93M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/tela"
  },
  {
  symbol: "TNAV",
  name: "Telenav, Inc.",
  lastSale: "4",
  marketCap: "$188.32M",
  ipoYear: "2010",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tnav"
  },
  {
  symbol: "TLGT",
  name: "Teligent, Inc.",
  lastSale: "0.645",
  marketCap: "$3.48M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tlgt"
  },
  {
  symbol: "TELL",
  name: "Tellurian Inc.",
  lastSale: "0.895",
  marketCap: "$288.63M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/tell"
  },
  {
  symbol: "TENB",
  name: "Tenable Holdings, Inc.",
  lastSale: "37.26",
  marketCap: "$3.77B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/tenb"
  },
  {
  symbol: "TENX",
  name: "Tenax Therapeutics, Inc.",
  lastSale: "1.14",
  marketCap: "$14.39M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Commercial Physical & Biological Resarch",
  summaryQuote: "https://old.nasdaq.com/symbol/tenx"
  },
  {
  symbol: "TZAC",
  name: "Tenzing Acquisition Corp.",
  lastSale: "10.81",
  marketCap: "$55.5M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tzac"
  },
  {
  symbol: "TZACU",
  name: "Tenzing Acquisition Corp.",
  lastSale: "10.44",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tzacu"
  },
  {
  symbol: "TZACW",
  name: "Tenzing Acquisition Corp.",
  lastSale: "0.44",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tzacw"
  },
  {
  symbol: "TER",
  name: "Teradyne, Inc.",
  lastSale: "87.46",
  marketCap: "$14.52B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ter"
  },
  {
  symbol: "TBNK",
  name: "Territorial Bancorp Inc.",
  lastSale: "21.47",
  marketCap: "$204.26M",
  ipoYear: "2009",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/tbnk"
  },
  {
  symbol: "TSLA",
  name: "Tesla, Inc. ",
  lastSale: "424.68",
  marketCap: "$396.46B",
  ipoYear: "2010",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/tsla"
  },
  {
  symbol: "TESS",
  name: "TESSCO Technologies Incorporated",
  lastSale: "6.39",
  marketCap: "$55.98M",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tess"
  },
  {
  symbol: "TTEK",
  name: "Tetra Tech, Inc.",
  lastSale: "102.95",
  marketCap: "$5.55B",
  ipoYear: "1991",
  sector: "Consumer Services",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/ttek"
  },
  {
  symbol: "TCBI",
  name: "Texas Capital Bancshares, Inc.",
  lastSale: "41.93",
  marketCap: "$2.12B",
  ipoYear: "2003",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcbi"
  },
  {
  symbol: "TCBIL",
  name: "Texas Capital Bancshares, Inc.",
  lastSale: "25.7984",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcbil"
  },
  {
  symbol: "TCBIP",
  name: "Texas Capital Bancshares, Inc.",
  lastSale: "25.39",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcbip"
  },
  {
  symbol: "TXN",
  name: "Texas Instruments Incorporated",
  lastSale: "147.12",
  marketCap: "$135.05B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/txn"
  },
  {
  symbol: "TXRH",
  name: "Texas Roadhouse, Inc.",
  lastSale: "69.5",
  marketCap: "$4.82B",
  ipoYear: "2004",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/txrh"
  },
  {
  symbol: "TFFP",
  name: "TFF Pharmaceuticals, Inc.",
  lastSale: "14.28",
  marketCap: "$310.78M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tffp"
  },
  {
  symbol: "TFSL",
  name: "TFS Financial Corporation",
  lastSale: "15.87",
  marketCap: "$4.45B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/tfsl"
  },
  {
  symbol: "TGTX",
  name: "TG Therapeutics, Inc.",
  lastSale: "26.16",
  marketCap: "$3.31B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tgtx"
  },
  {
  symbol: "WTER",
  name: "The Alkaline Water Company Inc.",
  lastSale: "1.34",
  marketCap: "$86.39M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/wter"
  },
  {
  symbol: "ANDE",
  name: "The Andersons, Inc.",
  lastSale: "23.1",
  marketCap: "$762.3M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/ande"
  },
  {
  symbol: "TBBK",
  name: "The Bancorp, Inc.",
  lastSale: "9.08",
  marketCap: "$522.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tbbk"
  },
  {
  symbol: "BPRN",
  name: "The Bank of Princeton",
  lastSale: "19.55",
  marketCap: "$132.44M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bprn"
  },
  {
  symbol: "CG",
  name: "The Carlyle Group Inc.",
  lastSale: "25.77",
  marketCap: "$8.99B",
  ipoYear: "2012",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/cg"
  },
  {
  symbol: "CAKE",
  name: "The Cheesecake Factory Incorporated",
  lastSale: "30.43",
  marketCap: "$1.38B",
  ipoYear: "1992",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/cake"
  },
  {
  symbol: "CHEF",
  name: "The Chefs&#39; Warehouse, Inc.",
  lastSale: "15.57",
  marketCap: "$588.51M",
  ipoYear: "2011",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/chef"
  },
  {
  symbol: "TCFC",
  name: "The Community Financial Corporation",
  lastSale: "21.57",
  marketCap: "$128.17M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcfc"
  },
  {
  symbol: "DSGX",
  name: "The Descartes Systems Group Inc.",
  lastSale: "55.6",
  marketCap: "$4.7B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/dsgx"
  },
  {
  symbol: "DXYN",
  name: "The Dixie Group, Inc.",
  lastSale: "0.9398",
  marketCap: "$14.86M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Home Furnishings",
  summaryQuote: "https://old.nasdaq.com/symbol/dxyn"
  },
  {
  symbol: "ENSG",
  name: "The Ensign Group, Inc.",
  lastSale: "58.08",
  marketCap: "$3.12B",
  ipoYear: "2007",
  sector: "Health Care",
  industry: "Hospital/Nursing Management",
  summaryQuote: "https://old.nasdaq.com/symbol/ensg"
  },
  {
  symbol: "XONE",
  name: "The ExOne Company",
  lastSale: "10.8",
  marketCap: "$204.62M",
  ipoYear: "2013",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/xone"
  },
  {
  symbol: "FBMS",
  name: "The First Bancshares, Inc.",
  lastSale: "23.32",
  marketCap: "$499.23M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/fbms"
  },
  {
  symbol: "FLIC",
  name: "The First of Long Island Corporation",
  lastSale: "15.66",
  marketCap: "$373.7M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/flic"
  },
  {
  symbol: "GT",
  name: "The Goodyear Tire & Rubber Company",
  lastSale: "9.99",
  marketCap: "$2.33B",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/gt"
  },
  {
  symbol: "HCKT",
  name: "The Hackett Group, Inc.",
  lastSale: "12.99",
  marketCap: "$390.49M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/hckt"
  },
  {
  symbol: "HAIN",
  name: "The Hain Celestial Group, Inc.",
  lastSale: "34.99",
  marketCap: "$3.53B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/hain"
  },
  {
  symbol: "CUBA",
  name: "The Herzfeld Caribbean Basin Fund, Inc.",
  lastSale: "3.69",
  marketCap: "$22.63M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cuba"
  },
  {
  symbol: "INTG",
  name: "The Intergroup Corporation",
  lastSale: "31.54",
  marketCap: "$72.14M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Building operators",
  summaryQuote: "https://old.nasdaq.com/symbol/intg"
  },
  {
  symbol: "JYNT",
  name: "The Joint Corp.",
  lastSale: "18.97",
  marketCap: "$265.79M",
  ipoYear: "2014",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/jynt"
  },
  {
  symbol: "KHC",
  name: "The Kraft Heinz Company",
  lastSale: "30.68",
  marketCap: "$37.51B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/khc"
  },
  {
  symbol: "OLD",
  name: "The Long-Term Care ETF",
  lastSale: "25.1667",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/old"
  },
  {
  symbol: "LOVE",
  name: "The Lovesac Company",
  lastSale: "29.51",
  marketCap: "$432.83M",
  ipoYear: "2018",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/love"
  },
  {
  symbol: "MIK",
  name: "The Michaels Companies, Inc.",
  lastSale: "8.69",
  marketCap: "$1.28B",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Recreational Products/Toys",
  summaryQuote: "https://old.nasdaq.com/symbol/mik"
  },
  {
  symbol: "MIDD",
  name: "The Middleby Corporation",
  lastSale: "103.23",
  marketCap: "$5.74B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/midd"
  },
  {
  symbol: "ODP",
  name: "The ODP Corporation",
  lastSale: "20.88",
  marketCap: "$1.1B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/odp"
  },
  {
  symbol: "OLB",
  name: "The OLB Group, Inc.",
  lastSale: "3.5",
  marketCap: "$21.39M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/olb"
  },
  {
  symbol: "STKS",
  name: "The ONE Group Hospitality, Inc.",
  lastSale: "2.22",
  marketCap: "$64.43M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/stks"
  },
  {
  symbol: "PECK",
  name: "The Peck Company Holdings, Inc.",
  lastSale: "6.58",
  marketCap: "$34.86M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/peck"
  },
  {
  symbol: "PNTG",
  name: "The Pennant Group, Inc.",
  lastSale: "39.63",
  marketCap: "$1.11B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/pntg"
  },
  {
  symbol: "PRSC",
  name: "The Providence Service Corporation",
  lastSale: "118.9",
  marketCap: "$1.68B",
  ipoYear: "2003",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/prsc"
  },
  {
  symbol: "REAL",
  name: "The RealReal, Inc.",
  lastSale: "13.76",
  marketCap: "$1.21B",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/real"
  },
  {
  symbol: "RMR",
  name: "The RMR Group Inc.",
  lastSale: "27.28",
  marketCap: "$854.27M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/rmr"
  },
  {
  symbol: "SHYF",
  name: "The Shyft Group, Inc.",
  lastSale: "19.83",
  marketCap: "$705.26M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/shyf"
  },
  {
  symbol: "SMPL",
  name: "The Simply Good Foods Company",
  lastSale: "20.24",
  marketCap: "$1.93B",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/smpl"
  },
  {
  symbol: "TTD",
  name: "The Trade Desk, Inc.",
  lastSale: "613.36",
  marketCap: "$28.67B",
  ipoYear: "2016",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/ttd"
  },
  {
  symbol: "YORW",
  name: "The York Water Company",
  lastSale: "45.19",
  marketCap: "$589.04M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Water Supply",
  summaryQuote: "https://old.nasdaq.com/symbol/yorw"
  },
  {
  symbol: "NCTY",
  name: "The9 Limited",
  lastSale: "2.33",
  marketCap: "$20.54M",
  ipoYear: "2004",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ncty"
  },
  {
  symbol: "RACA",
  name: "Therapeutics Acquisition Corp.",
  lastSale: "13.32",
  marketCap: "$232.21M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/raca"
  },
  {
  symbol: "TXMD",
  name: "TherapeuticsMD, Inc.",
  lastSale: "1.38",
  marketCap: "$375.77M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/txmd"
  },
  {
  symbol: "THTX",
  name: "Theratechnologies Inc.",
  lastSale: "2.01",
  marketCap: "$154.8M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/thtx"
  },
  {
  symbol: "TBPH",
  name: "Theravance Biopharma, Inc.",
  lastSale: "20.16",
  marketCap: "$1.28B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tbph"
  },
  {
  symbol: "THMO",
  name: "ThermoGenesis Holdings, Inc.",
  lastSale: "2.13",
  marketCap: "$14.29M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/thmo"
  },
  {
  symbol: "THRY",
  name: "Thryv Holdings, Inc.",
  lastSale: "9.66",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/thry"
  },
  {
  symbol: "THBR",
  name: "Thunder Bridge Acquisition II, Ltd.",
  lastSale: "10.1199",
  marketCap: "$436.42M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thbr"
  },
  {
  symbol: "THBRU",
  name: "Thunder Bridge Acquisition II, Ltd.",
  lastSale: "10.58",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thbru"
  },
  {
  symbol: "THBRW",
  name: "Thunder Bridge Acquisition II, Ltd.",
  lastSale: "1.35",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thbrw"
  },
  {
  symbol: "TLRY",
  name: "Tilray, Inc.",
  lastSale: "5.59",
  marketCap: "$744.78M",
  ipoYear: "2018",
  sector: "Consumer Durables",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/tlry"
  },
  {
  symbol: "TSBK",
  name: "Timberland Bancorp, Inc.",
  lastSale: "19.13",
  marketCap: "$158.99M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tsbk"
  },
  {
  symbol: "TIPT",
  name: "Tiptree Inc.",
  lastSale: "5.21",
  marketCap: "$175.57M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/tipt"
  },
  {
  symbol: "TITN",
  name: "Titan Machinery Inc.",
  lastSale: "15.7",
  marketCap: "$353.77M",
  ipoYear: "2007",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/titn"
  },
  {
  symbol: "TMDI",
  name: "Titan Medical Inc.",
  lastSale: "0.7597",
  marketCap: "$61.93M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/tmdi"
  },
  {
  symbol: "TTNP",
  name: "Titan Pharmaceuticals, Inc.",
  lastSale: "0.1282",
  marketCap: "$14.97M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/ttnp"
  },
  {
  symbol: "TVTY",
  name: "Tivity Health, Inc.",
  lastSale: "14.45",
  marketCap: "$701.7M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tvty"
  },
  {
  symbol: "TLSA",
  name: "Tiziana Life Sciences plc",
  lastSale: "4.6",
  marketCap: "$440.4M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tlsa"
  },
  {
  symbol: "TMUS",
  name: "T-Mobile US, Inc.",
  lastSale: "112.82",
  marketCap: "$141.88B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/tmus"
  },
  {
  symbol: "TOMZ",
  name: "TOMI Environmental Solutions, Inc.",
  lastSale: "9.19",
  marketCap: "$153.9M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/tomz"
  },
  {
  symbol: "TNXP",
  name: "Tonix Pharmaceuticals Holding Corp.",
  lastSale: "0.6225",
  marketCap: "$81.47M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tnxp"
  },
  {
  symbol: "TOPS",
  name: "TOP Ships Inc.",
  lastSale: "1.03",
  marketCap: "$41.03M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/tops"
  },
  {
  symbol: "TRCH",
  name: "Torchlight Energy Resources, Inc.",
  lastSale: "0.2798",
  marketCap: "$27.75M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/trch"
  },
  {
  symbol: "TRMD",
  name: "TORM plc",
  lastSale: "6.6",
  marketCap: "$490.38M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Marine Transportation",
  summaryQuote: "https://old.nasdaq.com/symbol/trmd"
  },
  {
  symbol: "TOTA",
  name: "Tottenham Acquisition I Limited",
  lastSale: "10.85",
  marketCap: "$40.26M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tota"
  },
  {
  symbol: "TOTAR",
  name: "Tottenham Acquisition I Limited",
  lastSale: "0.4475",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/totar"
  },
  {
  symbol: "TOTAU",
  name: "Tottenham Acquisition I Limited",
  lastSale: "13",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/totau"
  },
  {
  symbol: "TOTAW",
  name: "Tottenham Acquisition I Limited",
  lastSale: "0.3194",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/totaw"
  },
  {
  symbol: "TBLT",
  name: "ToughBuilt Industries, Inc.",
  lastSale: "0.7159",
  marketCap: "$27.5M",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tblt"
  },
  {
  symbol: "TBLTW",
  name: "ToughBuilt Industries, Inc.",
  lastSale: "0.0806",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tbltw"
  },
  {
  symbol: "TSEM",
  name: "Tower Semiconductor Ltd.",
  lastSale: "21.34",
  marketCap: "$2.29B",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/tsem"
  },
  {
  symbol: "TOWN",
  name: "Towne Bank",
  lastSale: "18.07",
  marketCap: "$1.31B",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/town"
  },
  {
  symbol: "TPIC",
  name: "TPI Composites, Inc.",
  lastSale: "33.2",
  marketCap: "$1.17B",
  ipoYear: "2016",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/tpic"
  },
  {
  symbol: "TCON",
  name: "TRACON Pharmaceuticals, Inc.",
  lastSale: "4.76",
  marketCap: "$62.75M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tcon"
  },
  {
  symbol: "TSCO",
  name: "Tractor Supply Company",
  lastSale: "134.16",
  marketCap: "$15.63B",
  ipoYear: "1994",
  sector: "Consumer Services",
  industry: "RETAIL: Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/tsco"
  },
  {
  symbol: "TW",
  name: "Tradeweb Markets Inc.",
  lastSale: "59.75",
  marketCap: "$13.58B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/tw"
  },
  {
  symbol: "TACT",
  name: "TransAct Technologies Incorporated",
  lastSale: "7.15",
  marketCap: "$63.84M",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Computer peripheral equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/tact"
  },
  {
  symbol: "TRNS",
  name: "Transcat, Inc.",
  lastSale: "27.56",
  marketCap: "$204.32M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/trns"
  },
  {
  symbol: "TGA",
  name: "TransGlobe Energy Corporation",
  lastSale: "0.4001",
  marketCap: "$29.02M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/tga"
  },
  {
  symbol: "TBIO",
  name: "Translate Bio, Inc.",
  lastSale: "13.43",
  marketCap: "$997.1M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/tbio"
  },
  {
  symbol: "TMDX",
  name: "TransMedics Group, Inc.",
  lastSale: "13.05",
  marketCap: "$354.37M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/tmdx"
  },
  {
  symbol: "TA",
  name: "TravelCenters of America Inc. ",
  lastSale: "25.05",
  marketCap: "$360.66M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/ta"
  },
  {
  symbol: "TANNI",
  name: "TravelCenters of America Inc. ",
  lastSale: "25.37",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/tanni"
  },
  {
  symbol: "TANNL",
  name: "TravelCenters of America Inc. ",
  lastSale: "25.31",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/tannl"
  },
  {
  symbol: "TANNZ",
  name: "TravelCenters of America Inc. ",
  lastSale: "25.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/tannz"
  },
  {
  symbol: "TZOO",
  name: "Travelzoo",
  lastSale: "7.84",
  marketCap: "$88.67M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Advertising",
  summaryQuote: "https://old.nasdaq.com/symbol/tzoo"
  },
  {
  symbol: "TIG",
  name: "Trean Insurance Group, Inc.",
  lastSale: "12.39",
  marketCap: "$633.8M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/tig"
  },
  {
  symbol: "TRMT",
  name: "Tremont Mortgage Trust",
  lastSale: "2.86",
  marketCap: "$23.61M",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/trmt"
  },
  {
  symbol: "TRVN",
  name: "Trevena, Inc.",
  lastSale: "2.54",
  marketCap: "$389.56M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/trvn"
  },
  {
  symbol: "TRVI",
  name: "Trevi Therapeutics, Inc.",
  lastSale: "3.31",
  marketCap: "$60.37M",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/trvi"
  },
  {
  symbol: "TPCO",
  name: "Tribune Publishing Company",
  lastSale: "12.18",
  marketCap: "$444.84M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Newspapers/Magazines",
  summaryQuote: "https://old.nasdaq.com/symbol/tpco"
  },
  {
  symbol: "TCDA",
  name: "Tricida, Inc.",
  lastSale: "7.94",
  marketCap: "$397.39M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tcda"
  },
  {
  symbol: "TCBK",
  name: "TriCo Bancshares",
  lastSale: "28.98",
  marketCap: "$862.42M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tcbk"
  },
  {
  symbol: "TDAC",
  name: "Trident Acquisitions Corp.",
  lastSale: "10.82",
  marketCap: "$136.31M",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tdac"
  },
  {
  symbol: "TDACU",
  name: "Trident Acquisitions Corp.",
  lastSale: "10.82",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tdacu"
  },
  {
  symbol: "TDACW",
  name: "Trident Acquisitions Corp.",
  lastSale: "0.3699",
  marketCap: "n/a",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tdacw"
  },
  {
  symbol: "TRIL",
  name: "Trillium Therapeutics Inc.",
  lastSale: "12.65",
  marketCap: "$1.12B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tril"
  },
  {
  symbol: "TRS",
  name: "TriMas Corporation",
  lastSale: "23.91",
  marketCap: "$1.09B",
  ipoYear: "2007",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/trs"
  },
  {
  symbol: "TRMB",
  name: "Trimble Inc.",
  lastSale: "50.66",
  marketCap: "$12.68B",
  ipoYear: "1990",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/trmb"
  },
  {
  symbol: "TRIB",
  name: "Trinity Biotech plc",
  lastSale: "2.8",
  marketCap: "$58.52M",
  ipoYear: "1992",
  sector: "Health Care",
  industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
  summaryQuote: "https://old.nasdaq.com/symbol/trib"
  },
  {
  symbol: "TCOM",
  name: "Trip.com Group Limited",
  lastSale: "29.49",
  marketCap: "$17.49B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tcom"
  },
  {
  symbol: "TRIP",
  name: "TripAdvisor, Inc.",
  lastSale: "19.59",
  marketCap: "$2.63B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/trip"
  },
  {
  symbol: "TSC",
  name: "TriState Capital Holdings, Inc.",
  lastSale: "12.92",
  marketCap: "$385.38M",
  ipoYear: "2013",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tsc"
  },
  {
  symbol: "TSCAP",
  name: "TriState Capital Holdings, Inc.",
  lastSale: "25.025",
  marketCap: "$733.88M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tscap"
  },
  {
  symbol: "TSCBP",
  name: "TriState Capital Holdings, Inc.",
  lastSale: "24.9899",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tscbp"
  },
  {
  symbol: "TBK",
  name: "Triumph Bancorp, Inc.",
  lastSale: "44.46",
  marketCap: "$1.1B",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tbk"
  },
  {
  symbol: "TBKCP",
  name: "Triumph Bancorp, Inc.",
  lastSale: "26.19",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/tbkcp"
  },
  {
  symbol: "TRVG",
  name: "trivago N.V.",
  lastSale: "1.41",
  marketCap: "$498.15M",
  ipoYear: "2016",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/trvg"
  },
  {
  symbol: "TRUE",
  name: "TrueCar, Inc.",
  lastSale: "4.52",
  marketCap: "$488.19M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/true"
  },
  {
  symbol: "TRUP",
  name: "Trupanion, Inc.",
  lastSale: "72.66",
  marketCap: "$2.56B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/trup"
  },
  {
  symbol: "TRST",
  name: "TrustCo Bank Corp NY",
  lastSale: "5.53",
  marketCap: "$533.27M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/trst"
  },
  {
  symbol: "TRMK",
  name: "Trustmark Corporation",
  lastSale: "23.58",
  marketCap: "$1.5B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/trmk"
  },
  {
  symbol: "MEDS",
  name: "Trxade Group, Inc.",
  lastSale: "5.05",
  marketCap: "$40.73M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Other Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/meds"
  },
  {
  symbol: "TSRI",
  name: "TSR, Inc.",
  lastSale: "6.335",
  marketCap: "$12.43M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tsri"
  },
  {
  symbol: "TTEC",
  name: "TTEC Holdings, Inc.",
  lastSale: "56.77",
  marketCap: "$2.65B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ttec"
  },
  {
  symbol: "TTMI",
  name: "TTM Technologies, Inc.",
  lastSale: "12.12",
  marketCap: "$1.29B",
  ipoYear: "2000",
  sector: "Technology",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ttmi"
  },
  {
  symbol: "TC",
  name: "TuanChe Limited",
  lastSale: "4.08",
  marketCap: "$82.07M",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tc"
  },
  {
  symbol: "TCX",
  name: "Tucows Inc.",
  lastSale: "75.69",
  marketCap: "$799.86M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tcx"
  },
  {
  symbol: "TOUR",
  name: "Tuniu Corporation",
  lastSale: "1.12",
  marketCap: "$138.17M",
  ipoYear: "2014",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tour"
  },
  {
  symbol: "TMPMU",
  name: "Turmeric Acquisition Corp.",
  lastSale: "10",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/tmpmu"
  },
  {
  symbol: "TPTX",
  name: "Turning Point Therapeutics, Inc.",
  lastSale: "100.08",
  marketCap: "$4.22B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tptx"
  },
  {
  symbol: "HEAR",
  name: "Turtle Beach Corporation",
  lastSale: "19.25",
  marketCap: "$280.95M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/hear"
  },
  {
  symbol: "THCB",
  name: "Tuscan Holdings Corp.",
  lastSale: "10.185",
  marketCap: "$361.44M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thcb"
  },
  {
  symbol: "THCBU",
  name: "Tuscan Holdings Corp.",
  lastSale: "10.8",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thcbu"
  },
  {
  symbol: "THCBW",
  name: "Tuscan Holdings Corp.",
  lastSale: "0.48",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thcbw"
  },
  {
  symbol: "THCA",
  name: "Tuscan Holdings Corp. II",
  lastSale: "9.97",
  marketCap: "$219.22M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thca"
  },
  {
  symbol: "THCAU",
  name: "Tuscan Holdings Corp. II",
  lastSale: "10.556",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thcau"
  },
  {
  symbol: "THCAW",
  name: "Tuscan Holdings Corp. II",
  lastSale: "0.4001",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/thcaw"
  },
  {
  symbol: "TWCTU",
  name: "TWC Tech Holdings II Corp.",
  lastSale: "9.99",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/twctu"
  },
  {
  symbol: "TWIN",
  name: "Twin Disc, Incorporated",
  lastSale: "5.12",
  marketCap: "$69.39M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/twin"
  },
  {
  symbol: "TWST",
  name: "Twist Bioscience Corporation",
  lastSale: "83.58",
  marketCap: "$3.73B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/twst"
  },
  {
  symbol: "TYME",
  name: "Tyme Technologies, Inc.",
  lastSale: "0.915",
  marketCap: "$116.1M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/tyme"
  },
  {
  symbol: "USCR",
  name: "U S Concrete, Inc.",
  lastSale: "33.06",
  marketCap: "$551.17M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Building Materials",
  summaryQuote: "https://old.nasdaq.com/symbol/uscr"
  },
  {
  symbol: "USEG",
  name: "U.S. Energy Corp.",
  lastSale: "5.17",
  marketCap: "$9.13M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/useg"
  },
  {
  symbol: "GROW",
  name: "U.S. Global Investors, Inc.",
  lastSale: "2.72",
  marketCap: "$41.02M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/grow"
  },
  {
  symbol: "USAU",
  name: "U.S. Gold Corp.",
  lastSale: "8.72",
  marketCap: "$31.83M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/usau"
  },
  {
  symbol: "USWS",
  name: "U.S. Well Services, Inc.",
  lastSale: "0.3218",
  marketCap: "$23.61M",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/usws"
  },
  {
  symbol: "USWSW",
  name: "U.S. Well Services, Inc.",
  lastSale: "0.03",
  marketCap: "n/a",
  ipoYear: "2017",
  sector: "Energy",
  industry: "Oilfield Services/Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/uswsw"
  },
  {
  symbol: "UCL",
  name: "uCloudlink Group Inc.",
  lastSale: "12",
  marketCap: "$337.86M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/ucl"
  },
  {
  symbol: "UFPI",
  name: "UFP Industries, Inc.",
  lastSale: "50.54",
  marketCap: "$3.09B",
  ipoYear: "1993",
  sector: "Basic Industries",
  industry: "Forest Products",
  summaryQuote: "https://old.nasdaq.com/symbol/ufpi"
  },
  {
  symbol: "UFPT",
  name: "UFP Technologies, Inc.",
  lastSale: "39.04",
  marketCap: "$292.6M",
  ipoYear: "1993",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/ufpt"
  },
  {
  symbol: "ULTA",
  name: "Ulta Beauty, Inc.",
  lastSale: "213.38",
  marketCap: "$12.02B",
  ipoYear: "2007",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/ulta"
  },
  {
  symbol: "UCTT",
  name: "Ultra Clean Holdings, Inc.",
  lastSale: "22.3",
  marketCap: "$900.92M",
  ipoYear: "2004",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/uctt"
  },
  {
  symbol: "RARE",
  name: "Ultragenyx Pharmaceutical Inc.",
  lastSale: "97.44",
  marketCap: "$5.9B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/rare"
  },
  {
  symbol: "ULBI",
  name: "Ultralife Corporation",
  lastSale: "5.69",
  marketCap: "$90.44M",
  ipoYear: "1992",
  sector: "Miscellaneous",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/ulbi"
  },
  {
  symbol: "UMBF",
  name: "UMB Financial Corporation",
  lastSale: "56.42",
  marketCap: "$2.71B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/umbf"
  },
  {
  symbol: "UMPQ",
  name: "Umpqua Holdings Corporation",
  lastSale: "12.52",
  marketCap: "$2.76B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/umpq"
  },
  {
  symbol: "UNAM",
  name: "Unico American Corporation",
  lastSale: "5.2402",
  marketCap: "$27.8M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/unam"
  },
  {
  symbol: "LATN",
  name: "Union Acquisition Corp. II",
  lastSale: "9.93",
  marketCap: "$248.25M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/latn"
  },
  {
  symbol: "LATNU",
  name: "Union Acquisition Corp. II",
  lastSale: "10.2",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/latnu"
  },
  {
  symbol: "LATNW",
  name: "Union Acquisition Corp. II",
  lastSale: "0.455",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/latnw"
  },
  {
  symbol: "UNB",
  name: "Union Bankshares, Inc.",
  lastSale: "24.2",
  marketCap: "$108.29M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/unb"
  },
  {
  symbol: "QURE",
  name: "uniQure N.V.",
  lastSale: "42.18",
  marketCap: "$1.87B",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/qure"
  },
  {
  symbol: "UAL",
  name: "United Airlines Holdings, Inc.",
  lastSale: "34.17",
  marketCap: "$9.94B",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Air Freight/Delivery Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ual"
  },
  {
  symbol: "UBCP",
  name: "United Bancorp, Inc.",
  lastSale: "12.425",
  marketCap: "$74.13M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ubcp"
  },
  {
  symbol: "UBOH",
  name: "United Bancshares, Inc.",
  lastSale: "19.9",
  marketCap: "$65.11M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/uboh"
  },
  {
  symbol: "UBSI",
  name: "United Bankshares, Inc.",
  lastSale: "25.51",
  marketCap: "$3.31B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ubsi"
  },
  {
  symbol: "UCBI",
  name: "United Community Banks, Inc.",
  lastSale: "20.605",
  marketCap: "$1.78B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ucbi"
  },
  {
  symbol: "UCBIO",
  name: "United Community Banks, Inc.",
  lastSale: "26.8",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ucbio"
  },
  {
  symbol: "UFCS",
  name: "United Fire Group, Inc",
  lastSale: "21.84",
  marketCap: "$546.68M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/ufcs"
  },
  {
  symbol: "UIHC",
  name: "United Insurance Holdings Corp.",
  lastSale: "4.7",
  marketCap: "$202.42M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/uihc"
  },
  {
  symbol: "UNFI",
  name: "United Natural Foods, Inc.",
  lastSale: "16",
  marketCap: "$877.44M",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Food Distributors",
  summaryQuote: "https://old.nasdaq.com/symbol/unfi"
  },
  {
  symbol: "UBFO",
  name: "United Security Bancshares",
  lastSale: "6.02",
  marketCap: "$102.2M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ubfo"
  },
  {
  symbol: "USLM",
  name: "United States Lime & Minerals, Inc.",
  lastSale: "94.8",
  marketCap: "$533.52M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Mining & Quarrying of Nonmetallic Minerals (No Fuels)",
  summaryQuote: "https://old.nasdaq.com/symbol/uslm"
  },
  {
  symbol: "UTHR",
  name: "United Therapeutics Corporation",
  lastSale: "123.4",
  marketCap: "$5.48B",
  ipoYear: "1999",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/uthr"
  },
  {
  symbol: "UG",
  name: "United-Guardian, Inc.",
  lastSale: "14.58",
  marketCap: "$66.99M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Package Goods/Cosmetics",
  summaryQuote: "https://old.nasdaq.com/symbol/ug"
  },
  {
  symbol: "UNIT",
  name: "Uniti Group Inc.",
  lastSale: "9.78",
  marketCap: "$2.28B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/unit"
  },
  {
  symbol: "UNTY",
  name: "Unity Bancorp, Inc.",
  lastSale: "14.37",
  marketCap: "$151.89M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/unty"
  },
  {
  symbol: "UBX",
  name: "Unity Biotechnology, Inc.",
  lastSale: "4.01",
  marketCap: "$208.68M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ubx"
  },
  {
  symbol: "OLED",
  name: "Universal Display Corporation",
  lastSale: "195.66",
  marketCap: "$9.22B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Electrical Products",
  summaryQuote: "https://old.nasdaq.com/symbol/oled"
  },
  {
  symbol: "UEIC",
  name: "Universal Electronics Inc.",
  lastSale: "40.26",
  marketCap: "$560.88M",
  ipoYear: "1993",
  sector: "Consumer Non-Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/ueic"
  },
  {
  symbol: "ULH",
  name: "Universal Logistics Holdings, Inc.",
  lastSale: "20.84",
  marketCap: "$560.99M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ulh"
  },
  {
  symbol: "USAP",
  name: "Universal Stainless & Alloy Products, Inc.",
  lastSale: "5.72",
  marketCap: "$50.51M",
  ipoYear: "1994",
  sector: "Basic Industries",
  industry: "Steel/Iron Ore",
  summaryQuote: "https://old.nasdaq.com/symbol/usap"
  },
  {
  symbol: "UVSP",
  name: "Univest Financial Corporation",
  lastSale: "15.32",
  marketCap: "$447.75M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/uvsp"
  },
  {
  symbol: "TTTN",
  name: "UP Fintech China-U.S. Internet Titans ETF",
  lastSale: "42.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/tttn"
  },
  {
  symbol: "TIGR",
  name: "UP Fintech Holding Limited",
  lastSale: "4.87",
  marketCap: "$686.4M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/tigr"
  },
  {
  symbol: "UPLD",
  name: "Upland Software, Inc.",
  lastSale: "42.24",
  marketCap: "$1.24B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/upld"
  },
  {
  symbol: "UPWK",
  name: "Upwork Inc.",
  lastSale: "19.2",
  marketCap: "$2.31B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/upwk"
  },
  {
  symbol: "UONE",
  name: "Urban One, Inc. ",
  lastSale: "5.15",
  marketCap: "$245.92M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/uone"
  },
  {
  symbol: "UONEK",
  name: "Urban One, Inc. ",
  lastSale: "1.06",
  marketCap: "$50.62M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/uonek"
  },
  {
  symbol: "URBN",
  name: "Urban Outfitters, Inc.",
  lastSale: "23.79",
  marketCap: "$2.33B",
  ipoYear: "1993",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/urbn"
  },
  {
  symbol: "MYT",
  name: "Urban Tea, Inc.",
  lastSale: "1.68",
  marketCap: "$13.35M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/myt"
  },
  {
  symbol: "URGN",
  name: "UroGen Pharma Ltd.",
  lastSale: "22.57",
  marketCap: "$497.08M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/urgn"
  },
  {
  symbol: "UROV",
  name: "Urovant Sciences Ltd.",
  lastSale: "8.13",
  marketCap: "$253.51M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/urov"
  },
  {
  symbol: "ECOL",
  name: "US Ecology, Inc.",
  lastSale: "30.91",
  marketCap: "$973.97M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ecol"
  },
  {
  symbol: "ECOLW",
  name: "US Ecology, Inc.",
  lastSale: "5.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Environmental Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ecolw"
  },
  {
  symbol: "USAK",
  name: "USA Truck, Inc.",
  lastSale: "8.41",
  marketCap: "$73.69M",
  ipoYear: "1992",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/usak"
  },
  {
  symbol: "USIO",
  name: "Usio, Inc.",
  lastSale: "1.539",
  marketCap: "$37.96M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/usio"
  },
  {
  symbol: "UTMD",
  name: "Utah Medical Products, Inc.",
  lastSale: "84",
  marketCap: "$306.02M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/utmd"
  },
  {
  symbol: "UTSI",
  name: "UTStarcom Holdings Corp",
  lastSale: "1.06",
  marketCap: "$38.08M",
  ipoYear: "2000",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/utsi"
  },
  {
  symbol: "UXIN",
  name: "Uxin Limited",
  lastSale: "1.04",
  marketCap: "$355.08M",
  ipoYear: "2018",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/uxin"
  },
  {
  symbol: "VCNX",
  name: "Vaccinex, Inc.",
  lastSale: "1.89",
  marketCap: "$37.98M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vcnx"
  },
  {
  symbol: "VLY",
  name: "Valley National Bancorp",
  lastSale: "7.56",
  marketCap: "$3.05B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/vly"
  },
  {
  symbol: "VLYPO",
  name: "Valley National Bancorp",
  lastSale: "24.87",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/vlypo"
  },
  {
  symbol: "VLYPP",
  name: "Valley National Bancorp",
  lastSale: "27.22",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/vlypp"
  },
  {
  symbol: "VTEC",
  name: "Valtech SE",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtec"
  },
  {
  symbol: "VALU",
  name: "Value Line, Inc.",
  lastSale: "27.5",
  marketCap: "$264.26M",
  ipoYear: "1983",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/valu"
  },
  {
  symbol: "VNDA",
  name: "Vanda Pharmaceuticals Inc.",
  lastSale: "10.59",
  marketCap: "$578.76M",
  ipoYear: "2006",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vnda"
  },
  {
  symbol: "BBH",
  name: "VanEck Vectors Biotech ETF",
  lastSale: "159.41",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bbh"
  },
  {
  symbol: "ANGL",
  name: "VanEck Vectors Fallen Angel High Yield Bond ETF",
  lastSale: "30.12",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/angl"
  },
  {
  symbol: "BJK",
  name: "VanEck Vectors Gaming ETF",
  lastSale: "37.71",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bjk"
  },
  {
  symbol: "PPH",
  name: "VanEck Vectors Pharmaceutical ETF",
  lastSale: "60.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/pph"
  },
  {
  symbol: "RTH",
  name: "VanEck Vectors Retail ETF",
  lastSale: "150.75",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/rth"
  },
  {
  symbol: "SMH",
  name: "VanEck Vectors Semiconductor ETF",
  lastSale: "179.44",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/smh"
  },
  {
  symbol: "ESPO",
  name: "VanEck Vectors Video Gaming and eSports ETF",
  lastSale: "62.17",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/espo"
  },
  {
  symbol: "VWOB",
  name: "Vanguard Emerging Markets Government Bond ETF",
  lastSale: "79.14",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vwob"
  },
  {
  symbol: "VNQI",
  name: "Vanguard Global ex-U.S. Real Estate ETF",
  lastSale: "48.03",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vnqi"
  },
  {
  symbol: "VCIT",
  name: "Vanguard Intermediate-Term Corporate Bond ETF",
  lastSale: "96.12",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vcit"
  },
  {
  symbol: "VGIT",
  name: "Vanguard Intermediate-Term Treasury ETF",
  lastSale: "70.18",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vgit"
  },
  {
  symbol: "VIGI",
  name: "Vanguard International Dividend Appreciation ETF",
  lastSale: "72.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vigi"
  },
  {
  symbol: "VYMI",
  name: "Vanguard International High Dividend Yield ETF",
  lastSale: "52.48",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vymi"
  },
  {
  symbol: "VCLT",
  name: "Vanguard Long-Term Corporate Bond ETF",
  lastSale: "107.59",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vclt"
  },
  {
  symbol: "VGLT",
  name: "Vanguard Long-Treasury ETF",
  lastSale: "97.98",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vglt"
  },
  {
  symbol: "VMBS",
  name: "Vanguard Mortgage-Backed Securities ETF",
  lastSale: "54.12",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vmbs"
  },
  {
  symbol: "VONE",
  name: "Vanguard Russell 1000 ETF",
  lastSale: "156.96",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vone"
  },
  {
  symbol: "VONG",
  name: "Vanguard Russell 1000 Growth ETF",
  lastSale: "226.59",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vong"
  },
  {
  symbol: "VONV",
  name: "Vanguard Russell 1000 Value ETF",
  lastSale: "104.89",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vonv"
  },
  {
  symbol: "VTWO",
  name: "Vanguard Russell 2000 ETF",
  lastSale: "127.71",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtwo"
  },
  {
  symbol: "VTWG",
  name: "Vanguard Russell 2000 Growth ETF",
  lastSale: "169.1",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtwg"
  },
  {
  symbol: "VTWV",
  name: "Vanguard Russell 2000 Value ETF",
  lastSale: "92.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtwv"
  },
  {
  symbol: "VTHR",
  name: "Vanguard Russell 3000 ETF",
  lastSale: "154.7917",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vthr"
  },
  {
  symbol: "VCSH",
  name: "Vanguard Short-Term Corporate Bond ETF",
  lastSale: "82.94",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vcsh"
  },
  {
  symbol: "VTIP",
  name: "Vanguard Short-Term Inflation-Protected Securities Index Fund",
  lastSale: "50.79",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtip"
  },
  {
  symbol: "VGSH",
  name: "Vanguard Short-Term Treasury ETF",
  lastSale: "62.04",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vgsh"
  },
  {
  symbol: "BND",
  name: "Vanguard Total Bond Market ETF",
  lastSale: "88.04",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bnd"
  },
  {
  symbol: "VTC",
  name: "Vanguard Total Corporate Bond ETF",
  lastSale: "92.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vtc"
  },
  {
  symbol: "BNDX",
  name: "Vanguard Total International Bond ETF",
  lastSale: "58.43",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bndx"
  },
  {
  symbol: "VXUS",
  name: "Vanguard Total International Stock ETF",
  lastSale: "52.58",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vxus"
  },
  {
  symbol: "BNDW",
  name: "Vanguard Total World Bond ETF",
  lastSale: "81.92",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bndw"
  },
  {
  symbol: "VREX",
  name: "Varex Imaging Corporation",
  lastSale: "13.45",
  marketCap: "$525.9M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/vrex"
  },
  {
  symbol: "VRNS",
  name: "Varonis Systems, Inc.",
  lastSale: "122.5",
  marketCap: "$3.86B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/vrns"
  },
  {
  symbol: "VBLT",
  name: "Vascular Biogenics Ltd.",
  lastSale: "1.17",
  marketCap: "$56.04M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vblt"
  },
  {
  symbol: "VSTA",
  name: "Vasta Platform Limited",
  lastSale: "12.58",
  marketCap: "$1.04B",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vsta"
  },
  {
  symbol: "VXRT",
  name: "Vaxart, Inc.",
  lastSale: "5.44",
  marketCap: "$595.51M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/vxrt"
  },
  {
  symbol: "PCVX",
  name: "Vaxcyte, Inc.",
  lastSale: "39.42",
  marketCap: "$2.01B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/pcvx"
  },
  {
  symbol: "VBIV",
  name: "VBI Vaccines, Inc.",
  lastSale: "2.51",
  marketCap: "$580.31M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vbiv"
  },
  {
  symbol: "VACQU",
  name: "Vector Acquisition Corporation",
  lastSale: "9.97",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vacqu"
  },
  {
  symbol: "VECO",
  name: "Veeco Instruments Inc.",
  lastSale: "12.92",
  marketCap: "$641.08M",
  ipoYear: "1994",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/veco"
  },
  {
  symbol: "VLDR",
  name: "Velodyne Lidar, Inc.",
  lastSale: "13.96",
  marketCap: "$2.41B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/vldr"
  },
  {
  symbol: "VLDRW",
  name: "Velodyne Lidar, Inc.",
  lastSale: "2.74",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/vldrw"
  },
  {
  symbol: "VERO",
  name: "Venus Concept Inc. ",
  lastSale: "2.22",
  marketCap: "$89.54M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Medical/Dental Instruments",
  summaryQuote: "https://old.nasdaq.com/symbol/vero"
  },
  {
  symbol: "VEON",
  name: "VEON Ltd.",
  lastSale: "1.27",
  marketCap: "$2.22B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/veon"
  },
  {
  symbol: "VRA",
  name: "Vera Bradley, Inc.",
  lastSale: "6.92",
  marketCap: "$231.19M",
  ipoYear: "2010",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/vra"
  },
  {
  symbol: "VCYT",
  name: "Veracyte, Inc.",
  lastSale: "36.4",
  marketCap: "$2.09B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Medical Specialities",
  summaryQuote: "https://old.nasdaq.com/symbol/vcyt"
  },
  {
  symbol: "VSTM",
  name: "Verastem, Inc.",
  lastSale: "1.24",
  marketCap: "$210.22M",
  ipoYear: "2012",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vstm"
  },
  {
  symbol: "VERB",
  name: "Verb Technology Company, Inc.",
  lastSale: "1.1",
  marketCap: "$51.33M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/verb"
  },
  {
  symbol: "VERBW",
  name: "Verb Technology Company, Inc.",
  lastSale: "0.4588",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/verbw"
  },
  {
  symbol: "VCEL",
  name: "Vericel Corporation",
  lastSale: "20.33",
  marketCap: "$919.94M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/vcel"
  },
  {
  symbol: "VERY",
  name: "Vericity, Inc.",
  lastSale: "10.85",
  marketCap: "$161.39M",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Life Insurance",
  summaryQuote: "https://old.nasdaq.com/symbol/very"
  },
  {
  symbol: "VRME",
  name: "VerifyMe, Inc.",
  lastSale: "3.2",
  marketCap: "$17.85M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/vrme"
  },
  {
  symbol: "VRMEW",
  name: "VerifyMe, Inc.",
  lastSale: "1.0201",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/vrmew"
  },
  {
  symbol: "VRNT",
  name: "Verint Systems Inc.",
  lastSale: "49.85",
  marketCap: "$3.26B",
  ipoYear: "2002",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vrnt"
  },
  {
  symbol: "VRSN",
  name: "VeriSign, Inc.",
  lastSale: "199.06",
  marketCap: "$22.71B",
  ipoYear: "1998",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vrsn"
  },
  {
  symbol: "VRSK",
  name: "Verisk Analytics, Inc.",
  lastSale: "185.15",
  marketCap: "$30.07B",
  ipoYear: "2009",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vrsk"
  },
  {
  symbol: "VBTX",
  name: "Veritex Holdings, Inc.",
  lastSale: "19.51",
  marketCap: "$968.62M",
  ipoYear: "2014",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/vbtx"
  },
  {
  symbol: "VERI",
  name: "Veritone, Inc.",
  lastSale: "9.98",
  marketCap: "$275.53M",
  ipoYear: "2017",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/veri"
  },
  {
  symbol: "VRNA",
  name: "Verona Pharma plc",
  lastSale: "6.01",
  marketCap: "$311.43M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vrna"
  },
  {
  symbol: "VRRM",
  name: "Verra Mobility Corporation",
  lastSale: "10.06",
  marketCap: "$1.63B",
  ipoYear: "2017",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vrrm"
  },
  {
  symbol: "VRCA",
  name: "Verrica Pharmaceuticals Inc.",
  lastSale: "7.79",
  marketCap: "$201.09M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vrca"
  },
  {
  symbol: "VTNR",
  name: "Vertex Energy, Inc",
  lastSale: "0.421",
  marketCap: "$19.18M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Integrated oil Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/vtnr"
  },
  {
  symbol: "VRTX",
  name: "Vertex Pharmaceuticals Incorporated",
  lastSale: "212.19",
  marketCap: "$55.27B",
  ipoYear: "1991",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vrtx"
  },
  {
  symbol: "VERX",
  name: "Vertex, Inc.",
  lastSale: "24.5",
  marketCap: "$3.6B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/verx"
  },
  {
  symbol: "VERU",
  name: "Veru Inc.",
  lastSale: "2.45",
  marketCap: "$171.17M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/veru"
  },
  {
  symbol: "VSPRU",
  name: "Vesper Healthcare Acquisition Corp.",
  lastSale: "10.08",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vspru"
  },
  {
  symbol: "VIAC",
  name: "ViacomCBS Inc.",
  lastSale: "28.21",
  marketCap: "$17.38B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/viac"
  },
  {
  symbol: "VIACA",
  name: "ViacomCBS Inc.",
  lastSale: "29.61",
  marketCap: "$18.24B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Broadcasting",
  summaryQuote: "https://old.nasdaq.com/symbol/viaca"
  },
  {
  symbol: "VSAT",
  name: "ViaSat, Inc.",
  lastSale: "34.37",
  marketCap: "$2.32B",
  ipoYear: "1996",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/vsat"
  },
  {
  symbol: "VIAV",
  name: "Viavi Solutions Inc.",
  lastSale: "12.73",
  marketCap: "$2.92B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/viav"
  },
  {
  symbol: "VICR",
  name: "Vicor Corporation",
  lastSale: "79.97",
  marketCap: "$3.44B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/vicr"
  },
  {
  symbol: "VCTR",
  name: "Victory Capital Holdings, Inc.",
  lastSale: "19.72",
  marketCap: "$1.33B",
  ipoYear: "2018",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/vctr"
  },
  {
  symbol: "CIZ",
  name: "VictoryShares Developed Enhanced Volatility Wtd ETF",
  lastSale: "27.55",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/ciz"
  },
  {
  symbol: "VSDA",
  name: "VictoryShares Dividend Accelerator ETF",
  lastSale: "36.545",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vsda"
  },
  {
  symbol: "CEY",
  name: "VictoryShares Emerging Market High Div Volatility Wtd ETF",
  lastSale: "19.02",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cey"
  },
  {
  symbol: "CEZ",
  name: "VictoryShares Emerging Market Volatility Wtd ETF",
  lastSale: "23.11",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cez"
  },
  {
  symbol: "CID",
  name: "VictoryShares International High Div Volatility Wtd ETF",
  lastSale: "25.9005",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cid"
  },
  {
  symbol: "CIL",
  name: "VictoryShares International Volatility Wtd ETF",
  lastSale: "36.4873",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cil"
  },
  {
  symbol: "QQQN",
  name: "VictoryShares Nasdaq Next 50 ETF",
  lastSale: "27.3434",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/qqqn"
  },
  {
  symbol: "CFO",
  name: "VictoryShares US 500 Enhanced Volatility Wtd ETF",
  lastSale: "55.6",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cfo"
  },
  {
  symbol: "CFA",
  name: "VictoryShares US 500 Volatility Wtd ETF",
  lastSale: "55.5821",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cfa"
  },
  {
  symbol: "CSF",
  name: "VictoryShares US Discovery Enhanced Volatility Wtd ETF",
  lastSale: "41.8861",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/csf"
  },
  {
  symbol: "CDC",
  name: "VictoryShares US EQ Income Enhanced Volatility Wtd ETF",
  lastSale: "48.3487",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cdc"
  },
  {
  symbol: "CDL",
  name: "VictoryShares US Large Cap High Div Volatility Wtd ETF",
  lastSale: "41.4743",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cdl"
  },
  {
  symbol: "VSMV",
  name: "VictoryShares US Multi-Factor Minimum Volatility ETF",
  lastSale: "31.6697",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/vsmv"
  },
  {
  symbol: "CSB",
  name: "VictoryShares US Small Cap High Div Volatility Wtd ETF",
  lastSale: "39.8276",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/csb"
  },
  {
  symbol: "CSA",
  name: "VictoryShares US Small Cap Volatility Wtd ETF",
  lastSale: "43.8096",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/csa"
  },
  {
  symbol: "VIE",
  name: "Viela Bio, Inc.",
  lastSale: "33.29",
  marketCap: "$1.82B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vie"
  },
  {
  symbol: "VMD",
  name: "Viemed Healthcare, Inc.",
  lastSale: "8.72",
  marketCap: "$340.82M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Misc Health and Biotechnology Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vmd"
  },
  {
  symbol: "VRAY",
  name: "ViewRay, Inc.",
  lastSale: "3",
  marketCap: "$443.83M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/vray"
  },
  {
  symbol: "VKTX",
  name: "Viking Therapeutics, Inc.",
  lastSale: "5.57",
  marketCap: "$405.26M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vktx"
  },
  {
  symbol: "VKTXW",
  name: "Viking Therapeutics, Inc.",
  lastSale: "4.0445",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vktxw"
  },
  {
  symbol: "VBFC",
  name: "Village Bank and Trust Financial Corp.",
  lastSale: "30.96",
  marketCap: "$45.39M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/vbfc"
  },
  {
  symbol: "VFF",
  name: "Village Farms International, Inc.",
  lastSale: "4.97",
  marketCap: "$327.78M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Farming/Seeds/Milling",
  summaryQuote: "https://old.nasdaq.com/symbol/vff"
  },
  {
  symbol: "VLGEA",
  name: "Village Super Market, Inc.",
  lastSale: "23.05",
  marketCap: "$335.45M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Food Chains",
  summaryQuote: "https://old.nasdaq.com/symbol/vlgea"
  },
  {
  symbol: "VIOT",
  name: "Viomi Technology Co., Ltd",
  lastSale: "5.58",
  marketCap: "$389.18M",
  ipoYear: "2018",
  sector: "Consumer Durables",
  industry: "Consumer Electronics/Appliances",
  summaryQuote: "https://old.nasdaq.com/symbol/viot"
  },
  {
  symbol: "VNOM",
  name: "Viper Energy Partners LP",
  lastSale: "7.33",
  marketCap: "$1.16B",
  ipoYear: "2014",
  sector: "Energy",
  industry: "Oil & Gas Production",
  summaryQuote: "https://old.nasdaq.com/symbol/vnom"
  },
  {
  symbol: "VIR",
  name: "Vir Biotechnology, Inc.",
  lastSale: "35.53",
  marketCap: "$4.51B",
  ipoYear: "2019",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/vir"
  },
  {
  symbol: "VIRC",
  name: "Virco Manufacturing Corporation",
  lastSale: "2.09",
  marketCap: "$33.27M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/virc"
  },
  {
  symbol: "VTSI",
  name: "VirTra, Inc.",
  lastSale: "3.73",
  marketCap: "$28.94M",
  ipoYear: "n/a",
  sector: "Consumer Durables",
  industry: "Miscellaneous manufacturing industries",
  summaryQuote: "https://old.nasdaq.com/symbol/vtsi"
  },
  {
  symbol: "VIRT",
  name: "Virtu Financial, Inc.",
  lastSale: "22.45",
  marketCap: "$4.34B",
  ipoYear: "2015",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/virt"
  },
  {
  symbol: "VRTS",
  name: "Virtus Investment Partners, Inc.",
  lastSale: "165.64",
  marketCap: "$1.27B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Managers",
  summaryQuote: "https://old.nasdaq.com/symbol/vrts"
  },
  {
  symbol: "BBC",
  name: "Virtus LifeSci Biotech Clinical Trials ETF",
  lastSale: "40.9029",
  marketCap: "$40.9M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bbc"
  },
  {
  symbol: "BBP",
  name: "Virtus LifeSci Biotech Products ETF",
  lastSale: "49.6954",
  marketCap: "$49.7M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/bbp"
  },
  {
  symbol: "VRTU",
  name: "Virtusa Corporation",
  lastSale: "50.2",
  marketCap: "$1.52B",
  ipoYear: "2007",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vrtu"
  },
  {
  symbol: "VISL",
  name: "Vislink Technologies, Inc.",
  lastSale: "1.32",
  marketCap: "$21.26M",
  ipoYear: "2013",
  sector: "Capital Goods",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/visl"
  },
  {
  symbol: "VTGN",
  name: "VistaGen Therapeutics, Inc.",
  lastSale: "0.755",
  marketCap: "$55.87M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vtgn"
  },
  {
  symbol: "VMAC",
  name: "Vistas Media Acquisition Company Inc.",
  lastSale: "9.84",
  marketCap: "$136.09M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vmac"
  },
  {
  symbol: "VMACU",
  name: "Vistas Media Acquisition Company Inc.",
  lastSale: "10.08",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vmacu"
  },
  {
  symbol: "VMACW",
  name: "Vistas Media Acquisition Company Inc.",
  lastSale: "0.33",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vmacw"
  },
  {
  symbol: "VC",
  name: "Visteon Corporation",
  lastSale: "86.42",
  marketCap: "$2.4B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Parts:O.E.M.",
  summaryQuote: "https://old.nasdaq.com/symbol/vc"
  },
  {
  symbol: "VITL",
  name: "Vital Farms, Inc.",
  lastSale: "34.74",
  marketCap: "$1.37B",
  ipoYear: "2020",
  sector: "Consumer Non-Durables",
  industry: "Packaged Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/vitl"
  },
  {
  symbol: "VTRU",
  name: "Vitru Limited",
  lastSale: "12.25",
  marketCap: "$282.46M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vtru"
  },
  {
  symbol: "VIVE",
  name: "Viveve Medical, Inc.",
  lastSale: "0.5299",
  marketCap: "$8.34M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/vive"
  },
  {
  symbol: "VVPR",
  name: "VivoPower International PLC",
  lastSale: "6.85",
  marketCap: "$116.04M",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/vvpr"
  },
  {
  symbol: "VOD",
  name: "Vodafone Group Plc",
  lastSale: "13.98",
  marketCap: "$37.51B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/vod"
  },
  {
  symbol: "VG",
  name: "Vonage Holdings Corp.",
  lastSale: "10.69",
  marketCap: "$2.62B",
  ipoYear: "2006",
  sector: "Public Utilities",
  industry: "Telecommunications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/vg"
  },
  {
  symbol: "VJET",
  name: "voxeljet AG",
  lastSale: "9.306",
  marketCap: "$45M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/vjet"
  },
  {
  symbol: "VOXX",
  name: "VOXX International Corporation",
  lastSale: "13.32",
  marketCap: "$318.59M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/voxx"
  },
  {
  symbol: "VYGR",
  name: "Voyager Therapeutics, Inc.",
  lastSale: "11.11",
  marketCap: "$415.86M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/vygr"
  },
  {
  symbol: "VIHAU",
  name: "VPC Impact Acquisition Holdings",
  lastSale: "9.92",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/vihau"
  },
  {
  symbol: "VRM",
  name: "Vroom, Inc.",
  lastSale: "43.1",
  marketCap: "$5.14B",
  ipoYear: "2020",
  sector: "Consumer Durables",
  industry: "Automotive Aftermarket",
  summaryQuote: "https://old.nasdaq.com/symbol/vrm"
  },
  {
  symbol: "VSEC",
  name: "VSE Corporation",
  lastSale: "30.43",
  marketCap: "$336.05M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/vsec"
  },
  {
  symbol: "VTVT",
  name: "vTv Therapeutics Inc.",
  lastSale: "1.65",
  marketCap: "$117.24M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vtvt"
  },
  {
  symbol: "VUZI",
  name: "Vuzix Corporation",
  lastSale: "4.2",
  marketCap: "$179.13M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Radio And Television Broadcasting And Communications Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/vuzi"
  },
  {
  symbol: "VYNE",
  name: "VYNE Therapeutics Inc.",
  lastSale: "1.8",
  marketCap: "$301.84M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/vyne"
  },
  {
  symbol: "WAFU",
  name: "Wah Fu Education Group Limited",
  lastSale: "4.29",
  marketCap: "$18.79M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wafu"
  },
  {
  symbol: "HLAL",
  name: "Wahed FTSE USA Shariah ETF",
  lastSale: "30.205",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hlal"
  },
  {
  symbol: "WTRH",
  name: "Waitr Holdings Inc.",
  lastSale: "2.825",
  marketCap: "$310.96M",
  ipoYear: "2016",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wtrh"
  },
  {
  symbol: "WBA",
  name: "Walgreens Boots Alliance, Inc.",
  lastSale: "36",
  marketCap: "$31.17B",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Medical/Nursing Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wba"
  },
  {
  symbol: "WSG",
  name: "Wanda Sports Group Company Limited",
  lastSale: "2.22",
  marketCap: "$307.84M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/wsg"
  },
  {
  symbol: "WMG",
  name: "Warner Music Group Corp.",
  lastSale: "27.88",
  marketCap: "$14.22B",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Services-Misc. Amusement & Recreation",
  summaryQuote: "https://old.nasdaq.com/symbol/wmg"
  },
  {
  symbol: "WAFD",
  name: "Washington Federal, Inc.",
  lastSale: "22.15",
  marketCap: "$1.68B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wafd"
  },
  {
  symbol: "WASH",
  name: "Washington Trust Bancorp, Inc.",
  lastSale: "34.7",
  marketCap: "$598.93M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wash"
  },
  {
  symbol: "WSBF",
  name: "Waterstone Financial, Inc.",
  lastSale: "16.47",
  marketCap: "$426.69M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/wsbf"
  },
  {
  symbol: "WTRE",
  name: "Watford Holdings Ltd.",
  lastSale: "35.55",
  marketCap: "$706.98M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wtre"
  },
  {
  symbol: "WTREP",
  name: "Watford Holdings Ltd.",
  lastSale: "25.25",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Property-Casualty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/wtrep"
  },
  {
  symbol: "WVE",
  name: "WAVE Life Sciences Ltd.",
  lastSale: "7.87",
  marketCap: "$381.42M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/wve"
  },
  {
  symbol: "WNFM",
  name: "Wayne Farms, Inc.",
  lastSale: "n/a",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wnfm"
  },
  {
  symbol: "WSTG",
  name: "Wayside Technology Group, Inc.",
  lastSale: "21.77",
  marketCap: "$95.04M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Retail: Computer Software & Peripheral Equipment",
  summaryQuote: "https://old.nasdaq.com/symbol/wstg"
  },
  {
  symbol: "WDFC",
  name: "WD-40 Company",
  lastSale: "238.61",
  marketCap: "$3.26B",
  ipoYear: "1973",
  sector: "Basic Industries",
  industry: "Major Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/wdfc"
  },
  {
  symbol: "WB",
  name: "Weibo Corporation",
  lastSale: "41.67",
  marketCap: "$9.44B",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/wb"
  },
  {
  symbol: "WEN",
  name: "Wendy&#39;s Company (The)",
  lastSale: "23.53",
  marketCap: "$5.27B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/wen"
  },
  {
  symbol: "WERN",
  name: "Werner Enterprises, Inc.",
  lastSale: "39.79",
  marketCap: "$2.75B",
  ipoYear: "1986",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wern"
  },
  {
  symbol: "WSBC",
  name: "WesBanco, Inc.",
  lastSale: "24.13",
  marketCap: "$1.62B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wsbc"
  },
  {
  symbol: "WSBCP",
  name: "WesBanco, Inc.",
  lastSale: "26.88",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wsbcp"
  },
  {
  symbol: "WTBA",
  name: "West Bancorporation",
  lastSale: "16.86",
  marketCap: "$277.67M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wtba"
  },
  {
  symbol: "WABC",
  name: "Westamerica Bancorporation",
  lastSale: "52.65",
  marketCap: "$1.42B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wabc"
  },
  {
  symbol: "WINC",
  name: "Western Asset Short Duration Income ETF",
  lastSale: "25.65",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/winc"
  },
  {
  symbol: "WBND",
  name: "Western Asset Total Return ETF",
  lastSale: "28.33",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wbnd"
  },
  {
  symbol: "WDC",
  name: "Western Digital Corporation",
  lastSale: "40.32",
  marketCap: "$12.27B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Electronic Components",
  summaryQuote: "https://old.nasdaq.com/symbol/wdc"
  },
  {
  symbol: "WNEB",
  name: "Western New England Bancorp, Inc.",
  lastSale: "5.75",
  marketCap: "$147.45M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Savings Institutions",
  summaryQuote: "https://old.nasdaq.com/symbol/wneb"
  },
  {
  symbol: "WPRT",
  name: "Westport Fuel Systems Inc",
  lastSale: "1.94",
  marketCap: "$265.31M",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/wprt"
  },
  {
  symbol: "WWR",
  name: "Westwater Resources, Inc.",
  lastSale: "4.56",
  marketCap: "$53.26M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Precious Metals",
  summaryQuote: "https://old.nasdaq.com/symbol/wwr"
  },
  {
  symbol: "WEYS",
  name: "Weyco Group, Inc.",
  lastSale: "16.11",
  marketCap: "$158.09M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Apparel",
  summaryQuote: "https://old.nasdaq.com/symbol/weys"
  },
  {
  symbol: "WHLR",
  name: "Wheeler Real Estate Investment Trust, Inc.",
  lastSale: "2.85",
  marketCap: "$27.64M",
  ipoYear: "2012",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/whlr"
  },
  {
  symbol: "WHLRD",
  name: "Wheeler Real Estate Investment Trust, Inc.",
  lastSale: "15",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/whlrd"
  },
  {
  symbol: "WHLRP",
  name: "Wheeler Real Estate Investment Trust, Inc.",
  lastSale: "10.48",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Real Estate Investment Trusts",
  summaryQuote: "https://old.nasdaq.com/symbol/whlrp"
  },
  {
  symbol: "WHF",
  name: "WhiteHorse Finance, Inc.",
  lastSale: "10.6",
  marketCap: "$217.79M",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/whf"
  },
  {
  symbol: "WHFBZ",
  name: "WhiteHorse Finance, Inc.",
  lastSale: "25.4",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/whfbz"
  },
  {
  symbol: "FREE",
  name: "Whole Earth Brands, Inc.",
  lastSale: "8.53",
  marketCap: "$327.78M",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/free"
  },
  {
  symbol: "FREEW",
  name: "Whole Earth Brands, Inc.",
  lastSale: "0.93",
  marketCap: "n/a",
  ipoYear: "2019",
  sector: "Consumer Non-Durables",
  industry: "Specialty Foods",
  summaryQuote: "https://old.nasdaq.com/symbol/freew"
  },
  {
  symbol: "WHLM",
  name: "Wilhelmina International, Inc.",
  lastSale: "2.95",
  marketCap: "$15.21M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Professional Services",
  summaryQuote: "https://old.nasdaq.com/symbol/whlm"
  },
  {
  symbol: "WVVI",
  name: "Willamette Valley Vineyards, Inc.",
  lastSale: "6.19",
  marketCap: "$30.73M",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/wvvi"
  },
  {
  symbol: "WVVIP",
  name: "Willamette Valley Vineyards, Inc.",
  lastSale: "5.5",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Non-Durables",
  industry: "Beverages (Production/Distribution)",
  summaryQuote: "https://old.nasdaq.com/symbol/wvvip"
  },
  {
  symbol: "WLDN",
  name: "Willdan Group, Inc.",
  lastSale: "27.42",
  marketCap: "$330.85M",
  ipoYear: "2006",
  sector: "Consumer Services",
  industry: "Military/Government/Technical",
  summaryQuote: "https://old.nasdaq.com/symbol/wldn"
  },
  {
  symbol: "WLFC",
  name: "Willis Lease Finance Corporation",
  lastSale: "22.16",
  marketCap: "$132.41M",
  ipoYear: "1996",
  sector: "Consumer Durables",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/wlfc"
  },
  {
  symbol: "WLTW",
  name: "Willis Towers Watson Public Limited Company",
  lastSale: "200.44",
  marketCap: "$25.83B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Specialty Insurers",
  summaryQuote: "https://old.nasdaq.com/symbol/wltw"
  },
  {
  symbol: "WSC",
  name: "WillScot Mobile Mini Holdings Corp.",
  lastSale: "18.64",
  marketCap: "$4.24B",
  ipoYear: "2015",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wsc"
  },
  {
  symbol: "WIMI",
  name: "WiMi Hologram Cloud Inc.",
  lastSale: "5.56",
  marketCap: "$371.32M",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/wimi"
  },
  {
  symbol: "WINT",
  name: "Windtree Therapeutics, Inc.",
  lastSale: "6.94",
  marketCap: "$117.19M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/wint"
  },
  {
  symbol: "WING",
  name: "Wingstop Inc.",
  lastSale: "125.18",
  marketCap: "$3.71B",
  ipoYear: "2015",
  sector: "Consumer Services",
  industry: "Restaurants",
  summaryQuote: "https://old.nasdaq.com/symbol/wing"
  },
  {
  symbol: "WINA",
  name: "Winmark Corporation",
  lastSale: "167",
  marketCap: "$624.63M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/wina"
  },
  {
  symbol: "WTFC",
  name: "Wintrust Financial Corporation",
  lastSale: "46.83",
  marketCap: "$2.7B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wtfc"
  },
  {
  symbol: "WTFCM",
  name: "Wintrust Financial Corporation",
  lastSale: "25.9",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wtfcm"
  },
  {
  symbol: "WTFCP",
  name: "Wintrust Financial Corporation",
  lastSale: "26.77",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wtfcp"
  },
  {
  symbol: "CXSE",
  name: "WisdomTree China ex-State-Owned Enterprises Fund",
  lastSale: "60.01",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/cxse"
  },
  {
  symbol: "WCLD",
  name: "WisdomTree Cloud Computing Fund",
  lastSale: "44.95",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/wcld"
  },
  {
  symbol: "EMCB",
  name: "WisdomTree Emerging Markets Corporate Bond Fund",
  lastSale: "74.05",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/emcb"
  },
  {
  symbol: "DGRE",
  name: "WisdomTree Emerging Markets Quality Dividend Growth Fund",
  lastSale: "24.97",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dgre"
  },
  {
  symbol: "DXGE",
  name: "WisdomTree Germany Hedged Equity Fund",
  lastSale: "27.985",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dxge"
  },
  {
  symbol: "HYZD",
  name: "WisdomTree Interest Rate Hedged High Yield Bond Fund",
  lastSale: "21.0428",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/hyzd"
  },
  {
  symbol: "AGZD",
  name: "WisdomTree Interest Rate Hedged U.S. Aggregate Bond Fund",
  lastSale: "46.89",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/agzd"
  },
  {
  symbol: "WETF",
  name: "WisdomTree Investments, Inc.",
  lastSale: "3.7",
  marketCap: "$536.04M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/wetf"
  },
  {
  symbol: "DXJS",
  name: "WisdomTree Japan Hedged SmallCap Equity Fund",
  lastSale: "38.6631",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dxjs"
  },
  {
  symbol: "DGRW",
  name: "WisdomTree U.S. Quality Dividend Growth Fund",
  lastSale: "49.28",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dgrw"
  },
  {
  symbol: "DGRS",
  name: "WisdomTree U.S. SmallCap Quality Dividend Growth Fund",
  lastSale: "32.6922",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "n/a",
  industry: "n/a",
  summaryQuote: "https://old.nasdaq.com/symbol/dgrs"
  },
  {
  symbol: "WKEY",
  name: "WISeKey International Holding AG",
  lastSale: "5.73",
  marketCap: "$82.32M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wkey"
  },
  {
  symbol: "WIX",
  name: "Wix.com Ltd.",
  lastSale: "268",
  marketCap: "$14.91B",
  ipoYear: "2013",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/wix"
  },
  {
  symbol: "WWD",
  name: "Woodward, Inc.",
  lastSale: "79.3",
  marketCap: "$4.95B",
  ipoYear: "n/a",
  sector: "Energy",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/wwd"
  },
  {
  symbol: "WDAY",
  name: "Workday, Inc.",
  lastSale: "214.17",
  marketCap: "$50.76B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wday"
  },
  {
  symbol: "WKHS",
  name: "Workhorse Group, Inc.",
  lastSale: "17.25",
  marketCap: "$2.07B",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Auto Manufacturing",
  summaryQuote: "https://old.nasdaq.com/symbol/wkhs"
  },
  {
  symbol: "WRLD",
  name: "World Acceptance Corporation",
  lastSale: "95.04",
  marketCap: "$705.24M",
  ipoYear: "1991",
  sector: "Finance",
  industry: "Finance: Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/wrld"
  },
  {
  symbol: "WRTC",
  name: "Wrap Technologies, Inc.",
  lastSale: "5.4",
  marketCap: "$197.36M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Ordnance And Accessories",
  summaryQuote: "https://old.nasdaq.com/symbol/wrtc"
  },
  {
  symbol: "WMGI",
  name: "Wright Medical Group N.V.",
  lastSale: "30.6",
  marketCap: "$3.97B",
  ipoYear: "2011",
  sector: "Health Care",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/wmgi"
  },
  {
  symbol: "WSFS",
  name: "WSFS Financial Corporation",
  lastSale: "30.63",
  marketCap: "$1.55B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wsfs"
  },
  {
  symbol: "WVFC",
  name: "WVS Financial Corp.",
  lastSale: "13.5001",
  marketCap: "$25.69M",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/wvfc"
  },
  {
  symbol: "WW",
  name: "WW International, Inc. ",
  lastSale: "23.08",
  marketCap: "$1.57B",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ww"
  },
  {
  symbol: "WYNN",
  name: "Wynn Resorts, Limited",
  lastSale: "71.83",
  marketCap: "$7.75B",
  ipoYear: "2002",
  sector: "Consumer Services",
  industry: "Hotels/Resorts",
  summaryQuote: "https://old.nasdaq.com/symbol/wynn"
  },
  {
  symbol: "XFOR",
  name: "X4 Pharmaceuticals, Inc.",
  lastSale: "5.98",
  marketCap: "$97.39M",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
  summaryQuote: "https://old.nasdaq.com/symbol/xfor"
  },
  {
  symbol: "XBIT",
  name: "XBiotech Inc.",
  lastSale: "17.86",
  marketCap: "$517.75M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xbit"
  },
  {
  symbol: "XELB",
  name: "Xcel Brands, Inc",
  lastSale: "0.9006",
  marketCap: "$17.32M",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Multi-Sector Companies",
  summaryQuote: "https://old.nasdaq.com/symbol/xelb"
  },
  {
  symbol: "XEL",
  name: "Xcel Energy Inc.",
  lastSale: "72.33",
  marketCap: "$38B",
  ipoYear: "n/a",
  sector: "Public Utilities",
  industry: "Power Generation",
  summaryQuote: "https://old.nasdaq.com/symbol/xel"
  },
  {
  symbol: "XNCR",
  name: "Xencor, Inc.",
  lastSale: "38.8",
  marketCap: "$2.22B",
  ipoYear: "2013",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xncr"
  },
  {
  symbol: "XBIO",
  name: "Xenetic Biosciences, Inc.",
  lastSale: "0.9192",
  marketCap: "$5.79M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xbio"
  },
  {
  symbol: "XBIOW",
  name: "Xenetic Biosciences, Inc.",
  lastSale: "1.2",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xbiow"
  },
  {
  symbol: "XENE",
  name: "Xenon Pharmaceuticals Inc.",
  lastSale: "10.07",
  marketCap: "$352.4M",
  ipoYear: "2014",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xene"
  },
  {
  symbol: "XERS",
  name: "Xeris Pharmaceuticals, Inc.",
  lastSale: "5.12",
  marketCap: "$236.96M",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xers"
  },
  {
  symbol: "XLNX",
  name: "Xilinx, Inc.",
  lastSale: "124.35",
  marketCap: "$30.47B",
  ipoYear: "1990",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/xlnx"
  },
  {
  symbol: "XOMA",
  name: "XOMA Corporation",
  lastSale: "23.88",
  marketCap: "$263.11M",
  ipoYear: "1986",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xoma"
  },
  {
  symbol: "XP",
  name: "XP Inc.",
  lastSale: "43.11",
  marketCap: "$23.79B",
  ipoYear: "2019",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/xp"
  },
  {
  symbol: "XPEL",
  name: "XPEL, Inc.",
  lastSale: "25.7",
  marketCap: "$709.64M",
  ipoYear: "n/a",
  sector: "Capital Goods",
  industry: "Industrial Specialties",
  summaryQuote: "https://old.nasdaq.com/symbol/xpel"
  },
  {
  symbol: "XPER",
  name: "Xperi Holding Corporation",
  lastSale: "12.82",
  marketCap: "$1.39B",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Semiconductors",
  summaryQuote: "https://old.nasdaq.com/symbol/xper"
  },
  {
  symbol: "XSPA",
  name: "XpresSpa Group, Inc. ",
  lastSale: "1.96",
  marketCap: "$134.83M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/xspa"
  },
  {
  symbol: "XTLB",
  name: "XTL Biopharmaceuticals Ltd.",
  lastSale: "2.12",
  marketCap: "$10.9M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/xtlb"
  },
  {
  symbol: "XNET",
  name: "Xunlei Limited",
  lastSale: "2.83",
  marketCap: "$192.34M",
  ipoYear: "2014",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/xnet"
  },
  {
  symbol: "YNDX",
  name: "Yandex N.V.",
  lastSale: "59.53",
  marketCap: "$20.84B",
  ipoYear: "2011",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/yndx"
  },
  {
  symbol: "YTRA",
  name: "Yatra Online, Inc.",
  lastSale: "1.06",
  marketCap: "$63.6M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Transportation Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ytra"
  },
  {
  symbol: "YSACU",
  name: "Yellowstone Acquisition Company",
  lastSale: "10.02",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/ysacu"
  },
  {
  symbol: "YTEN",
  name: "Yield10 Bioscience, Inc.",
  lastSale: "5.91",
  marketCap: "$19.7M",
  ipoYear: "n/a",
  sector: "Basic Industries",
  industry: "Containers/Packaging",
  summaryQuote: "https://old.nasdaq.com/symbol/yten"
  },
  {
  symbol: "YIN",
  name: "Yintech Investment Holdings Limited",
  lastSale: "7.2",
  marketCap: "$526.2M",
  ipoYear: "2016",
  sector: "Finance",
  industry: "Investment Bankers/Brokers/Service",
  summaryQuote: "https://old.nasdaq.com/symbol/yin"
  },
  {
  symbol: "YMAB",
  name: "Y-mAbs Therapeutics, Inc.",
  lastSale: "43.27",
  marketCap: "$1.73B",
  ipoYear: "2018",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ymab"
  },
  {
  symbol: "YGYI",
  name: "Youngevity International, Inc.",
  lastSale: "0.8983",
  marketCap: "$27.24M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/ygyi"
  },
  {
  symbol: "YGYIP",
  name: "Youngevity International, Inc.",
  lastSale: "10.68",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Catalog/Specialty Distribution",
  summaryQuote: "https://old.nasdaq.com/symbol/ygyip"
  },
  {
  symbol: "YRCW",
  name: "YRC Worldwide, Inc.",
  lastSale: "4.2",
  marketCap: "$223.79M",
  ipoYear: "n/a",
  sector: "Transportation",
  industry: "Trucking Freight/Courier Services",
  summaryQuote: "https://old.nasdaq.com/symbol/yrcw"
  },
  {
  symbol: "CTIB",
  name: "Yunhong CTI Ltd.",
  lastSale: "1.77",
  marketCap: "$8.44M",
  ipoYear: "1997",
  sector: "Basic Industries",
  industry: "Specialty Chemicals",
  summaryQuote: "https://old.nasdaq.com/symbol/ctib"
  },
  {
  symbol: "ZGYH",
  name: "Yunhong International",
  lastSale: "9.89",
  marketCap: "$88.46M",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zgyh"
  },
  {
  symbol: "ZGYHR",
  name: "Yunhong International",
  lastSale: "0.2",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zgyhr"
  },
  {
  symbol: "ZGYHU",
  name: "Yunhong International",
  lastSale: "10.165",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zgyhu"
  },
  {
  symbol: "ZGYHW",
  name: "Yunhong International",
  lastSale: "0.169",
  marketCap: "n/a",
  ipoYear: "2020",
  sector: "Finance",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zgyhw"
  },
  {
  symbol: "YJ",
  name: "Yunji Inc.",
  lastSale: "1.95",
  marketCap: "$414.02M",
  ipoYear: "2019",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/yj"
  },
  {
  symbol: "ZAGG",
  name: "ZAGG Inc",
  lastSale: "2.9",
  marketCap: "$86.48M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Specialty Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/zagg"
  },
  {
  symbol: "ZLAB",
  name: "Zai Lab Limited",
  lastSale: "88.49",
  marketCap: "$6.67B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zlab"
  },
  {
  symbol: "ZEAL",
  name: "Zealand Pharma A/S",
  lastSale: "36.07",
  marketCap: "$1.43B",
  ipoYear: "2017",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zeal"
  },
  {
  symbol: "ZBRA",
  name: "Zebra Technologies Corporation",
  lastSale: "289.28",
  marketCap: "$15.43B",
  ipoYear: "1991",
  sector: "Technology",
  industry: "Industrial Machinery/Components",
  summaryQuote: "https://old.nasdaq.com/symbol/zbra"
  },
  {
  symbol: "ZNTL",
  name: "Zentalis Pharmaceuticals, Inc.",
  lastSale: "41.8",
  marketCap: "$1.67B",
  ipoYear: "2020",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zntl"
  },
  {
  symbol: "ZCMD",
  name: "ZHONGCHAO INC.",
  lastSale: "1.9",
  marketCap: "$44.77M",
  ipoYear: "2020",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zcmd"
  },
  {
  symbol: "Z",
  name: "Zillow Group, Inc.",
  lastSale: "92.52",
  marketCap: "$21B",
  ipoYear: "n/a",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/z"
  },
  {
  symbol: "ZG",
  name: "Zillow Group, Inc.",
  lastSale: "93.08",
  marketCap: "$21.13B",
  ipoYear: "2011",
  sector: "Miscellaneous",
  industry: "Business Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zg"
  },
  {
  symbol: "ZION",
  name: "Zions Bancorporation N.A.",
  lastSale: "31.08",
  marketCap: "$5.1B",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/zion"
  },
  {
  symbol: "ZIONL",
  name: "Zions Bancorporation N.A.",
  lastSale: "27.3097",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/zionl"
  },
  {
  symbol: "ZIONN",
  name: "Zions Bancorporation N.A.",
  lastSale: "25.57",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/zionn"
  },
  {
  symbol: "ZIONO",
  name: "Zions Bancorporation N.A.",
  lastSale: "27.37",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/ziono"
  },
  {
  symbol: "ZIONP",
  name: "Zions Bancorporation N.A.",
  lastSale: "24.748",
  marketCap: "n/a",
  ipoYear: "n/a",
  sector: "Finance",
  industry: "Major Banks",
  summaryQuote: "https://old.nasdaq.com/symbol/zionp"
  },
  {
  symbol: "ZIOP",
  name: "ZIOPHARM Oncology Inc",
  lastSale: "2.3",
  marketCap: "$492.55M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/ziop"
  },
  {
  symbol: "ZIXI",
  name: "Zix Corporation",
  lastSale: "6.42",
  marketCap: "$366.15M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zixi"
  },
  {
  symbol: "ZKIN",
  name: "ZK International Group Co., Ltd",
  lastSale: "1.56",
  marketCap: "$25.83M",
  ipoYear: "2017",
  sector: "Capital Goods",
  industry: "Metal Fabrications",
  summaryQuote: "https://old.nasdaq.com/symbol/zkin"
  },
  {
  symbol: "ZGNX",
  name: "Zogenix, Inc.",
  lastSale: "20.6",
  marketCap: "$1.14B",
  ipoYear: "2010",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zgnx"
  },
  {
  symbol: "ZM",
  name: "Zoom Video Communications, Inc.",
  lastSale: "538.99",
  marketCap: "$153.3B",
  ipoYear: "2019",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/zm"
  },
  {
  symbol: "ZI",
  name: "ZoomInfo Technologies Inc.",
  lastSale: "43.06",
  marketCap: "$16.76B",
  ipoYear: "2020",
  sector: "Technology",
  industry: "Computer Software: Prepackaged Software",
  summaryQuote: "https://old.nasdaq.com/symbol/zi"
  },
  {
  symbol: "ZSAN",
  name: "Zosano Pharma Corporation",
  lastSale: "0.4026",
  marketCap: "$38.5M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zsan"
  },
  {
  symbol: "ZVO",
  name: "Zovio Inc.",
  lastSale: "4.03",
  marketCap: "$129.52M",
  ipoYear: "n/a",
  sector: "Consumer Services",
  industry: "Other Consumer Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zvo"
  },
  {
  symbol: "ZS",
  name: "Zscaler, Inc.",
  lastSale: "148.64",
  marketCap: "$19.76B",
  ipoYear: "2018",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/zs"
  },
  {
  symbol: "ZUMZ",
  name: "Zumiez Inc.",
  lastSale: "30.07",
  marketCap: "$765.13M",
  ipoYear: "2005",
  sector: "Consumer Services",
  industry: "Clothing/Shoe/Accessory Stores",
  summaryQuote: "https://old.nasdaq.com/symbol/zumz"
  },
  {
  symbol: "CNET",
  name: "ZW Data Action Technologies Inc.",
  lastSale: "1.55",
  marketCap: "$33.7M",
  ipoYear: "n/a",
  sector: "Technology",
  industry: "Computer Software: Programming, Data Processing",
  summaryQuote: "https://old.nasdaq.com/symbol/cnet"
  },
  {
  symbol: "ZYNE",
  name: "Zynerba Pharmaceuticals, Inc.",
  lastSale: "3.48",
  marketCap: "$101.81M",
  ipoYear: "2015",
  sector: "Health Care",
  industry: "Major Pharmaceuticals",
  summaryQuote: "https://old.nasdaq.com/symbol/zyne"
  },
  {
  symbol: "ZYXI",
  name: "Zynex, Inc.",
  lastSale: "14.28",
  marketCap: "$495.6M",
  ipoYear: "n/a",
  sector: "Health Care",
  industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
  summaryQuote: "https://old.nasdaq.com/symbol/zyxi"
  },
  {
  symbol: "ZNGA",
  name: "Zynga Inc.",
  lastSale: "9.45",
  marketCap: "$10.16B",
  ipoYear: "2011",
  sector: "Technology",
  industry: "EDP Services",
  summaryQuote: "https://old.nasdaq.com/symbol/znga"
  }
];

// saving all nasdaq stocks to collection. now have access to find them and do basic stuff on it

Stocks.collection.insertMany(test, function(err,docs){
  if (err) {
    console.log(err);
  } else {
    console.log('documents have been added');
  }
});

module.exports = {
  Stocks,
  connectDB
}