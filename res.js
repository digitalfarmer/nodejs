'use strict';

exports.ok=function (values,res) {
    var data={
        'status':200,
        'DataPersonal':values
    };
    res.json(data);
    res.end();
};