module.exports = ({ admin, functions }, ref) => {
  return functions.database.ref(ref)
    .onCreate(event => {
      const data = event.data.val();

      if (!data || data.timestamp) {
        return;
      }

      const seconds = Math.round(Date.now() / 1000);
      return event.data.ref.parent.child('timestamp').set(seconds);
    });
};
