<div align="center">

<h1>Search Scraper</h1>

<p>An api to search all media</p>

![xorizn-search](https://socialify.git.ci/xorizn/xorizn-search/image?description=1&descriptionEditable=This%20is%20a%20scraper%20API%20that%20I%20made%20myself.%20You%20can%20use%20it%20by%20entering%20the%20Vercel%20link%20above%20and%20then%20just%20use%20it.%20Below%20there%20is%20an%20example%20of%20how%20to%20use%20this%20API.&font=Jost&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FXorizn%2Fimage%2Fmain%2Flight-node-opened-svgrepo-com.svg%3Ftoken%3DGHSAT0AAAAAACAVCJHFBZ67ZLA6JXXDKK5UZCAWG4Q&name=1&owner=1&pattern=Signal&pulls=1&stargazers=1&theme=Light)

</div>

## Other Scraper

- [DOWNLOADS-API](https://github.com/Xorizn/xorizn-downloads)
- [ALL-API](https://github.com/Xorizn/xorizn-apis)

## List Routes SEARCH API
- `/` : Nothing
- `api/search/youtube`
- `api/search/wikimedia`
- `api/search/wikipedia`
- `api/search/soundcloud`
- `api/search/ringtone`
- `api/search/playstore`
- `api/search/lirik`
- `api/search/lirik/v2`
- `api/search/wattpad`
- `api/search/link-grup-wa`
- `api/search/kbbi`
- `api/search/nomina`
- ~~`api/search/kodepos`~~
- `api/search/steam`
- `api/search/bukalapak`
- `api/search/xpanas`
- `api/search/nhentai`
- `api/search/steam-detail`
- `api/search/google/search`
- `api/search/google/image`

### TV SEARCH
- `api/tv/acaranow`
- `api/tv/sepakbola`
- `api/tv/jadwal`


## Example and params

### API SEARCH
```
  GET api/search/:param
```
| Param          | query     | Method | Example  |
| :----------    | :-------  | :--    | :--      |
| `/youtube`   | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/youtube?search=zee) |
| `/wikimedia`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wikimedia?search=jokowi) |
| `/wikipedia`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wikipedia?search=jokowi) |
| `/soundcloud`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/soundcloud?search=bertaut) |
| `/ringtone`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/ringtone?search=naruto) |
| `/playstore`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/playstore?search=ff) |
| `/lirik`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/lirik?search=bertaut) |
| `/lirik/v2`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/lirik/v2?search=bertaut) |
| `/wattpad`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wattpad?search=anime) |
| `/link-grup-wa`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/link-grup-wa?search=anime) |
| `/kbbi`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/kbbi?search=aku) |
| `/nomina`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/nomina?search=aku) |
| ~~`/kodepos`~~    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/kodepos?search=jakarta) |
| `/steam`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/steam?search=dota2) |
| `/bukalapak`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/bukalapak?search=baju) |
| `/xpanas`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/xpanas?search=china) |
| `/nhentai`    | `g`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/nhentai?g=310502) |
| `/steam-detail`    | `url`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/steam-detail?url=https://store.steampowered.com/app/570/Dota_2/) |
| `/google/search`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/google/search?search=naruto) |
| `/google/image`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/google/image?search=naruto) |

### API TV
```
  GET api/tv/:param
```
| Param          | query     | Method | Example  |
| :----------    | :-------  | :--    | :--      |
| `/acaranow`    |      | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/tv/acaranow) |
| `/sepakbola`   |      | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/tv/sepakbola) |
| `/jadwal`    | `search`: *gtv*, *antv*, *indosiar*, *inewstv*, *kompastv*, *metrotv*, *mnctv*, *moji*, *nettv*, *rcti*, *rtv*, *sctv*, *trans7*, *transtv*, *tvone*, *tvri*     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/tv/jadwal?search=antv) |

## Installation

If you want to add this project in your own machine, you can install this project by following the step below

1. Clone this repository

```
git clone https://github.com/Xorizn/xorizn-downloads.git
```

2. Install dependencies

In my case, i'm using pnpm for package manager, you can adjust with your favorite package manager

```
npm install
```

# MAKASIH LORT
* [`Satya Wikananda`](https://github.com/satyawikananda)

ed by Express and vercel. Code licensed under [MIT License](https://raw.githubusercontent.com/Xorizn/xorizn-downloads/master/LICENSE)
