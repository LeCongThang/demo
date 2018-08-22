export default function ({
  app,
  store
}) {
  if (!store.state.lang) {
    app.i18n.locale = 'vi';
  } else {
    app.i18n.locale = store.state.lang;
  }

}
