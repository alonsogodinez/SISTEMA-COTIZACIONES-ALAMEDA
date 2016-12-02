"use strict";

module.exports.renderOrJSON = (req, res, obj, view) => {
  if (!req.xhr) return res.render(view, obj);
  return res.json(obj);
};