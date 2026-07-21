/* ==========================================================================
   INTERACTIVE APP ENGINE: GCP PROFESSIONAL DATA ENGINEER STUDY PLATFORM
   ========================================================================== */

// 1. DATASET: 10 Core Data Analytics Products (with Priyanka Vergadia Sketchnotes)
const PRODUCTS = [
    {
        id: "pubsub",
        name: "Cloud Pub/Sub",
        tagline: "Decoupled asynchronous global messaging",
        category: "INGEST",
        tagClass: "tag-ingest",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706762963543-2UF2YZD7C5GE0EP59Q2R/Chapter04Spread02Figure01.png",
        coreConcepts: "Enterprise-grade real-time ingestion layer. Supports global scales, multiple publishers, and multiple subscribers. Decouples processing pipelines.",
        examGotchas: [
            "At-least-once delivery: Senders may send duplicate messages. Subscribers must be IDEMPOTENT.",
            "Ordering keys: Enable when messages with the same key must be consumed sequentially.",
            "Push subscriptions use webhook POST calls (great for serverless Cloud Run). Pull subscriptions require polling (ideal for heavy GKE/Compute workers)."
        ]
    },
    {
        id: "datastream",
        name: "Datastream",
        tagline: "Serverless Change Data Capture (CDC) and replication",
        category: "INGEST",
        tagClass: "tag-ingest",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763952779-5NTYM83D1PERU0JSYJG0/Chapter04Spread11Figure01.png",
        coreConcepts: "Seamless transactional database logs capture and forwarding (Oracle, MySQL, PostgreSQL) directly into BigQuery or Cloud Storage with minimal performance impact.",
        examGotchas: [
            "Zero-ETL: Deeply integrates with BigQuery, automatically creating target schemas and streaming changes.",
            "Highly tested for on-premise operational databases to GCP migrations.",
            "Supports Private Connectivity (VPC Peering, Reverse Proxy) to secure replication traffic."
        ]
    },
    {
        id: "dataflow",
        name: "Cloud Dataflow",
        tagline: "Unified serverless stream and batch processing (Apache Beam)",
        category: "PROCESS",
        tagClass: "tag-process",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763217357-0RZKOM9A2RRLYRN2VMBL/Chapter04Spread04Figure01.png",
        coreConcepts: "Execute Apache Beam code at scale. Features automatic horizontal autoscaling of worker VMs, dynamic work rebalancing, and exactly-once processing guarantees.",
        examGotchas: [
            "Windowing: Tumbling (fixed), Sliding (overlapping averages), and Session (user session inactivity gaps).",
            "Watermarks calculate event-time lag. Triggers manage when window results get emitted. Allowed Lateness processes out-of-order delayed events.",
            "Dataflow Templates (Standard/Flex) let operators launch pipelines via simple API requests without a developer SDK context."
        ]
    },
    {
        id: "dataproc",
        name: "Cloud Dataproc",
        tagline: "Fully-managed enterprise Apache Hadoop & Spark clusters",
        category: "PROCESS",
        tagClass: "tag-process",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763109547-YHIJKR2XO6Y36EK4W52F/Chapter04Spread05Figure01.png",
        coreConcepts: "Lift-and-shift of legacy Spark/Hadoop/Hive pipelines. Supports ephemeral (short-lived) job clusters, persistent analytical machines, and serverless Spark batches.",
        examGotchas: [
            "Decouple Compute & Storage: Connect Dataproc clusters directly to Cloud Storage (gs://) using the GCS Connector. Do not rely on persistent HDFS local disks.",
            "Cost Optimization: Configure Ephemeral clusters to automatically create, execute, and destroy. Use Preemptible/Spot VMs for secondary worker nodes.",
            "Initialization Actions let you automate Python/Java library setups on cluster boot."
        ]
    },
    {
        id: "datafusion",
        name: "Cloud Data Fusion",
        tagline: "No-code graphical visual ETL integration",
        category: "PROCESS",
        tagClass: "tag-process",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763584958-CCIC55KV2VLKNJQJG902/Chapter04Spread08Figure01.png",
        coreConcepts: "Built on CDAP. Provides a graphical interface containing hundreds of connectors to connect multi-cloud pipelines without writing complex execution code.",
        examGotchas: [
            "Compile and run: Visual configurations are converted into native Apache Spark programs running on ephemeral Dataproc instances.",
            "Lineage: Extremely robust out-of-the-box support for capturing dataset transformation histories and dependencies.",
            "Choose Data Fusion for visual ETL/ELT analysts. Choose Dataflow/Dataproc for code-centric programmers."
        ]
    },
    {
        id: "bigquery",
        name: "BigQuery",
        tagline: "Serverless enterprise analytics data warehouse",
        category: "STORE",
        tagClass: "tag-store",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706762834644-4YY9DQF5VGJYVZT1AE2V/Chapter04Spread07Figure01.png",
        coreConcepts: "High-performance columnar database. Decouples processing (slots) from cold storage. Features built-in SQL machine learning, geo-spatial, and search analysis.",
        examGotchas: [
            "Partitioning: Physically segmenting tables on timestamp, date, or integer columns. Optimizes scan performance and reduces query cost.",
            "Clustering: Sorts data inside partitions based on contents of up to 4 columns. Best on high-cardinality values like user IDs.",
            "BigQuery ML (BQML): Run predictions using simple SQL statements (linear regression, logistic, k-means, tensorflow imports)."
        ]
    },
    {
        id: "composer",
        name: "Cloud Composer",
        tagline: "Workflow orchestration engine based on Apache Airflow",
        category: "ORCHESTRATE",
        tagClass: "tag-orchestrate",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763446473-7Z469RGK3VGMTZKVT4SO/Chapter04Spread10Figure01.png",
        coreConcepts: "Author, schedule, and track workflow graphs (DAGs) in Python. Ideal for stitching together Dataproc runs, BigQuery pipelines, and storage checks.",
        examGotchas: [
            "Composer is an orchestrator, not a heavy worker. Do not process heavy raw files inside Airflow workers; dispatch jobs to BigQuery, Dataflow, or Cloud Run instead.",
            "Secure connections: Integrate with Secret Manager to inject databases passwords, service account certificates, and API tokens safely."
        ]
    },
    {
        id: "dataplex",
        name: "Dataplex & Data Catalog",
        tagline: "Intelligent data mesh fabric and metadata cataloging",
        category: "GOVERN",
        tagClass: "tag-govern",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706763343725-I5HNDMV2RYK89CMFKBDO/Chapter04Spread09Figure01.png",
        coreConcepts: "Manage, unify, and catalog data lakes, warehouses, and databases spanning different projects. Tag assets, audit quality, and authorize unified access rules.",
        examGotchas: [
            "Tag Templates: Standardize schematized catalog tags (e.g., PII flag, owner ID).",
            "Column-Level Security: Link with BigQuery policy tags to hide sensitive data columns (SSNs, credits cards) from standard developer profiles.",
            "Automate data quality scans directly within GCS landing zones or BigQuery analytics tables."
        ]
    },
    {
        id: "looker",
        name: "Looker & Looker Studio",
        tagline: "Modern business intelligence and reporting dashboards",
        category: "VISUALIZE",
        tagClass: "tag-visual",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/65a6226068668c33fe4a4676/1706501452450-07Q20RQTCIHMJCYMQLHY/Chapter04Spread12Figure01.png",
        coreConcepts: "Interactive reporting dashboards. Looker uses LookML (semantic modeling layer) to standardize SQL compilations, while Looker Studio offers lightweight quick charts.",
        examGotchas: [
            "BI Engine: BigQuery's in-memory accelerator. Integrate directly with Looker to speed up analytical dashboards with sub-second queries.",
            "LookML modeling allows you to define dimensions, measures, and schemas in one codebase, eliminating inconsistent dashboard definitions."
        ]
    }
];

