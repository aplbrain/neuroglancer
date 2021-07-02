// Add in additional command-line build options here.
module.exports = {
  define: {
    NEUROGLANCER_CREDIT_LINK: JSON.stringify({ url: 'https://microns-explorer.org', text: 'Microns Explorer' }),
    // NEUROGLANCER_DEFAULT_STATE_FRAGMENT: JSON.stringify('gs://bucket/state.json'),
    // NEUROGLANCER_SHOW_LAYER_BAR_EXTRA_BUTTONS: true,
    // NEUROGLANCER_SHOW_OBJECT_SELECTION_TOOLTIP: true
  },
  googleTagManager: 'GTM-568GB29',
  googleTagManagerAuth: 'eYtcyqAJwhKrmzMP927MYg'
};
