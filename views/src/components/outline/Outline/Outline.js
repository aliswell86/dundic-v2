import React from 'react';
import styles from './Outline.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Outline = () => {
  return (
    <div className={cx('outline')}>
      <div className={cx('chapter01')}>
        <div className={cx('title')}>We DF Mine Worker</div>
        <div className={cx('copy')}>" 던 파 광 부 가 뭔 가 요 ? "</div>
        <div className={cx('copy-desc')}>
          던전앤파이터에서 할 수 있는 노가다던전은 많습니다. <br/>
          가장 추천드리는 곳은 토탈이클립스입니다. <br/>
          이유는 다른 던전에 비해 골드보상이 높습니다. <br/>
          사람들이 가장 많이 다니는 노가다던전이며 그래서 정보도 많습니다.<br/>
          일정한 수준의 장비스펙만을 맞춘 이후 토탈이클립스만 다닙니다. <br/>
          이제 광부가 되는겁니다. 골드를 많이 모으고 싶다면 던파광부를 시작해보세요.
        </div>        
      </div>
      <div className={cx('chapter02')}></div>
      <div className={cx('chapter03')}>
        <div className={cx('title')}>던파광부를 시작해보세요.</div>
        <div className={cx('deco-bar')}></div>
        <div className={cx('sub-proc')}>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/levelup.svg' alt='레벨업'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>만렙달성</div>
              <div className={cx('sub-proc01-contents-desc')}>케릭터를 골라 레벨업을 합니다. 친절한 퀘스트진행을 따라가다 보면 금방 만렙을 달성하게 됩니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button>케릭터추천 바로가기</button>
              </div>
            </div>
          </div>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/specup.svg' alt='스펙업'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>장비스펙업</div>
              <div className={cx('sub-proc01-contents-desc')}>토탈이클립스 슬레이어 난이도를 수월하게 클리어하기 위해서는 높은스펙이 필요한건 아닙니다. 할렘에픽세트 정도면 무난합니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button>장비추천 바로가기</button>
              </div>
            </div>
          </div>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/run.svg' alt='노가다'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>토탈이클립스 클리어</div>
              <div className={cx('sub-proc01-contents-desc')}>이제 토탈이클립스 던전을 슬레이어난이도로 선택하여 반복반복 또반복 클리어를 합니다. 일반+피로도물약1회면 하루에 24회 클리어가능합니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button>스킬추천 바로가기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('chapter03')}>
        <div className={cx('title')}>이렇게 던파골드가 모입니다.</div>
        <div className={cx('deco-bar')}></div>
        <div className={cx('sub-proc')}>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/gold.svg' alt='골드보상'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>던전클리어보상</div>
              <div className={cx('sub-proc01-contents-desc')}>토탈이클립스 슬레이어난이도 클리어시  SSS랭크 달성기준 한판당 약 30,000 ~ 42,000골드 보상이 있습니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button>수익계산기 바로가기</button>
              </div>
            </div>
          </div>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/worker.svg' alt='테라니움 판매'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>테라니움 재료아이템 판매</div>
              <div className={cx('sub-proc01-contents-desc')}>클리어시 한판당 4개의 테라니움을 얻습니다. NPC를통해 여러가지 아이템으로 교환해서 경매장에 올려 판매합니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button style={{width: '154px'}}>테라니움 순위표 바로가기</button>
              </div>
            </div>
          </div>
          <div className={cx('sub-proc01')}>
            <div className={cx('sub-proc01-img')}>
              <img src='/resource/img/treasure.svg' alt='기타 아이템 드롭'/>
            </div>
            <div className={cx('sub-proc01-contents')}>
              <div className={cx('sub-proc01-contents-title')}>기타아이템 드롭</div>
              <div className={cx('sub-proc01-contents-desc')}>간혹 골드가치가 꽤되는 아이템이 드롭됩니다. 성물 장비, 지옥파티 초대장, 네임드카드, 균열 반응석 등이 해당됩니다.</div>
              <div className={cx('detail-procinfo-btn')}>
                <button style={{width: '140px'}}>경매장최저가 바로가기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outline;