// 2. DATASET: 20 High-Fidelity Mock Exam Questions
const QUIZ_QUESTIONS = [
    {
        id: 1,
        domain: "Domain 1: Designing Data Processing Systems",
        question: "LP is designing a real-time IoT pipeline. Millions of connected sensors send temperature records to a Pub/Sub topic. Due to network latency, some messages arrive out-of-order or duplicate. You need to calculate the average temperature of each sensor device every 5 minutes, in 1-minute sliding increments, using event-time. Which architecture should you select?",
        options: [
            "Configure a Pub/Sub push subscription directly to BigQuery. Enable partitioning on ingestion time and write a scheduled SQL query to aggregate averages.",
            "Write an Apache Beam pipeline running on Cloud Dataflow. Read from Pub/Sub, apply Sliding Windows of 5-minute duration with a 1-minute slide, use event-time watermarks, and ensure subscribers are idempotent. Output to BigQuery.",
            "Spin up a persistent Cloud Dataproc cluster running Apache Spark Streaming. Run a spark-submit job querying HDFS local storage for duplicates, aggregating sliding windows every minute.",
            "Connect Pub/Sub directly to Looker Studio. Use Looker's custom visualization engine to filter duplicates and average the sensors' records live on screen."
        ],
        answer: 1, // index 1
        explanation: "Cloud Dataflow (Apache Beam) is the recommended engine for low-latency streaming pipeline transformations such as sliding window calculations based on event-time. Pub/Sub provides high-throughput decoupling, but duplicates can occur due to at-least-once delivery; thus, the downstream subscriber must be idempotent. BigQuery is the ideal serverless target warehouse."
    },
    {
        id: 2,
        domain: "Domain 2: Building Data Processing Systems",
        question: "Your team has an on-premise Apache Spark cluster running daily batch analytics over a 15 TB Hadoop HDFS cluster. You are migrating this workload to Google Cloud. You want to migrate with minimal code modification, minimize operational overhead, and avoid paying for idle compute when no jobs are running. What is the most cost-effective architectural design?",
        options: [
            "Provision a persistent Cloud Dataproc cluster with standard persistent SSD disks. Keep the cluster running 24/7 to replicate the local Hadoop HDFS architecture.",
            "Re-write all Spark jobs as Python scripts running in Cloud Run container jobs, utilizing Firestore to replicate the HDFS metadata structure.",
            "Migrate the 15 TB HDFS data directly to a Cloud Storage bucket. Configure Dataproc to read/write using the GCS Connector (gs://). Execute workloads using ephemeral Dataproc clusters that shut down automatically when the job completes.",
            "Migrate the data to Cloud Bigtable. Write a Cloud Dataflow pipeline to convert the Spark code on-the-fly into Bigtable API transactions."
        ],
        answer: 2,
        explanation: "Decoupling compute and storage is a core GCP architecture principle. By moving HDFS data to Cloud Storage, you can utilize the Dataproc GCS Connector (which matches HDFS APIs). Ephemeral Dataproc clusters can be spin-up quickly to run Spark jobs and deleted immediately after, eliminating costs for idle VMs. This minimizes operational overhead."
    },
    {
        id: 3,
        domain: "Domain 4: Security, Compliance & Governance",
        question: "You run a multi-project GCP landscape. A BigQuery dataset in project-prod contains sensitive credit card transactions. Your security compliance team mandates that no database administrator (DBA) or cloud developer should be able to view raw card numbers. However, specific auditors from the compliance team must have access to run audits. How should you implement this restriction?",
        options: [
            "Encrypt the credit card column using a custom Python script on GCE, and destroy the key. Write a manual SQL view for the auditors.",
            "Apply a Dataplex (Data Catalog) Tag Template to the dataset. Set up BigQuery Policy Tags on the credit card column. Associate a fine-grained reader role to the auditing group, and deny access to all developers and DBAs.",
            "Move the credit card column to a separate private Cloud Storage bucket. Use standard IAM IAM Storage Object Viewer roles on the bucket for the auditors.",
            "Define a VPC Service Controls perimeter around the development project, allowing connections only from compliance IP ranges."
        ],
        answer: 1,
        explanation: "BigQuery integrates with Dataplex (Data Catalog) Policy Tags to enforce Column-Level Security. You can tag sensitive columns (like credit cards) and assign the 'Fine-Grained Reader' IAM role strictly to the authorized auditors, while preventing other profiles (including DBAs) from querying that column."
    },
    {
        id: 4,
        domain: "Domain 1: Designing Data Processing Systems",
        question: "Your enterprise transaction database runs on-premise on Oracle. You are tasked with replicating row-level updates, insertions, and deletions in near-real-time to BigQuery for analytical reporting with minimal operational complexity. What service should you use?",
        options: [
            "Use Cloud Composer to schedule a daily Python script that executes a database dump to CSV, uploads it to GCS, and imports to BigQuery.",
            "Configure Datastream to capture Change Data Capture (CDC) logs from the Oracle source and stream them directly into BigQuery with zero-ETL integration.",
            "Deploy Cloud Data Fusion and create a MapReduce pipeline running every 10 minutes to poll the Oracle database for modified dates.",
            "Deploy a custom Kubernetes pod on GKE running Kafka Connect with a JDBC connector, outputting to Cloud Pub/Sub."
        ],
        answer: 1,
        explanation: "Datastream is a serverless Change Data Capture (CDC) and replication service that supports Oracle, MySQL, and PostgreSQL. Its native 'zero-ETL' integration with BigQuery replicates transactional databases tables automatically without creating complex streaming containers or pipeline code."
    },
    {
        id: 5,
        domain: "Domain 2: Operationalizing Pipelines",
        question: "You are designing a series of daily data pipelines. Pipeline A cleans logs in Cloud Storage; Pipeline B loads the cleaned data into BigQuery; Pipeline C trains a BigQuery ML regression model; Pipeline D refreshes a Looker dashboard. Pipeline C and D must only start after B successfully completes. Which tool should you use to orchestrate this workflow?",
        options: [
            "Write a single shell script containing curl requests and schedule it via crontab on a Compute Engine VM.",
            "Use Cloud Pub/Sub and configure message attributes to trigger Cloud Functions sequentially.",
            "Use Cloud Composer (Apache Airflow) to design a Directed Acyclic Graph (DAG) in Python defining the task execution sequence and dependencies.",
            "Configure a streaming Cloud Dataflow pipeline to continuously listen to Cloud Storage metadata and trigger BQML."
        ],
        answer: 2,
        explanation: "Cloud Composer (based on Apache Airflow) is Google Cloud's premier orchestration tool. It lets you write Directed Acyclic Graphs (DAGs) in Python to define complex, step-by-step tasks, manage dependencies, schedule frequencies, and handle execution failures across different services."
    },
    {
        id: 6,
        domain: "Domain 1: Designing Data Storage",
        question: "An financial services company is building a globally distributed mobile application. Transactions occur in Frankfurt, Tokyo, and New York. The system must guarantee strong relational ACID consistency globally, support SQL queries, and scale horizontally to handle millions of transactions per second. Which database fits these requirements?",
        options: [
            "Cloud SQL with PostgreSQL replica instances deployed in multiple regions.",
            "Cloud Spanner with multi-region configuration.",
            "Cloud Bigtable using SSD storage and multi-cluster routing.",
            "Firestore with global indexing enabled."
        ],
        answer: 1,
        explanation: "Cloud Spanner is a globally scalable, enterprise-grade relational database. It is the only managed service on Google Cloud that provides global horizontal scaling alongside strong relational ACID consistency and standard SQL interface. Cloud SQL cannot scale write transactions horizontally globally."
    },
    {
        id: 7,
        domain: "Domain 4: Security, Compliance & Governance",
        question: "A company wants to ingest financial logs into Cloud Storage. Because of compliance regulations, all uploaded objects must be encrypted with keys owned and rotated by the company. What encryption methodology must you configure?",
        options: [
            "Google-managed encryption keys (GMEK) with automatic rotation.",
            "Customer-Managed Encryption Keys (CMEK) managed via Cloud KMS.",
            "Write a custom encryption module in Golang and run it on GKE before storage.",
            "Configure VPC Service Controls with asymmetric key headers."
        ],
        answer: 1,
        explanation: "Customer-Managed Encryption Keys (CMEK) via Cloud Key Management Service (KMS) are the recommended way to comply with policies requiring user ownership, management, and manual rotation of security keys used across GCP storage systems (including GCS, BigQuery, and Dataproc)."
    },
    {
        id: 8,
        domain: "Domain 1: Designing Data Storage",
        question: "Your IoT application collects time-series telemetry data from 100,000 smart vehicles, generating high-volume streaming inserts (10,000 writes/sec) with sub-10ms single-row read requirements. You need to store this data in a NoSQL database. Which storage service should you choose?",
        options: [
            "BigQuery",
            "Cloud Bigtable",
            "Cloud SQL",
            "Cloud Spanner"
        ],
        answer: 1,
        explanation: "Cloud Bigtable is Google Cloud's ultra-high-throughput, wide-column NoSQL database. It is designed for large-scale analytical workloads, time-series data, and IoT telemetry where sub-10ms read/write latency is required at high ingestion rates."
    },
    {
        id: 9,
        domain: "Domain 2: Operationalizing Pipelines",
        question: "You have a Cloud Dataflow pipeline written in Apache Beam that processes streaming web analytics logs. You want to execute this pipeline on a recurring weekly schedule or trigger it via an API call, but you don't want to maintain a full development SDK environments on your runner machines. What is the recommended strategy?",
        options: [
            "Export the Apache Beam code as a JAR file and run it inside a weekly persistent Dataproc cluster.",
            "Create a Cloud Dataflow Template (Standard or Flex) and trigger it using the gcloud CLI or Cloud Scheduler.",
            "Store the Python pipeline script on GCS and configure Cloud Composer to compile the SDK on every run.",
            "Use Cloud Build to build a new VM image from scratch on every run."
        ],
        answer: 1,
        explanation: "Dataflow Templates (Standard and Flex) allow you to bundle Apache Beam pipelines (including all dependencies, environment configurations, and parameters) into an executable artifact. Operators can trigger templates dynamically via REST APIs, the GCP console, or Cloud Scheduler without needing local development environments."
    },
    {
        id: 10,
        domain: "Domain 4: Security, Compliance & Governance",
        question: "A multi-national bank is migrating sensitive credit card transactions into BigQuery. Security policies require that all logs be automatically scanned on ingestion. If any column contains credit card numbers or social security numbers, they must be masked before being queried. Which GCP service provides this automated data discovery and masking capability?",
        options: [
            "Dataplex Governance Suite",
            "Cloud Data Loss Prevention (DLP) API",
            "VPC Service Controls",
            "Cloud HSM"
        ],
        answer: 1,
        explanation: "The Cloud Data Loss Prevention (DLP) API is designed to discover, classify, and redact sensitive information (like SSNs, credit cards, emails) in structured and unstructured datasets across GCS, BigQuery, or streaming applications."
    },
    {
        id: 11,
        domain: "Domain 1: Storage Optimization",
        question: "LP is writing high-performance SQL queries in BigQuery. The main table `transactions` contains 500 million rows and is regularly queried on the column `transaction_date` and filtered on the column `store_id`. To optimize query performance and reduce the volume of data scanned (minimizing active slots costs), how should the table be designed?",
        options: [
            "Cluster on `transaction_date` and partition on `store_id`.",
            "Partition on `transaction_date` and cluster on `store_id`.",
            "Partition on `store_id` only.",
            "Create an authorized view that copies only active rows to a secondary table."
        ],
        answer: 1,
        explanation: "Partitioning segment tables physically based on date/time columns. When querying on that date, BigQuery scans only the matching partition, reducing query scan costs. Clustering co-locates related row data inside partitions based on card/store IDs, optimizing filtering within those date boundaries. Partition first, then cluster."
    },
    {
        id: 12,
        domain: "Domain 3: Machine Learning & Analytics",
        question: "A data scientist wants to quickly train a customer churn logistic regression model using data stored in a massive 2 TB BigQuery dataset. They want to prototype this model immediately using simple SQL syntax without exporting data to Python or managing training servers. What is the correct solution?",
        options: [
            "Export the table as CSVs to GCS, train on a local Jupyter Notebook, and load coefficients back into BigQuery.",
            "Utilize BigQuery ML (BQML) to create and train the model directly within BigQuery using standard SQL.",
            "Deploy a GKE pod running Spark MLlib, connect to BigQuery via JDBC, and run training.",
            "Write a custom Cloud Dataflow pipeline utilizing TensorFlow IO to train on a serverless GPU worker pool."
        ],
        answer: 1,
        explanation: "BigQuery ML (BQML) enables data scientists and SQL developers to build, train, evaluate, and run predictions on machine learning models (regression, classification, clustering, time-series) directly inside BigQuery using standard SQL, avoiding the latency and overhead of exporting massive data sets."
    },
    {
        id: 13,
        domain: "Domain 1: Storage Optimization",
        question: "You want to accelerate Looker dashboards connected to a highly queried BigQuery dataset. The dashboard currently experiences 2-3 second latency due to raw scanning. You want to achieve sub-second response times for dashboard interactions without paying for persistent caching instances. What should you configure?",
        options: [
            "Re-write Looker queries as pre-built materialized views.",
            "Enable BigQuery BI Engine to cache the queried tables in-memory.",
            "Migrate active Looker tables into Cloud Memorystore (Redis).",
            "Upgrade your Looker server instances to high-memory VMs."
        ],
        answer: 1,
        explanation: "BigQuery BI Engine is an in-memory analysis service. It integrates natively with Looker and Looker Studio to cache queried datasets in-memory, accelerating dashboards with sub-second response times and minimizing query slots scanning costs."
    },
    {
        id: 14,
        domain: "Domain 2: Operationalizing Pipelines",
        question: "Your team is running a Spark pipeline on Cloud Dataproc. The pipeline runs hourly batch transformations. You want to run this pipeline without configuring, tuning, managing, or scaling Dataproc virtual machine clusters. Which execution mode should you select?",
        options: [
            "Create a persistent Dataproc cluster and configure heavy cron jobs.",
            "Deploy Spark jobs using Dataproc Serverless.",
            "Compile Spark jobs to run directly inside Cloud SQL databases.",
            "Use Cloud Composer and execute tasks inside GKE pods using KubernetesExecutor."
        ],
        answer: 1,
        explanation: "Dataproc Serverless allows you to run Apache Spark batch workloads without having to provision, configure, scale, or manage virtual machine clusters. You simply specify the Spark job and GCP manages the underlying compute infrastructure dynamically."
    },
    {
        id: 15,
        domain: "Domain 2: Building Data Processing Systems",
        question: "Your Cloud Dataflow streaming pipeline handles credit card transactions. You must calculate fraud metrics using a sliding window. However, some transaction events are delayed due to network drops. You want to include events that arrive up to 30 minutes late in the sliding window calculations. What should you configure in your Apache Beam pipeline?",
        options: [
            "Set the window to a Fixed Window and use a high-timeout Pub/Sub subscription.",
            "Apply the .withAllowedLateness(Duration.standardMinutes(30)) method and define appropriate triggers on the window.",
            "Deploy a custom Spark streaming job on Dataproc to save late events in GCS.",
            "Configure a Composer DAG to poll and append late logs every 30 minutes."
        ],
        answer: 1,
        explanation: "In Apache Beam, 'Allowed Lateness' (using `.withAllowedLateness()`) allows late-arriving events (delayed relative to the watermark) to be incorporated into window aggregates. You must also configure 'Triggers' to determine when these updated window calculations are emitted."
    },
    {
        id: 16,
        domain: "Domain 4: Security, Compliance & Governance",
        question: "You want to prevent sensitive corporate financial logs inside BigQuery from being exfiltrated or copied outside of your Google Cloud organization, even if a user has valid IAM read permissions. What security tool should you deploy?",
        options: [
            "Enable Customer-Managed Encryption Keys on BigQuery tables.",
            "Configure a VPC Service Controls perimeter around your production projects.",
            "Set up strict IAM Custom Roles on the project folder.",
            "Install a third-party antivirus agent inside BigQuery storage."
        ],
        answer: 1,
        explanation: "VPC Service Controls (VPC-SC) creates a security perimeter around Google Cloud resources. It restricts data movement (like copying BigQuery data or Cloud Storage buckets) to outside the perimeter, preventing data exfiltration even if IAM policies are compromised."
    },
    {
        id: 17,
        domain: "Domain 1: Storage Optimization",
        question: "Your data pipeline loads log files from on-premise servers into a Cloud Storage landing zone bucket. These logs are batch processed once a day. After the batch completes, you want to automatically transition raw logs to a cheaper archival tier and delete them after 365 days to minimize costs. What should you configure?",
        options: [
            "Create a scheduled Cloud Composer DAG to execute delete queries daily.",
            "Configure a Cloud Storage Lifecycle Management policy on the bucket with transition and delete rules.",
            "Enable Cloud Storage Object Versioning and set custom quotas.",
            "Set up a Cloud DLP job to destroy old files based on metadata timestamps."
        ],
        answer: 1,
        explanation: "Cloud Storage Object Lifecycle Management allows you to define rules that automatically transition objects to cheaper storage classes (e.g., Nearline, Coldline, Archive) or delete them permanently based on age, creation date, or version status."
    },
    {
        id: 18,
        domain: "Domain 2: Operationalizing Pipelines",
        question: "You are designing a high-throughput Cloud Dataflow pipeline to read weblogs from Cloud Pub/Sub and stream them to BigQuery. The pipeline must handle sudden spikes in traffic during marketing campaigns. What is the recommended strategy to ensure the pipeline scales dynamically?",
        options: [
            "Configure Cloud Scheduler to scale up worker VMs manually before each campaign.",
            "Allow Dataflow's native autoscaling to scale worker VMs dynamically, and utilize streaming engine capabilities.",
            "Deploy your pipeline on a persistent Dataproc cluster running Flink.",
            "Increase the memory size of your Pub/Sub topic partition."
        ],
        answer: 1,
        explanation: "Cloud Dataflow features native streaming autoscaling. It dynamically adds or removes worker VMs based on queue backlog, CPU utilization, and processing throughput, allowing it to handle volatile spikes in streaming traffic automatically without manual scaling scripts."
    },
    {
        id: 19,
        domain: "Domain 4: Security, Compliance & Governance",
        question: "A team of data analysts is writing custom SQL queries against a shared BigQuery database. You want them to be able to query tables and view results without granting them read permissions to view the raw tables. What should you create?",
        options: [
            "An Authorized View and share it with the analysts, granting them access to the view while withholding access to the dataset.",
            "A copy of the raw dataset in a separate development project.",
            "Set up column-level policy tags for all raw columns.",
            "Write a custom proxy server in Cloud Run to fetch and filter rows."
        ],
        answer: 0, // index 0
        explanation: "Authorized Views let you share query results with specific users or groups without giving them direct access to the underlying raw tables. This is a secure way to delegate data access in BigQuery."
    },
    {
        id: 20,
        domain: "Domain 2: Building Pipelines",
        question: "You are designing a visual data transformation pipeline in Cloud Data Fusion. You want to audit and trace the exact lineage of your data, visualizing how a specific column was modified and where it was moved throughout your enterprise. What capability of Data Fusion should you utilize?",
        options: [
            "Use the built-in Metadata and Lineage tracing panel in the Data Fusion UI.",
            "Integrate Data Fusion with Cloud Logging and search for BigQuery tables.",
            "Write a custom Python script inside Dataproc to reconstruct SQL histories.",
            "Looker Studio metadata lineage connector."
        ],
        answer: 0,
        explanation: "Cloud Data Fusion features built-in support for capturing and visualizing data lineage. It tracks datasets and fields as they move through different pipelines and transformations, helping you trace compliance and perform impact analysis."
    },
    {
        id: 21,
        domain: "Domain 5: Maintaining & Automating Workloads (Capacity Management)",
        question: "LP is designing the BigQuery capacity and pricing structure for a large-scale enterprise with multiple business departments. The finance analytics team requires dedicated, guaranteed processing performance (slots) for critical regulatory compliance reports, while other research and analyst queries should scale dynamically on demand up to a maximum cost threshold. How should you design this workload structure?",
        options: [
            "Use BigQuery flat-rate slots and manual reservation pooling. Set up an asymmetric routing proxy to queue incoming analyst SQL jobs.",
            "Purchase BigQuery Editions (Enterprise or Enterprise Plus) and set up Reservations. Create a dedicated reservation with a baseline slot assignment for the finance team, and a separate reservation with autoscale slots enabled for general analysts.",
            "Deploy standard on-demand pricing across all projects. Enable a strict Cloud Billing budget alert to terminate queries when budgets are exceeded.",
            "Migrate active finance data to AlloyDB and general analyst tables to GCS, using federated tables to query them on the fly."
        ],
        answer: 1,
        explanation: "BigQuery Editions (Standard, Enterprise, Enterprise Plus) support capacity management through Reservations. By setting up a dedicated reservation with a baseline slot configuration (guaranteeing performance) for the finance team, and another reservation with autoscale slots for general analysts, you ensure critical reports always run instantly while optimizing and controlling general cost envelopes."
    },
    {
        id: 22,
        domain: "Domain 4: Preparing Data for AI & ML (Unstructured Data & RAG)",
        question: "A financial organization has accumulated 5 million scanned PDF transaction receipts and contract sheets in a secure Cloud Storage bucket. The risk compliance team wants to generate vector embeddings for these raw documents and run Retrieval-Augmented Generation (RAG) search queries over them inside their analytics data warehouse. They want to execute this pipeline using standard SQL. What is the recommended technical workflow?",
        options: [
            "Download PDFs to an on-premise server, run a local Python PDF parser, upload raw text to a Firestore database, and index columns manually.",
            "Configure a Dataflow pipeline to read the bucket, call a third-party REST API container, write embeddings to Cloud SQL, and execute federated queries.",
            "Create a BigQuery Cloud Resource connection. Define a BigQuery Object Table pointing to the Cloud Storage bucket. Use BigQuery ML to call the text-embedding model from Vertex AI (using ML.GENERATE_EMBEDDING) and store vectors directly in BigQuery tables.",
            "Move all PDFs into BigQuery directly using the standard CSV loader, then run a regex lookup over binary formats."
        ],
        answer: 2,
        explanation: "To analyze unstructured data (like PDFs, images, or audio) in GCS with SQL, you can use BigQuery Object Tables (supported by a Cloud Resource Connection). You can then use BigQuery ML (BQML) functions like `ML.GENERATE_EMBEDDING` to call Vertex AI LLM models to generate vectors, store them in BigQuery, and run vector search queries directly within your data warehouse."
    },
    {
        id: 23,
        domain: "Domain 3: Selecting Storage Systems (Relational Scale & Columnar OLAP)",
        question: "An enterprise payment processor is deploying an online relational database that must support heavy transactional writes (OLTP) with high-availability. However, they also need to run massive, complex, real-time analytical reporting queries (OLAP) directly on the active transaction schemas without lagging or slowing down the payment gateway. Which managed database is engineered to handle both requirements simultaneously?",
        options: [
            "Cloud SQL with PostgreSQL Read Replicas.",
            "AlloyDB for PostgreSQL, utilizing its integrated in-memory columnar engine.",
            "Cloud Bigtable, configuring dual-cluster SSD replication.",
            "Cloud Spanner with global single-region node scale pools."
        ],
        answer: 1,
        explanation: "AlloyDB is Google's fully-managed PostgreSQL-compatible database designed for enterprise transactional (OLTP) and analytical (OLAP) workloads. It features an innovative 'columnar engine' that automatically copies and accelerates active transactional schemas in-memory in columnar format, letting complex analytical queries run instantly without degrading write throughput."
    },
    {
        id: 24,
        domain: "Domain 4: Security, Compliance & Sharing (Cross-Organization Live Sharing)",
        question: "LP wants to share clean, aggregated customer demographic tables from a production BigQuery dataset with 50 external retail vendor organizations. Because of regulatory agreements, the vendors must always query the most up-to-date transaction records live. You must do this without copying or replicating datasets, maintaining SFTP file dump feeds, or managing raw IAM policy rules for 50 distinct external partner projects. What tool is designed for this task?",
        options: [
            "Configure Cloud Storage Object Lifecycle rules to export CSV tables daily and email them to partners.",
            "Deploy Cloud SQL with cross-organization database sync links.",
            "Create a BigQuery Analytics Hub data exchange, publish the demographic dataset as a listing, and let authorized external vendors subscribe and query the shared tables live in place.",
            "Write a custom proxy server in Cloud Run that authenticates external client requests and runs queries on their behalf."
        ],
        answer: 2,
        explanation: "BigQuery Analytics Hub is built on top of BigQuery's data sharing mechanism. It lets you create secure, managed data exchanges within or across organizations to publish and subscribe to live, read-only datasets without any data copying, pipelines, or manual IAM overhead."
    },
    {
        id: 25,
        domain: "Domain 2: Deploying & Operationalizing Pipelines (Serverless Workflow Orchestration)",
        question: "You are building a daily data ingestion workflow that triggers a serverless Cloud Run data loader container, waits for completion, runs a BigQuery SQL consolidation query, and shoots an email notification. You want to orchestrate this lightweight, simple HTTP-centric pipeline without incurring the operational overhead, cluster initialization delays, and high resource costs of running a persistent Kubernetes-based Cloud Composer (Airflow) environment. What should you use?",
        options: [
            "Write a cron script running on a persistent GCE VM instance.",
            "Use Cloud Workflows to define and execute the orchestrations using YAML/JSON.",
            "Deploy an ephemeral Dataproc cluster running custom Bash execution nodes.",
            "Use Cloud Dataflow's flex templates to loop execution schedules continuously."
        ],
        answer: 1,
        explanation: "Cloud Workflows is a serverless, low-cost, low-latency orchestrator for HTTP-based services and API pipelines. It is the perfect alternative to Cloud Composer (Apache Airflow) for orchestrating lightweight serverless services (like Cloud Run, BigQuery, or Cloud Functions) without the operational footprint or overhead costs of GKE clusters."
    },
    {
        id: 26,
        domain: "Domain 1: Designing Data Processing Systems (Case Study: Flowing Retail)",
        question: "As part of the 'Flowing Retail' transformation, you are designing a database architecture for a global order ledger and live inventory tracking system. The system must support horizontal scaling across multiple regions, enforce relational schemas, and guarantee absolute global ACID consistency to prevent inventory double-bookings during massive peak sales events. Which database should you select?",
        options: [
            "Cloud SQL (PostgreSQL with read replicas)",
            "Cloud Spanner",
            "Cloud Bigtable",
            "Firestore (Datastore Mode)"
        ],
        answer: 1,
        explanation: "Cloud Spanner is the only Google Cloud database that provides global horizontal scaling alongside strict, multi-region ACID transactional consistency and relational schemas. Cloud SQL cannot scale writes horizontally across regions, while Bigtable and Firestore do not offer the relational schema and multi-table transactional guarantees needed for a global order ledger."
    },
    {
        id: 27,
        domain: "Domain 2: Deploying & Operationalizing Pipelines (Case Study: Flowing Retail)",
        question: "Your legacy point-of-sale (POS) systems write transactional sales data to regional on-premises MySQL databases. For the 'Flowing Retail' pipeline, you need to replicate these transactions in near-real-time to BigQuery for central analytical dashboarding. The solution must be serverless, require minimal custom ETL code, and scale automatically to handle holiday sales traffic. What should you implement?",
        options: [
            "An ephemeral Dataproc cluster that runs Spark SQL jobs every 5 minutes.",
            "Cloud Datastream configured with MySQL source and BigQuery target for direct CDC replication.",
            "A Cloud Composer DAG that triggers Sqoop import scripts hourly.",
            "A custom Python script on GCE that queries MySQL tables using timestamps and publishes to Pub/Sub."
        ],
        answer: 1,
        explanation: "Cloud Datastream is a serverless Change Data Capture (CDC) and replication service that natively integrates with BigQuery. Setting up Datastream to replicate MySQL transactions directly to BigQuery provides a low-latency, zero-ETL, and completely serverless data replication pipeline with no custom code or scheduling overhead."
    },
    {
        id: 28,
        domain: "Domain 1: Designing Data Processing Systems (Case Study: Earthquake Sensor Network)",
        question: "The 'Earthquake Sensor Network' streams continuous high-frequency acceleration metrics from 50,000 IoT sensors, yielding millions of transactional data writes per second. You need a data store that provides sub-millisecond, massive-scale write throughput and supports sequential key-range scans to retrieve the most recent telemetry for any given sensor. Which GCP service is best suited?",
        options: [
            "Cloud SQL for PostgreSQL",
            "Cloud Spanner",
            "Cloud Bigtable",
            "Cloud Storage (GCS)"
        ],
        answer: 2,
        explanation: "Cloud Bigtable is Google's NoSQL wide-column database optimized for high-throughput, low-latency, flat time-series and sensor workloads. It scales linearly to handle millions of writes per second and natively supports sequential single-key scans (by ordering rows lexicographically), making it perfect for raw IoT sensor streams."
    },
    {
        id: 29,
        domain: "Domain 4: Security, Compliance & Governance (Case Study: Earthquake Sensor Network)",
        question: "In the 'Earthquake Sensor Network' system, millions of seismic metrics are written sequentially to Cloud Bigtable. To prevent tablet hotspotting and ensure rapid lookups of the latest records for a specific sensor station, how should you design the Bigtable row key?",
        options: [
            "timestamp#station_id",
            "station_id#timestamp_reversed",
            "station_id#timestamp",
            "reversed_timestamp#station_id"
        ],
        answer: 1,
        explanation: "A non-hotspotting row key prefix should be a high-entropy identifier like 'station_id', which distributes writes evenly across different Bigtable tablet servers. Appending a 'timestamp_reversed' (computed as Long.MAX_VALUE - timestamp) ensures that the most recent records lexicographically sort to the top, allowing low-latency scans of the latest metrics for a single station."
    },
    {
        id: 30,
        domain: "Domain 2: Deploying & Operationalizing Pipelines (Case Study: Earthquake Sensor Network)",
        question: "Remote seismic stations in the 'Earthquake Sensor Network' have highly unstable cellular connectivity, causing sensor telemetry payloads to arrive up to several minutes late. Your Cloud Dataflow pipeline uses 10-second sliding windows to compute average vibration amplitude. You want to make sure late-arriving payloads are included in their respective sliding event-time windows rather than being instantly dropped. What should you configure?",
        options: [
            "Increase Pub/Sub subscription retention time to 7 days.",
            "Use event-time watermarking in Dataflow and configure the window with 'withAllowedLateness' to process delayed data.",
            "Transition the Dataflow pipeline from event-time windows to processing-time windows.",
            "Direct late data to a GCS dead-letter queue and run a custom hourly Dataproc job to merge results."
        ],
        answer: 1,
        explanation: "In Cloud Dataflow (Apache Beam), event-time windowing uses watermarks to track progress. By configuring 'withAllowedLateness', Dataflow will keep the event-time windows active for the specified late duration, allowing late-arriving data to update the existing sliding window results rather than being discarded immediately."
    }
];

