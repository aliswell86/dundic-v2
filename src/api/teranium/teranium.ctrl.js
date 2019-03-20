const requestPromise = require('request-promise');
const qs = require('querystring');

let info = [
  {seq: 0, name: '골드', id: '', lowprice: 8111, limit_cnt: 80, component_cnt: 1, price_cnt: 1, rarity: 'common', trader: '조나단'},
  {seq: 1, name: '황금 큐브 조각', id: 'fbdf88559ec0414339d1b4d089b6bd62', lowprice: 0, limit_cnt: 4, component_cnt: 50, price_cnt: 10, rarity: '레어', trader: '조나단'},
  {seq: 2, name: '탄생의 씨앗', id: '37d04be64e33cccb04e96edd5d7c648a', lowprice: 0, limit_cnt: 5, component_cnt: 70, price_cnt: 10, rarity: '레전더리', trader: '조나단'},
  {seq: 3, name: '순수한 에너지 결정', id: '67443456b667050c7dbfae6ccb3d38ab', lowprice: 0, limit_cnt: 5, component_cnt: 20, price_cnt: 10, rarity: '레어', trader: '조나단'},
  {seq: 4, name: '농밀한 이계의 정수', id: '897cab594bbd04dda00619abfe885674', lowprice: 0, limit_cnt: 1, component_cnt: 4, price_cnt: 50, rarity: '레어', trader: '조나단'},
  {seq: 5, name: '강렬한 흔적', id: '229d5fc637bfc9cb9b2b5308eb5daf17', lowprice: 0, limit_cnt: 2, component_cnt: 10, price_cnt: 50, rarity: '레어', trader: '조나단'},
  {seq: 6, name: '할렘 레어 카드', id: '', lowprice: 200000, limit_cnt: 2, component_cnt: 1, price_cnt: 60, rarity: '레어', trader: '펌킨볼'},
  {seq: 7, name: '마계 카드', id: '', lowprice: 300000, limit_cnt: 1, component_cnt: 1, price_cnt: 100, rarity: '유니크', trader: '펌킨볼'},
  {seq: 8, name: '데이터 칩', id: 'd083b552363c9ef02db63112aa355d6b', lowprice: 0, limit_cnt: 8, component_cnt: 15, price_cnt: 5, rarity: '레어', trader: '펌킨볼'},
  {seq: 9, name: '마그토늄', id: 'c6a38ab8c7540cfc51ea2b0b8b610fa7', lowprice: 0, limit_cnt: 4, component_cnt: 50, price_cnt: 5, rarity: '레어', trader: '펌킨볼'},
  {seq: 10, name: '마검사 체르막 카드', id: '8d069ebf9a8ba8a88759776aa75537e8', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '보더 타운'},
  {seq: 11, name: '광신의 디외르베 카드', id: '4bd47e7909ccd5bb714335e648b90c87', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '토탈 이클립스'},
  {seq: 12, name: '영혼 사육사 몬데그린 카드', id: '377b924a474633cbb2bc34a1512489e6', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '다크 시티'},
  {seq: 13, name: '은광의 타고르 카드', id: 'a50f545e95a47a37972c6169c950e1fc', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '제9 격리구역'},
  {seq: 14, name: '트라우마 욤 카드', id: 'd21ba562d140bc55c3efb2b27fcb5331', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '로열 카지노'},
  {seq: 15, name: '심장파멸자 히카르도 카드', id: 'd586731078745a3f0576778ecbc93fb3', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '유니크', trader: '파이트 클럽'},
  {seq: 16, name: '개코 반시아 카드', id: 'fd77edcb49497511dbe8223eb1818a99', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '보더 타운' },
  {seq: 17, name: '인질술사 아가테 카드', id: 'e87b6e85288c321d115c29d83cb53eb5', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '보더 타운' },
  {seq: 18, name: '혈검의 빌라도 카드', id: 'b24e5ae74696e6939106c897d70c23e6', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '보더 타운' },
  {seq: 19, name: '계약자 넬리 카드', id: 'b1e1ebcee285b6a036acf0983c42a717', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '토탈 이클립스' },
  {seq: 20, name: '노예상 메이시 카드', id: 'c979e1e517b8283eccfcaef66fd17269', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '토탈 이클립스' },
  {seq: 21, name: '푸냐토르 돌케 카드', id: 'fa89d0103c6f9e537e8c0194387d59c3', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '토탈 이클립스' },
  {seq: 22, name: '굶주린 잭 카드', id: 'd2b0ead9b6ae789f01386c22a23f06e1', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '다크 시티' },
  {seq: 23, name: '어둠을 소환하는 탈리아 카드', id: 'b2e30c1f961f917a53bcc502a142bbf9', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '다크 시티' },
  {seq: 24, name: '폭투 드랙스 카드', id: '26752e17af69b20f3daead6ac612b5ae', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '다크 시티' },
  {seq: 25, name: '녹슨검 줄리앙 카드', id: 'f2af96ee6e9fe88e9d864a5e4c0d8806', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '제9 격리구역' },
  {seq: 26, name: '질질 타불 카드', id: 'b38a7969afd91210037a21aef494fed8', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '제9 격리구역' },
  {seq: 27, name: '치료사 소냐르 카드', id: '3fd4e80848a3d029254d5f4bb9ba53d0', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '제9 격리구역' },
  {seq: 28, name: '검치호 발데스 형제 카드', id: '016923abf474cfe2e68ca29713e1d3eb', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '로열 카지노' },
  {seq: 29, name: '딜러 이론제 카드', id: '2b79a4be71f4007ec671261427643e3f', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '로열 카지노' },
  {seq: 30, name: '타짜 콜리스 카드', id: 'f2f57c89c582a116695750a7fc6eec45', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '로열 카지노' },
  {seq: 31, name: '무승부 도미닉 카드', id: '7d38f26d710aa775cb38d79630f869ee', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '파이트 클럽' },
  {seq: 32, name: '배리어 맥크로리 카드', id: '8931d128168e69c155bd6ce95f6555ac', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '파이트 클럽' },
  {seq: 33, name: '비검 길리아드 카드', id: 'ccc8c4d4f383f580f8b5198728abb11c', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '파이트 클럽' },
  {seq: 34, name: '빅 글러브 탈룰라 카드', id: '00c75d17eb614247fd3d7ff757badf83', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '파이트 클럽' },
  {seq: 35, name: '플라잉 제리코 카드', id: '19fa8a0416aaa951730166bd5dbd8d18', lowprice: 0, limit_cnt: 0, component_cnt: 0, price_cnt: 0, rarity: '레어', trader: '파이트 클럽' }
]

