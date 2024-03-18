module.exports = {
    get_broad_category
}

const boad_category = {
    appengine: "App Engine",
    anthos: "Anthos",
    ai_platform: "Vertex AI",
    apigee: "Apigee",
    auto_ml: "AutoML",
    cloud_run: "Cloud Run",
    cloud_sql: "Cloud SQL",
    cloud_vision: "Cloud Vision",
    distributed_cloud: "Google Distributed Cloud",
    workspace: "Google Workspace",
    maps: "Maps",
    memorystore: "Memorystore",
}

function get_broad_category(product_name) {
    return `case
    when starts_with(${product_name}, "AI Platform") then '${boad_category.ai_platform}'
    when starts_with(${product_name}, "App Engine") then '${boad_category.appengine}'
    when starts_with(${product_name}, "Apigee") then '${boad_category.apigee}'
    when starts_with(${product_name}, "Anthos") then '${boad_category.anthos}'
    when starts_with(${product_name}, "AutoML") then '${boad_category.anthos}'
    when starts_with(${product_name}, "Cloud Run") then '${boad_category.cloud_run}'
    when starts_with(${product_name}, "Cloud SQL") then '${boad_category.cloud_sql}'
    when starts_with(${product_name}, "Cloud Vision") then '${boad_category.cloud_sql}'
    when starts_with(${product_name}, "Contact Center") then '${boad_category.contact_center}'
    when starts_with(${product_name}, "Google Distributed Cloud") then '${boad_category.distributed_cloud}'
    when starts_with(${product_name}, "Google Workspace") then '${boad_category.workspace}'
    when starts_with(${product_name}, "Maps") then '${boad_category.workspace}'
    when starts_with(${product_name}, "Memorystore") then '${boad_category.memorystore}'
    else ${product_name}
end`;
}