// 3. CORE STATE MANAGEMENTS
let appState = {
    viewedSketchnotes: JSON.parse(localStorage.getItem('pde_viewed_sketchnotes')) || [],
    highScore: parseInt(localStorage.getItem('pde_high_score')) || 0,
    currentQuestionIndex: 0,
    quizScore: 0,
    quizAnswers: [], // stores user history
    selectedOptionIndex: null,
    quizStartTime: null,
    timerInterval: null
};

// 4. ROUTER / TAB TOGGLER
function initTabRouter() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // Toggle sidebar tabs state
            navItems.forEach(nav => {
                if (nav.getAttribute('data-target') === targetId) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
            
            // Toggle active content views
            tabContents.forEach(tab => tab.classList.remove('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add('active');
            
            // Special initialization actions on tab change
            if (targetId === 'sketchnotes') {
                renderSketchnoteGrid();
            } else if (targetId === 'progress') {
                renderProgressAndMilestones();
            } else if (targetId === 'dashboard') {
                updateDashboardStats();
            }
        });
    });
}

// 5. SKETCHNOTE GRID RENDERER
function renderSketchnoteGrid() {
    const container = document.getElementById('sketchnote-cards-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    PRODUCTS.forEach(product => {
        const isExplored = appState.viewedSketchnotes.includes(product.id);
        const card = document.createElement('article');
        card.className = 'sketchnote-card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <div class="card-body">
                <div>
                    <div class="card-badge-row">
                        <span class="tag ${product.tagClass}">${product.category}</span>
                        <div class="status-badge ${isExplored ? 'explored' : 'unexplored'}">
                            <i data-lucide="${isExplored ? 'check-circle' : 'circle'}"></i>
                            <span>${isExplored ? 'Explored' : 'Unexplored'}</span>
                        </div>
                    </div>
                    <h3>${product.name}</h3>
                    <p>${product.tagline}</p>
                </div>
            </div>
            <div class="card-footer">
                <span>View Details & Sketch</span>
                <i data-lucide="arrow-right"></i>
            </div>
        `;
        
        card.addEventListener('click', () => openSketchnoteModal(product));
        container.appendChild(card);
    });
    
    lucide.createIcons();
}

// 6. VISUAL DETAILS MODAL (CAROUSEL OVERLAY)
const modal = document.getElementById('sketchnote-modal');
const modalClose = document.getElementById('modal-close');
const btnMarkExplored = document.getElementById('btn-mark-explored');
let activeModalProductId = null;

function openSketchnoteModal(product) {
    if (!modal) return;
    
    activeModalProductId = product.id;
    
    // Fill details
    document.getElementById('modal-sketch-image').src = product.imageUrl;
    document.getElementById('modal-sketch-image').alt = product.name;
    document.getElementById('modal-product-name').innerText = product.name;
    document.getElementById('modal-product-tagline').innerText = product.tagline;
    document.getElementById('modal-core-concepts').innerText = product.coreConcepts;
    
    const tagEl = document.getElementById('modal-product-tag');
    tagEl.className = `tag ${product.tagClass}`;
    tagEl.innerText = product.category;
    
    // Fill gotchas list
    const gotchasContainer = document.getElementById('modal-exam-gotchas');
    gotchasContainer.innerHTML = '';
    (product.examGotchas || []).forEach(gotcha => {
        const li = document.createElement('li');
        li.innerText = gotcha;
        gotchasContainer.appendChild(li);
    });
    
    // Toggle Button state based on exploration history
    const isExplored = appState.viewedSketchnotes.includes(product.id);
    if (isExplored) {
        btnMarkExplored.innerText = "Explored ✓";
        btnMarkExplored.classList.remove('btn-primary');
        btnMarkExplored.classList.add('btn-secondary');
        btnMarkExplored.disabled = true;
    } else {
        btnMarkExplored.innerText = "Mark as Explored";
        btnMarkExplored.classList.add('btn-primary');
        btnMarkExplored.classList.remove('btn-secondary');
        btnMarkExplored.disabled = false;
    }
    
    modal.classList.add('active');
    lucide.createIcons();
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (btnMarkExplored) {
    btnMarkExplored.addEventListener('click', () => {
        if (!activeModalProductId) return;
        
        if (!appState.viewedSketchnotes.includes(activeModalProductId)) {
            appState.viewedSketchnotes.push(activeModalProductId);
            localStorage.setItem('pde_viewed_sketchnotes', JSON.stringify(appState.viewedSketchnotes));
            
            // Update UI State
            btnMarkExplored.innerText = "Explored ✓";
            btnMarkExplored.classList.remove('btn-primary');
            btnMarkExplored.classList.add('btn-secondary');
            btnMarkExplored.disabled = true;
            
            renderSketchnoteGrid();
            updateDashboardStats();
            
            // Check milestones
            if (appState.viewedSketchnotes.length === PRODUCTS.length) {
                document.getElementById('m1').checked = true;
                saveMilestones();
            }
        }
    });
}

// 7. DASHBOARD LOGIC (STAT TRACKERS)
function updateDashboardStats() {
    const exploredText = document.getElementById('viewed-count');
    const scoreText = document.getElementById('quiz-high-score');
    const statusText = document.getElementById('study-streak');
    
    if (exploredText) exploredText.innerText = `${appState.viewedSketchnotes.length} / ${PRODUCTS.length}`;
    if (scoreText) scoreText.innerText = `${appState.highScore}%`;

    if (statusText) {
        const completedLabs = JSON.parse(localStorage.getItem('pde_completed_labs')) || {};
        const completedCount = Object.values(completedLabs).filter(Boolean).length;
        statusText.innerText = completedCount > 0 ? `${completedCount} / 5 Labs` : 'Active';
    }
}

// 8. INTERACTIVE MOCK EXAM ENGINE
const btnStartQuiz = document.getElementById('btn-start-quiz');
const quizStartScreen = document.getElementById('quiz-start-screen');
const quizActiveScreen = document.getElementById('quiz-active-screen');
const quizSummaryScreen = document.getElementById('quiz-summary-screen');

const currentQNumEl = document.getElementById('current-q-num');
const totalQNumEl = document.getElementById('total-q-num');
const progressBarEl = document.getElementById('quiz-progress-bar');
const timerEl = document.getElementById('quiz-time');
const qDomainEl = document.getElementById('question-domain');
const qTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('quiz-options-container');

const btnSubmitAnswer = document.getElementById('btn-submit-answer');
const btnNextQuestion = document.getElementById('btn-next-question');
const explanationBox = document.getElementById('quiz-explanation-box');
const explanationTitle = document.getElementById('explanation-title');
const explanationText = document.getElementById('explanation-text');
const explanationIcon = document.getElementById('explanation-icon');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    let elapsedSeconds = 0;
    appState.quizStartTime = Date.now();
    if (appState.timerInterval) clearInterval(appState.timerInterval);
    
    appState.timerInterval = setInterval(() => {
        elapsedSeconds++;
        if (timerEl) timerEl.innerText = formatTime(elapsedSeconds);
    }, 1000);
}

function stopTimer() {
    if (appState.timerInterval) clearInterval(appState.timerInterval);
}

if (btnStartQuiz) {
    btnStartQuiz.addEventListener('click', startQuiz);
}

function startQuiz() {
    appState.currentQuestionIndex = 0;
    appState.quizScore = 0;
    appState.quizAnswers = [];
    appState.selectedOptionIndex = null;
    
    quizStartScreen.classList.remove('active');
    quizSummaryScreen.classList.remove('active');
    quizActiveScreen.classList.add('active');
    
    if (totalQNumEl) totalQNumEl.innerText = QUIZ_QUESTIONS.length;
    
    startTimer();
    renderQuestion();
}

function renderQuestion() {
    const q = QUIZ_QUESTIONS[appState.currentQuestionIndex];
    if (!q) return;
    
    appState.selectedOptionIndex = null;
    btnSubmitAnswer.disabled = true;
    btnSubmitAnswer.style.display = 'inline-flex';
    btnNextQuestion.style.display = 'none';
    explanationBox.style.display = 'none';
    
    if (currentQNumEl) currentQNumEl.innerText = appState.currentQuestionIndex + 1;
    if (qDomainEl) qDomainEl.innerText = q.domain;
    if (qTextEl) qTextEl.innerText = q.question;
    
    // Update progress bar
    const progressPercent = ((appState.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
    if (progressBarEl) progressBarEl.style.width = `${progressPercent}%`;
    
    // Render options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-text">${opt}</div>
        `;
        
        div.addEventListener('click', () => {
            // Only allow selection if answer hasn't been submitted yet
            if (btnSubmitAnswer.style.display !== 'none') {
                const siblingOptions = optionsContainer.querySelectorAll('.option-item');
                siblingOptions.forEach(sib => sib.classList.remove('selected'));
                div.classList.add('selected');
                appState.selectedOptionIndex = index;
                btnSubmitAnswer.disabled = false;
            }
        });
        
        optionsContainer.appendChild(div);
    });
}