/* 경매장 최저가 조회
  GET /api/teranium/lowprice
*/
exports.lowprice = async (ctx) => {  
  try {
    for(let i=0; i<info.length; i++) {
      const {id, name, seq} = info[i];

      if(id !== '') {
        const url = getUrl(qs.escape(name), id)
        await getAucLowPrice(url, i);
      }

      // if(seq > 15) {
      //   const url1 = getUrlItemID(qs.escape(name));
      //   await getItemID(name, url1, i);
      // }
    }
    // console.log(info);
    ctx.body = info;
  } catch(e) {
    ctx.throw(e);
  }
};

const getUrl = (itemName, itemId) => {
  return `https://api.neople.co.kr/df/auction?itemName=${itemName}&itemId=${itemId}&sort=unitPrice:asc&apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq`;
}

const getAucLowPrice = async (url, index) => {
  await requestPromise(url).then((res) => {
    info[index].lowprice = JSON.parse(res).rows[0].unitPrice;
  });
}

// const getUrlItemID = (itemName) => {
//   return `https://api.neople.co.kr/df/items?itemName=${itemName}&wordType=front&apikey=vZmjeyzzdCx4opNjt4gus3jVE8uTC6Dq`;
// }

// const getItemID = async (name, url, index) => {
//   await requestPromise(url).then((res) => {
//     info[index].id = JSON.parse(res).rows[0].itemId;
//   });
// }