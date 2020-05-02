var sqlite3 = require('sqlite3').verbose();
var file = 'postel_jobs.db';
var db = new sqlite3.Database(file);

const status_list = ["0", "1", "2", "3"];

exports.latestJobs = function (count, callback) {

    var sql = "select rowid, org_id, position_id, specialization_id, experience, website, " + 
                        "state_id, city, last_date, create_date, count_views, count_actions from job " +
                        "order by create_date desc limit " + count;

    db.all(sql, function (err, rows) {
        callback(err, rows);
    });
};

exports.filteredJobs = function (filters, callback) {

    var filter_sql = "";

    if (filters.org_id !== "all"){
        filter_sql =  " WHERE ";
        filter_sql =  filter_sql + "org_id in (" + filters.org_id + ") ";
    }

    if (filters.position_id !== "all"){
        //Check if earlier filters are already applied
        filter_sql =  (filter_sql == "") ? " WHERE ": (filter_sql + " AND ");    
        //Create filter string
        filter_sql =  filter_sql + "position_id in (" + filters.position_id + ") ";
    }

    if (filters.state_id !== "all"){
        //Check if earlier filters are already applied
        filter_sql =  (filter_sql == "") ? " WHERE ": (filter_sql + " AND ");    
        //Create filter string
        filter_sql =  filter_sql + "state_id in (" + filters.state_id + ") ";
    }

    var sql = "select rowid, org_id, position_id, specialization_id, experience, website, " + 
                        "state_id, city, last_date, create_date, count_views, count_actions from job " 
                        + filter_sql +
                        "order by create_date desc limit 10 offset " + filters.offset;

    console.log(sql);

    db.all(sql, function (err, rows) {
        callback(err, rows);
    });
};