if (btnSubmitAnswer) {
    btnSubmitAnswer.addEventListener('click', submitAnswer);
}

function submitAnswer() {
    if (appState.selectedOptionIndex === null) return;
    
    const q = QUIZ_QUESTIONS[appState.currentQuestionIndex];
    const isCorrect = appState.selectedOptionIndex === q.answer;
    
    if (isCorrect) appState.quizScore++;
    appState.quizAnswers.push(isCorrect);
    
    // Style correct/incorrect cards
    const optionItems = optionsContainer.querySelectorAll('.option-item');
    optionItems.forEach((item, index) => {
        item.classList.remove('selected');
        if (index === q.answer) {
            item.classList.add('correct');
        } else if (index === appState.selectedOptionIndex && !isCorrect) {
            item.classList.add('incorrect');
        }
    });
    
    // Display detailed feedback explanation
    explanationBox.style.display = 'block';
    if (isCorrect) {
        explanationTitle.innerText = "Correct! Spot-on Architectural Logic.";
        explanationIcon.setAttribute('data-lucide', 'check-circle');
        explanationIcon.style.color = 'var(--process-green)';
    } else {
        explanationTitle.innerText = "Incorrect Option. Let's look at the correct design:";
        explanationIcon.setAttribute('data-lucide', 'alert-circle');
        explanationIcon.style.color = 'var(--error)';
    }
    
    explanationText.innerText = q.explanation;
    
    btnSubmitAnswer.style.display = 'none';
    btnNextQuestion.style.display = 'inline-flex';
    lucide.createIcons();
}

