import React from "react";
import "./ImageOverlay.css";
const ImageOverlay = () => {
  return (
    <div className="image-overlay">
      <div className="image-overlay-container">
        <div className="columns">
          <div className="column-left">
            <div className="earn-more-header">
              Зарабатывайте <br />
              больше
            </div>
            <div className="welbex-header">с WELBEX</div>
            <p className="under-welbex-text">
              развиваем и контролируем <br />
              продажи за вас
            </p>
          </div>
          <div className="column-right">
            <div className="top-right-heading">
              Вместе с <span className="colored-header">БЕСПЛАТНОЙ</span>
              <br />
              <span className="colored-header">КОНСУЛЬТАЦИЕЙ</span> мы дарим:
            </div>
            <div className="gifts-row">
              <div className="gifts-col">
                <div className="gift-desc">
                  <div className="gift-header">
                    <div className="mobile-header">
                      <span className="colored-dash"></span>SKYPE АУДИТ
                    </div>

                    <div className="pc-header">ВИДЖЕТЫ</div>
                  </div>
                  <div className="gift-text-desc">
                    30 готовых
                    <br />
                    решений
                  </div>
                </div>
                <div className="gift-desc">
                  <div className="gift-header">
                    <div className="mobile-header">
                      <span className="colored-dash"></span>DASHBOARD
                    </div>
                    <div className="pc-header">SKYPE АУДИТ</div>
                  </div>
                  <div className="gift-text-desc">
                    отдела продаж
                    <br />и CRM системы
                  </div>
                </div>
              </div>
              <div className="gifts-col">
                <div className="gift-desc">
                  <div className="gift-header">
                    <div className="mobile-header">
                      <span className="colored-dash"></span> 30 ВИДЖЕТОВ
                    </div>

                    <div className="pc-header">DASHBOARD</div>
                  </div>
                  <div className="gift-text-desc">
                    с показателями
                    <br />
                    вашего бизнеса
                  </div>
                </div>
                <div className="gift-desc">
                  <div className="gift-header">
                    <div className="mobile-header">
                      <span className="colored-dash"></span>МЕСЯЦ AMOCRM
                    </div>
                    <div className="pc-header">35 ДНЕЙ</div>
                  </div>
                  <div className="gift-text-desc">
                    использования
                    <br />
                    CRM
                  </div>
                </div>
              </div>
            </div>
            <div className="get-cons-button-div">
              <button type="button" className="get-cons-button">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
