export const useModifiedStyles = (defaults, customs) => {
  const customsCopy = { ...customs };

  const merge = (defs, mods) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(defs)) {
      if (val !== null && typeof val === 'object') {
        if (mods[key] === undefined) {
          // eslint-disable-next-line no-param-reassign
          mods[key] = new val.__proto__.constructor();
        }
        merge(val, mods[key]);
      } else {
        // eslint-disable-next-line no-param-reassign
        mods[key] = val;
      }
    }

    return mods;
  };

  return merge(defaults, customsCopy);
};