if (btnNextQuestion) {
    btnNextQuestion.addEventListener('click', () => {
        appState.currentQuestionIndex++;
        if (appState.currentQuestionIndex < QUIZ_QUESTIONS.length) {
            renderQuestion();
        } else {
            finishQuiz();
        }
    });
}

function finishQuiz() {
    stopTimer();
    quizActiveScreen.classList.remove('active');
    quizSummaryScreen.classList.add('active');
    
    const scorePercent = Math.round((appState.quizScore / QUIZ_QUESTIONS.length) * 100);
    
    // Update Score graphics
    document.getElementById('result-score-percent').innerText = `${scorePercent}%`;
    document.getElementById('result-correct-count').innerText = appState.quizScore;
    document.getElementById('result-total-count').innerText = QUIZ_QUESTIONS.length;
    
    // Update circle SVG path dashoffset
    const circle = document.getElementById('result-radial-progress');
    const circumference = 2 * Math.PI * 45; // 282.74
    const offset = circumference - (scorePercent / 100) * circumference;
    if (circle) circle.style.strokeDashoffset = offset;
    
    // High score check
    if (scorePercent > appState.highScore) {
        appState.highScore = scorePercent;
        localStorage.setItem('pde_high_score', appState.highScore);
        updateDashboardStats();
    }
    
    // Passing score criteria (70% standard)
    const titleEl = document.getElementById('result-status-title');
    const descEl = document.getElementById('result-status-desc');
    
    if (scorePercent >= 70) {
        titleEl.innerText = "Congratulations, Architect! 🎉";
        titleEl.style.color = 'var(--process-green)';
        descEl.innerText = `Outstanding! You have scored ${scorePercent}%. Your understanding of GCP pipelines, storage choices, and operational governance is complete.`;
        
        // Update weekly milestones
        document.getElementById('m5').checked = true;
        saveMilestones();
    } else {
        titleEl.innerText = "Keep Preparing! 📚";
        titleEl.style.color = 'var(--orchestrate-orange)';
        descEl.innerText = `You scored ${scorePercent}%. A score of 70% or higher is required to clear the mock exam. Review Priyanka Vergadia's visual sketchnotes to strengthen your concepts.`;
    }
    
    lucide.createIcons();
}

