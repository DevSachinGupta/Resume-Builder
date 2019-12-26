
import grapesjs from 'grapesjs';

export function ComponentEditor(DemoPage) {
    var editor = grapesjs.init({
    container: '#gjs',
    width: '82vw',
    height: 'calc(100vh - 64px)',
    components: DemoPage.components || DemoPage.html,
    style: DemoPage.style || DemoPage.css,
    storageManager: {
    autoload: false,
    },
    panels: {
    defaults: [],
    },
    canvas: {
    styles: [
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        // 'https://res.cloudinary.com/rb-app/raw/upload/v1577214082/commons/css/style_t9mzif.css',
        'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css',
    ]
    }
    });
    return editor;
  }
  