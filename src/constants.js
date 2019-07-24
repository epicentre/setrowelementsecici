export const STYLES = `
  .ses_container {
    position: fixed;
    left: 10px;
    max-width: 100%;
    height: auto;
    padding: 8px 10px;
    display: none;
    background: rgba(0,0,0,.7);
    border: 2px solid #FFF;
    z-index: 999999;
  }

  .ses_container.gs_show {
    display: block;
  }

  .ses_container.gs_bottom {
    bottom: 10px;
  }

  .ses_container.gs_top {
    top: 10px;
  }

  .ses_selected {
    border: 2px dashed blue !important;
  }

  .ses_hover {
    border: 2px dashed red !important;
  }
    
  .ses_subtitle_message {
    display: block;
    font-size: 12px;
    color: #FFF;
    margin-top: 5px;
  }

  .ses_actions {
    display: flex;
  }

  .ses_container .ses_text_elem {
    flex-grow: 2;
    margin-right: 5px;
    height: 30px;
    color: #000;
  }

  .ses_container .ses_button {
    margin-right: 5px;
    vertical-align: top;
    height: 30px;
    padding: 0 5px;
    font-size: 14px;
    color: white;
    text-align: center;
    background: #145cab;
    border: none;
    cursor: pointer;
  }

  .ses_arrow-up {
    border: solid #FFF;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-top: 10px;
  }
`;

export const INFO_MESSAGE = 'Mouse sağ tık yapın ve açılan pencereden "Elementi Seç" butonuna tıklayın';

export const COPY_BUTTON_TEXT = 'Kopyala';

export const TOGGLE_POSITION_BUTTON_TEXT = 'Pozisyonu Değiştir';