// Restart Quiz Button
const btnRestartQuiz = document.getElementById('btn-restart-quiz');
if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener('click', startQuiz);
}

// Redirect to Sketchnotes from quiz result
const btnViewSketchesResults = document.getElementById('btn-view-sketches-results');
if (btnViewSketchesResults) {
    btnViewSketchesResults.addEventListener('click', () => {
        const sketchNavItem = document.querySelector('.nav-item[data-target="sketchnotes"]');
        if (sketchNavItem) sketchNavItem.click();
    });
}

// 9. STUDY PROGRESS & MILESTONES
function saveMilestones() {
    const milestoneState = {
        m1: document.getElementById('m1').checked,
        m2: document.getElementById('m2').checked,
        m3: document.getElementById('m3').checked,
        m4: document.getElementById('m4').checked,
        m5: document.getElementById('m5').checked,
    };
    localStorage.setItem('pde_study_milestones', JSON.stringify(milestoneState));
}

function loadMilestones() {
    const saved = JSON.parse(localStorage.getItem('pde_study_milestones'));
    if (saved) {
        document.getElementById('m1').checked = saved.m1 || false;
        document.getElementById('m2').checked = saved.m2 || false;
        document.getElementById('m3').checked = saved.m3 || false;
        document.getElementById('m4').checked = saved.m4 || false;
        document.getElementById('m5').checked = saved.m5 || false;
    }
}

