# Design Document: Witness Consistency Analysis Tool

## Design Overview

The witness consistency analysis tool is a simple web application that helps public prosecutors in India identify inconsistencies across multiple witness statements within the same criminal case. The system uses AI to highlight three key areas: narrative overlaps (similar descriptions), conflicting event descriptions, and timeline inconsistencies.

This is a decision-support tool that assists prosecutors in case preparation—it does not make judgments about credibility, guilt, or legal outcomes. The system is designed to surface signals for attention, not definitive conclusions. The system processes text-based witness statements and generates reports highlighting potential inconsistencies for human review.

The design prioritizes simplicity, explainability, and cost-effectiveness suitable for resource-constrained public legal systems in India. The system is intended for internal, controlled access by public prosecutors, where simplicity and auditability are prioritized over global content distribution.

## Core Processing Flow

**Step 1: Document Upload and Processing**
- Prosecutors upload witness statements (PDF, Word, or text files) for a specific case
- System extracts text content and stores documents securely
- Basic validation ensures files contain readable text

**Step 2: Text Preprocessing**
- Clean and normalize text (remove formatting, standardize punctuation)
- Extract key entities (names, locations, dates, times)
- Segment text into sentences and paragraphs for analysis

**Step 3: Consistency Analysis**
- **Narrative Overlap Detection**: Compare text segments to find similar descriptions of events
- **Conflict Identification**: Detect contradictory statements about the same events (different locations, times, or descriptions)
- **Timeline Analysis**: Extract temporal references and identify chronological inconsistencies

**Step 4: Report Generation**
- Compile findings into a structured report with explanations
- Highlight specific text passages that contain inconsistencies
- Provide confidence scores and reasoning for each finding
- Generate exportable report for case preparation

**Step 5: Human Review and Validation**
- Prosecutors review findings and can dismiss false positives
- System maintains audit trail of human decisions
- Final report incorporates prosecutor feedback

## AI/NLP Approach

**Text Similarity Analysis:**
- Use pre-trained sentence embedding models to identify semantically similar passages
- Apply cosine similarity and threshold-based matching to detect narrative overlaps
- Focus on content similarity rather than exact word matching

**Conflict Detection:**
- Identify contradictory statements using named entity recognition and dependency parsing
- Look for conflicting information about the same entities (people, places, events)
- Use rule-based patterns to detect common types of contradictions

**Timeline Processing:**
- Extract temporal expressions using pattern matching and NLP libraries
- Normalize different time formats (absolute dates, relative times, sequence indicators)
- Build timeline representations and identify chronological conflicts

**Explainability Focus:**
- All AI decisions include human-readable explanations with exact source statement references
- Show specific text passages that led to each finding with complete traceability
- Provide confidence scores based on similarity thresholds and pattern matching strength

**AI Scope Constraints:**
- Analysis is strictly limited to comparing witness statements within a single case
- System does not learn across cases or build generalized models from historical data
- No cross-case pattern recognition to preserve privacy and legal isolation between cases
- Sentiment or intent analysis is intentionally avoided to reduce legal and ethical risk

Now I need to use the prework tool to analyze the acceptance criteria before writing the Correctness Properties section.

<function_calls>
<invoke name="prework">
<parameter name="featureName">witness-consistency-analysis

## AWS Services Used

**Amazon S3 (Simple Storage Service)**
- **Purpose**: Secure storage for uploaded witness statements and generated reports
- **Justification**: Cost-effective, scalable storage with built-in encryption and access controls suitable for sensitive legal documents

**AWS Lambda**
- **Purpose**: Serverless compute for document processing and AI analysis functions
- **Justification**: Pay-per-use model ideal for sporadic case analysis workloads, automatic scaling without infrastructure management

**Amazon Textract**
- **Purpose**: Extract text from PDF and scanned document uploads
- **Justification**: Witness statements in India are often scanned or digitized affidavits requiring OCR processing, eliminates need for custom text extraction implementation

**Amazon Comprehend**
- **Purpose**: Named entity recognition for factual entity and event alignment
- **Justification**: Used specifically for extracting names, dates, and locations for consistency comparison—not for sentiment, intent, or credibility analysis which are intentionally avoided to reduce legal and ethical risk

**Amazon DynamoDB**
- **Purpose**: Store case metadata, analysis results, and audit logs
- **Justification**: Serverless database with automatic scaling, suitable for structured case data and audit trail requirements

## Explainability and Human-in-the-Loop Considerations

**Transparent AI Decision Making:**
- Every identified inconsistency includes specific text passages that triggered the finding with exact source statement references
- Confidence scores are based on measurable similarity thresholds and pattern matching strength
- System explains its reasoning in plain language: "These passages describe the same event but mention different locations"
- Complete traceability ensures all highlighted inconsistencies can be traced back to their exact source statements

**Human Oversight Integration:**
- Prosecutors can review and dismiss false positive findings
- System maintains audit trail of human decisions and reasoning
- Final reports clearly distinguish between AI findings and human validation
- No automated decisions—all conclusions require prosecutor review and approval

**Iterative Improvement:**
- System learns from prosecutor feedback to improve future analysis accuracy
- Common false positive patterns are flagged for algorithm refinement
- User feedback helps prioritize which types of inconsistencies are most valuable

## Security and Data Privacy Considerations

**Data Protection:**
- All documents encrypted at rest in S3 and in transit using AWS encryption services
- Access controls ensure only authorized prosecutors can view case-specific data
- Automatic data retention policies comply with Indian legal requirements

**Audit and Compliance:**
- Complete audit trail of all document access and analysis activities
- Logs maintained for legal compliance and accountability requirements
- Data residency controls ensure information stays within Indian AWS regions

**Minimal Data Exposure:**
- System processes only text content, not metadata that could identify individuals
- Analysis focuses on textual inconsistencies rather than content interpretation
- No permanent storage of sensitive case details beyond necessary processing period

## Limitations and Trade-offs

**Technical Limitations:**
- Text-only analysis—cannot process audio or video witness statements
- Limited to English and Hindi language processing capabilities
- Requires readable text input—heavily corrupted or handwritten documents may need manual preprocessing

**AI Analysis Boundaries:**
- System identifies potential inconsistencies but cannot determine their legal significance
- Does not assess witness credibility, truthfulness, or intent
- Cannot provide legal advice or case strategy recommendations
- May generate false positives that require human review and validation
- Apparent inconsistencies may be benign or context-dependent and require careful human interpretation

**Interpretation Limitations:**
- System assists case preparation, not legal decision-making
- All findings require prosecutor evaluation for legal relevance and significance
- Inconsistencies identified by the system may have valid explanations that only human judgment can assess

**Resource Constraints:**
- Designed for batch processing rather than real-time analysis during court proceedings
- Processing time increases with case complexity and number of witness statements
- Requires internet connectivity for cloud-based processing

**Scope Trade-offs:**
- Single-case analysis only—does not compare across different criminal cases
- Focus on consistency analysis rather than comprehensive case management
- Simplified user interface prioritizes core functionality over advanced features

**Cost Considerations:**
- Pay-per-use AWS model keeps costs low for typical prosecutor workloads
- Processing costs scale with document size and analysis complexity
- Designed for government budget constraints while maintaining effectiveness