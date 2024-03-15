# Dataform source repository

## GCP Hosting

* Hosting project: [gde-ihommani](https://console.cloud.google.com/bigquery/dataform?project=gde-ihommani)
* Dataform repository: gcp_insight

| Entity | Value |
|------------------------|------|
| Google Dataform hosting project | [gde-ihommani](https://console.cloud.google.com/bigquery/dataform?project=gde-ihommani) |
| Dataform repository id | [gcp_insight](https://console.cloud.google.com/bigquery/dataform/locations/europe-west1/repositories/gcp_insight/details/workspaces?project=gde-ihommani) |

## Structure

**Tips**: Each subfolders should contain [dataform assertions](https://cloud.google.com/dataform/docs/assertions) to guarantee data quality and serves as living documentation.  
Assertions should at least guarantee the model of the consumed table.  

Pre-provisioned folders:
### [definitions/sources](./definitions/sources)
Contains dataform raw datasource definitions actions along with basic cleaning.  
* **Tips 1**: Expose view for intermediate transformation actions. Using views allows you to protect the schema you expose to intermediate transformations from underlying table's schema change.
* **Tips 2**: Do not hesitate to create subfolders named after entities to contain action definitions

### [intermediates](./definitions/intermediates)
Contains dataform intermediate transformation actions.
* **Tips 1**: Expose view for output transformation actions. Using views allows you to protect the schema you expose to output transformations from underlying table's schema change.
* **Tips 2**: Do not hesitate to create subfolders named after business meaning of the transformation

### [outputs](./definitions/outputs)
Contains final tables/views dataform action definitions.  
Typically the entity we expose to other teams or BI tools.  
* **Tips 1**: Front final tables with views. Using views allows you to protect the schema you expose to clients from underlying table's schema changes.
* **Tips 2**: Do not hesitate to create subfolders named after the exposed data domain

### [includes](./includes)
Common javacript utils/constants to import into the previous folder contained actions.
* **Tips**: [Conding in Dataform with javascript](https://cloud.google.com/dataform/docs/reuse-code-includes).

## Repo organisation best practices
* [Repository size](https://cloud.google.com/dataform/docs/repository-size)
* [Repository structure inspiration](https://cloud.google.com/dataform/docs/structure-repositories)  