function renderProgressAndMilestones() {
    loadMilestones();
}

// Listen to checkbox changes on the milestones
document.querySelectorAll('.milestone-checkbox').forEach(cb => {
    cb.addEventListener('change', saveMilestones);
});

// Hands-On Practice Labs Checklist State Management
function initLabsCheckboxes() {
    const labCheckboxes = document.querySelectorAll('.lab-checkbox');
    const completedLabs = JSON.parse(localStorage.getItem('pde_completed_labs')) || {};
    
    labCheckboxes.forEach(cb => {
        // Load saved state
        if (completedLabs[cb.id]) {
            cb.checked = true;
        }
        
        // Listen to change events
        cb.addEventListener('change', () => {
            const currentSaved = JSON.parse(localStorage.getItem('pde_completed_labs')) || {};
            currentSaved[cb.id] = cb.checked;
            localStorage.setItem('pde_completed_labs', JSON.stringify(currentSaved));
            
            // Check if completing labs can update or affect overall progress stats
            updateDashboardStats();
        });
    });
}

// Fast Study Guide Card Clicks (Dashboard)
const btnQuickPubsub = document.getElementById('btn-quick-pubsub');
const btnQuickDataflow = document.getElementById('btn-quick-dataflow');
const btnQuickBigquery = document.getElementById('btn-quick-bigquery');

if (btnQuickPubsub) {
    btnQuickPubsub.addEventListener('click', () => {
        openSketchnoteModal(PRODUCTS.find(p => p.id === 'pubsub'));
    });
}
if (btnQuickDataflow) {
    btnQuickDataflow.addEventListener('click', () => {
        openSketchnoteModal(PRODUCTS.find(p => p.id === 'dataflow'));
    });
}
if (btnQuickBigquery) {
    btnQuickBigquery.addEventListener('click', () => {
        openSketchnoteModal(PRODUCTS.find(p => p.id === 'bigquery'));
    });
}

// Global search filter
const globalSearchInput = document.getElementById('global-search');
if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        // Go to Sketchnotes tab if user starts searching
        const activeTab = document.querySelector('.tab-content.active').id;
        if (activeTab !== 'sketchnotes' && query.length > 1) {
            const navItem = document.querySelector('.nav-item[data-target="sketchnotes"]');
            if (navItem) navItem.click();
        }
        
        // Filter sketchnote grid cards
        const cards = document.querySelectorAll('.sketchnote-card');
        PRODUCTS.forEach((product, idx) => {
            const card = cards[idx];
            if (!card) return;
            const match = product.name.toLowerCase().includes(query) || 
                          product.tagline.toLowerCase().includes(query) || 
                          product.coreConcepts.toLowerCase().includes(query);
            
            card.style.display = match ? 'flex' : 'none';
        });
    });
}

// 9.5 DYNAMIC ARCHITECT DECISION WIZARDS STATE MACHINE
const DECISION_TREES = {
    storage: {
        title: "GCP Storage Selector Guide",
        description: "Choose the perfect GCP storage backend",
        startNode: "q_structured",
        nodes: {
            q_structured: {
                question: "Is the data structured or unstructured?",
                options: [
                    {
                        text: "Unstructured Data",
                        desc: "Files, backups, video, audio, raw sensor bytes, documents",
                        nextNode: "result_gcs"
                    },
                    {
                        text: "Structured / Semi-Structured",
                        desc: "Database tables, relational schemas, document models, high-speed key-values",
                        nextNode: "q_acid"
                    }
                ]
            },
            q_acid: {
                question: "Do you require strict ACID relational transactions?",
                options: [
                    {
                        text: "Yes (Relational/OLTP)",
                        desc: "Needs multi-table transactions, joins, foreign keys, SQL standards",
                        nextNode: "q_scale"
                    },
                    {
                        text: "No (Analytics / NoSQL)",
                        desc: "OLAP workloads, high-speed document key-value lookups, time-series metrics",
                        nextNode: "q_olap"
                    }
                ]
            },
            q_scale: {
                question: "Do you require global, multi-region write scalability?",
                options: [
                    {
                        text: "Yes (Global / Horizontal Write Scaling)",
                        desc: "Global order ledger, financial transactions across regions with strict consistency",
                        nextNode: "result_spanner"
                    },
                    {
                        text: "No (Regional / Local OLTP)",
                        desc: "Single-region apps, standard ERP/CRM backend, standard relational database size",
                        nextNode: "result_sql"
                    }
                ]
            },
            q_olap: {
                question: "Are you running analytical warehousing (OLAP) or low-latency key-value (NoSQL)?",
                options: [
                    {
                        text: "Analytical / Warehousing (OLAP)",
                        desc: "Big data analytics, ad-hoc SQL queries, business intelligence dashboards",
                        nextNode: "result_bigquery"
                    },
                    {
                        text: "High-throughput NoSQL / Time-Series",
                        desc: "Sub-10ms key lookups, streaming IoT telemetry, user profiles, game state save files",
                        nextNode: "q_keyvalue_scale"
                    }
                ]
            },
            q_keyvalue_scale: {
                question: "Do you require massive scale, sub-10ms single-key lookup speeds?",
                options: [
                    {
                        text: "Yes (Petabyte-scale, single-key operations)",
                        desc: "Continuous high-throughput sensor telemetry, streaming IoT, ad-tech tracking",
                        nextNode: "result_bigtable"
                    },
                    {
                        text: "No (Document structure, hierarchy, mobile-sync)",
                        desc: "Web and mobile app profiles, complex nested query documents, real-time sync",
                        nextNode: "result_firestore"
                    }
                ]
            },
            // Results
            result_gcs: {
                type: "result",
                product: "Cloud Storage (GCS)",
                productId: "gcs",
                why: "Your data is unstructured. Cloud Storage is Google's globally scalable, highly durable binary large object (BLOB) store, perfect for files, backups, images, and videos.",
                gotchas: "Always select the correct storage class (Standard, Nearline, Coldline, Archive) based on access frequency to optimize cost. Understand retention policies and object lifecycle rules."
            },
            result_spanner: {
                type: "result",
                product: "Cloud Spanner",
                productId: "spanner",
                why: "You need global, horizontal write scalability combined with relational schemas and strict ACID transactions. Cloud Spanner uses synchronized atomic clocks (TrueTime) to deliver external consistency across regions.",
                gotchas: "Row keys must not contain sequential IDs (e.g., timestamps) to avoid hotspotting. Use UUIDs or hashes to distribute writes evenly across partitions."
            },
            result_sql: {
                type: "result",
                product: "Cloud SQL & AlloyDB",
                productId: "sql",
                why: "You need a standard, regional relational database engine with full ACID compliance. Cloud SQL supports managed MySQL, PostgreSQL, and SQL Server, while AlloyDB provides an enterprise PostgreSQL-compatible analytical booster.",
                gotchas: "Cloud SQL is regional and cannot scale writes horizontally across regions. To achieve global high availability, you must configure read replicas in other regions, but writes must go to the primary regional master."
            },
            result_bigquery: {
                type: "result",
                product: "BigQuery",
                productId: "bigquery",
                why: "You require powerful analytical data warehousing and petabyte-scale ad-hoc SQL query analysis. BigQuery is a serverless, column-oriented analytical store with a highly optimized distributed query engine (Dremel).",
                gotchas: "Always configure table partitioning (by date/time or integer range) and clustering (by frequently filtered columns) to limit scanned bytes and drastically reduce query costs."
            },
            result_bigtable: {
                type: "result",
                product: "Cloud Bigtable",
                productId: "bigtable",
                why: "You require massive write throughput, low latency (sub-10ms), and sequential single-key scans for large-scale time-series or flat NoSQL datasets. Bigtable is Google's wide-column NoSQL engine, perfect for IoT sensor streams and ad-tech tracking.",
                gotchas: "Bigtable does not support multi-row transactions or SQL joins. Schema design depends entirely on row key lexicographical order. Avoid monotonically increasing row keys (timestamps) to prevent tablet hotspotting."
            },
            result_firestore: {
                type: "result",
                product: "Firestore",
                productId: "firestore",
                why: "You require a fully managed, serverless NoSQL document database optimized for rich web/mobile application profiles, hierarchical collections, and live-synchronization.",
                gotchas: "Firestore limits write throughput to 10,000 writes per second per database (under standard patterns) and has a max document size of 1MB. Use Bigtable instead if you are doing heavy, continuous streaming telemetry."
            }
        }
    },
    pipeline: {
        title: "GCP Data Pipeline Selector Guide",
        description: "Select the correct data processing pipeline engine",
        startNode: "q_model",
        nodes: {
            q_model: {
                question: "What is the primary processing framework or model?",
                options: [
                    {
                        text: "Unified Streaming & Batch",
                        desc: "Using the Apache Beam SDK for sliding window analytics, late-arriving data, and event-time watermarks",
                        nextNode: "result_dataflow"
                    },
                    {
                        text: "Managed Hadoop & Spark Ecosystem",
                        desc: "Porting existing open-source big data workloads, running PySpark, Spark SQL, or MapReduce with minimal changes",
                        nextNode: "result_dataproc"
                    },
                    {
                        text: "Visual No-Code / Code-Free ETL",
                        desc: "Creating data ingestion pipelines visually with drag-and-drop connectors and automated schema mapping",
                        nextNode: "result_datafusion"
                    },
                    {
                        text: "Database-centric Transformations",
                        desc: "Transforming raw data already loaded inside BigQuery using SQL-based workflows, incremental models, and version control",
                        nextNode: "result_bigquery_sql"
                    }
                ]
            },
            // Results
            result_dataflow: {
                type: "result",
                product: "Cloud Dataflow",
                productId: "dataflow",
                why: "You are building a unified pipeline using Apache Beam. Dataflow is a fully serverless, auto-scaling pipeline runner that natively manages windowing, late-arriving telemetry, and out-of-order event streams with high precision.",
                gotchas: "Optimize pipelines using Shuffle service and Streaming Engine to offload processing. Use dead-letter queues (pub/sub or GCS) for malformed payloads to avoid stalling the pipeline."
            },
            result_dataproc: {
                type: "result",
                product: "Cloud Dataproc",
                productId: "dataproc",
                why: "You are migrating or running standard Spark, Hadoop, Hive, or Presto clusters. Dataproc allows you to spin up managed clusters in seconds, run highly efficient ephemeral clusters, and leverage serverless Dataproc Batches.",
                gotchas: "For cost efficiency, use ephemeral clusters (spin up for job, shut down after) with Cloud Storage (GCS) as the persistent storage layer (decoupling compute and storage) instead of local HDFS."
            },
            result_datafusion: {
                type: "result",
                product: "Cloud Data Fusion",
                productId: "datafusion",
                why: "You require a graphical, code-free ETL platform. Data Fusion is Google's managed distribution of CDAP, allowing analytics teams to build visual transformation pipelines with over 150+ pre-built plugins.",
                gotchas: "Data Fusion executes pipelines by spinning up ephemeral Dataproc clusters behind the scenes. Be mindful of Dataproc startup times and resource usage costs."
            },
            result_bigquery_sql: {
                type: "result",
                product: "BigQuery + Dataform",
                productId: "bigquery",
                why: "You are leveraging ELT (Extract-Load-Transform) patterns. By running transformations directly inside BigQuery using SQLX/Dataform, you utilize BigQuery's massive query engine without needing separate compute frameworks.",
                gotchas: "Make sure to write incremental models for high-volume datasets to avoid scanning the entire source table during daily runs. Enforce strict assertions and unit tests inside your SQLX definitions."
            }
        }
    }
};

let activeWizardType = 'storage';
let currentWizardNodeId = 'q_structured';
let wizardHistory = [];

function initDecisionWizards() {
    const btnStorage = document.getElementById('btn-select-storage-wizard');
    const btnPipeline = document.getElementById('btn-select-pipeline-wizard');
    
    if (btnStorage && btnPipeline) {
        btnStorage.addEventListener('click', () => {
            btnStorage.classList.add('active');
            btnPipeline.classList.remove('active');
            startWizard('storage');
        });
        
        btnPipeline.addEventListener('click', () => {
            btnPipeline.classList.add('active');
            btnStorage.classList.remove('active');
            startWizard('pipeline');
        });
    }
    
    // Initial load
    startWizard('storage');
}

function startWizard(type) {
    activeWizardType = type;
    currentWizardNodeId = DECISION_TREES[type].startNode;
    wizardHistory = [];
    renderWizardNode();
}

function renderWizardNode() {
    const container = document.getElementById('wizard-card-container');
    if (!container) return;
    
    const tree = DECISION_TREES[activeWizardType];
    const node = tree.nodes[currentWizardNodeId];
    
    if (!node) return;
    
    // Check if result node or question node
    if (node.type === 'result') {
        renderWizardResult(container, node);
    } else {
        renderWizardQuestion(container, node);
    }
}

function renderWizardQuestion(container, node) {
    // Count history steps
    const stepNum = wizardHistory.length + 1;
    
    let optionsHtml = '';
    node.options.forEach((opt, idx) => {
        optionsHtml += `
            <div class="wizard-option-card" data-next="${opt.nextNode}">
                <h5>${opt.text}</h5>
                <p>${opt.desc}</p>
            </div>
        `;
    });
    
    container.innerHTML = `
        <div class="wizard-card-header">
            <h3><i data-lucide="${activeWizardType === 'storage' ? 'database' : 'git-branch'}"></i> ${DECISION_TREES[activeWizardType].title}</h3>
            <span class="wizard-step-progress">Step ${stepNum}</span>
        </div>
        <div class="wizard-question-container">
            <h4 class="wizard-question-text">${node.question}</h4>
            <div class="wizard-options-grid">
                ${optionsHtml}
            </div>
        </div>
    `;
    
    // Re-create icons inside container
    lucide.createIcons({
        attrs: {
            class: 'lucide'
        },
        nameAttr: 'data-lucide'
    });
    
    // Attach event listeners to option cards
    container.querySelectorAll('.wizard-option-card').forEach(card => {
        card.addEventListener('click', () => {
            const nextNodeId = card.getAttribute('data-next');
            wizardHistory.push(currentWizardNodeId);
            currentWizardNodeId = nextNodeId;
            renderWizardNode();
        });
    });
}

function renderWizardResult(container, node) {
    container.innerHTML = `
        <div class="wizard-result-view">
            <div class="wizard-result-card">
                <div class="wizard-badge">
                    <i data-lucide="award"></i> Recommended Solution
                </div>
                <h3 class="wizard-result-title">${node.product}</h3>
                
                <div class="wizard-result-details-grid">
                    <div class="wizard-result-col">
                        <h6>Why This Product?</h6>
                        <p>${node.why}</p>
                    </div>
                    <div class="wizard-result-col wizard-result-gotchas">
                        <h6>Critical Exam Gotchas</h6>
                        <p>${node.gotchas}</p>
                    </div>
                </div>
            </div>
            
            <div class="wizard-result-actions">
                ${wizardHistory.length > 0 ? `<button class="btn btn-secondary" id="btn-wizard-back"><i data-lucide="arrow-left"></i> Back</button>` : ''}
                <button class="btn btn-secondary" id="btn-wizard-sketch"><i data-lucide="image"></i> View Sketchnote</button>
                <button class="btn btn-primary" id="btn-wizard-reset"><i data-lucide="rotate-ccw"></i> Reset Wizard</button>
            </div>
        </div>
    `;
    
    lucide.createIcons({
        attrs: {
            class: 'lucide'
        },
        nameAttr: 'data-lucide'
    });
    
    // Back button
    const btnBack = document.getElementById('btn-wizard-back');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (wizardHistory.length > 0) {
                currentWizardNodeId = wizardHistory.pop();
                renderWizardNode();
            }
        });
    }
    
    // Sketch button
    const btnSketch = document.getElementById('btn-wizard-sketch');
    if (btnSketch) {
        btnSketch.addEventListener('click', () => {
            const productMatch = PRODUCTS.find(p => p.id === node.productId);
            if (productMatch) {
                openSketchnoteModal(productMatch);
            } else {
                // Default fallback to sketchnote tab
                const navItem = document.querySelector('.nav-item[data-target="sketchnotes"]');
                if (navItem) navItem.click();
            }
        });
    }
    
    // Reset button
    const btnReset = document.getElementById('btn-wizard-reset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            startWizard(activeWizardType);
        });
    }
}

// 10. INITIALIZE ALL COMPONENTS ON WINDOW LOAD
window.addEventListener('DOMContentLoaded', () => {
    initTabRouter();
    initLabsCheckboxes();
    initDecisionWizards();
    updateDashboardStats();
    loadMilestones();
    
    // Auto-check milestone 1 based on actual data
    if (appState.viewedSketchnotes.length === PRODUCTS.length) {
        document.getElementById('m1').checked = true;
        saveMilestones();
    }
    
    // Auto-check milestone 5 based on actual data
    if (appState.highScore >= 70) {
        document.getElementById('m5').checked = true;
        saveMilestones();
    }

    lucide.createIcons();
});
