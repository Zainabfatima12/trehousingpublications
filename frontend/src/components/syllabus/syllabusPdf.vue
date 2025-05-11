<template>
  <div class="box" v-if="pdfContent.length">
    <h3 class="table-head">Download Subject PDFs</h3>
    <hr class="horiz-line" />

    <table class="table-data">
      <tr class="imp-link">
        <td>Subject</td>
        <td>Download Link</td>
      </tr>
      <tr class="rowData" v-for="(pdf, index) in pdfContent" :key="index">
        <td>{{ pdf.subject }}</td>
        <td>
          <a :href="pdf.link" target="_blank" class="pdf-link">
            {{ pdf.filename }}
          </a>
        </td>
      </tr>
    </table>
  </div>

  <div v-else>
    <p v-if="error" style="color: red">{{ error }}</p>
    <p v-else>Loading syllabus PDF details...</p>
  </div>
</template>

<script>
export default {
  name: 'SyllabusPdf',
  data() {
    return {
      pdfContent: [],
      error: '',
    };
  },
  async mounted() {
    await this.fetchPdfContent();
  },
  methods: {
    async fetchPdfContent() {
      const course_id = this.$route.query.course_id;
      const subject_id = this.$route.query.subject_id;

      if (!course_id || !subject_id) {
        this.error = 'Missing course_id or subject_id in URL';
        return;
      }

      try {
        const res = await fetch(
          `https://cms.trehousingpublication.com/api/v1/?course_id=${course_id}&subject_id=${subject_id}&syllabus_list=true`
        );
        const data = await res.json();

        if (!data.syllabus_list || !Array.isArray(data.syllabus_list)) {
          this.error = 'Invalid syllabus list format from server.';
          return;
        }

        // Base path (adjust as per your server structure)
        const baseUrl = "https://cms.trehousingpublication.com/uploads/syllabus/";

        this.pdfContent = data.syllabus_list.map((file) => {
          const [idAndSubject] = file.split('_'); // e.g., "101-Hindi"
          const subject = idAndSubject?.split('-')?.[1] || "Unknown";
          return {
            subject: subject,
            filename: file,
            link: baseUrl + file,
          };
        });

        if (!this.pdfContent.length) {
          this.error = 'No syllabus PDF found.';
        }
      } catch (err) {
        console.error("Error fetching syllabus list:", err);
        this.error = 'Failed to fetch syllabus list.';
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchPdfContent();
    next();
  }
};
</script>
<style scoped>
.box {
    padding: 3vh 3vw;
    font-family: 'Inter', sans-serif;
}

.heading-pdf {
    background-color: #94D9FF;
    padding: 15px;
    color: #1717F8;
    font-size: 18px;
    border-radius: 5px;
}

.heading-pdf h4 {
    margin: 0;
    padding: 0 10px;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
}

.paragraph-pdf {
    font-size: 18px;
    color: #000;
    margin-top: 14px;
}

.table-head {
    margin-bottom: -4px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #ef5446;
    text-align: center;
}

.horiz-line {
    width: 60vw;
    border-color: #ef5446;
    margin-bottom: 15px;
}

.table-data {
    width: 100%;
    border-collapse: collapse;
}

.table-data .imp-link td {
    color: #fff;
    background-color: #d6574b;
    font-weight: 700;
    padding: 5px;
    font-size: 1rem;
}

.table-data .rowData td {
    background: #E1F8FF;
    font-size: 1.2rem;
    font-weight: 550;
    padding: 1.3vw;
    color: #ef5446;
}

/* Remove outer table border */
td,
th {
    border: 1px solid black;
}

table tr:first-child th {
    border-top: none;
}

table tr:last-child td {
    border-bottom: none;
}

table tr td:first-child,
table tr th:first-child {
    border-left: none;
}

table tr td:last-child,
table tr th:last-child {
    border-right: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .heading-pdf {
        font-size: 16px;
        padding: 12px;
    }

    .heading-pdf h4 {
        font-size: 16px;
    }

    .paragraph-pdf {
        font-size: 17px;
    }

    .table-head {
        font-size: 1.3rem;
    }

    .table-data .imp-link td {
        font-size: 1.2rem;
    }

    .table-data .rowData td {
        font-size: 1.1rem;
    }
}

@media (max-width: 768px) {
    .box {
        padding: 1vh 4vw;
    }

    .heading-pdf {
        font-size: 16px;
        padding: 10px;
    }

    .heading-pdf h4 {
        font-size: 15px;
        padding: 0 8px;
    }

    .paragraph-pdf {
        font-size: 16px;
    }

    .table-head {
        font-size: 1rem;
        font-weight: 700;
    }

    .table-data .imp-link td {
        font-size: 1.1rem;
    }

    .table-data .rowData td {
        font-size: 1rem;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .heading-pdf {
        width: 100%;
        text-align: center;
        font-size: 20px;
        margin: 0;
    }

    .heading-pdf h4 {
        font-size: 14px;
    }

    .paragraph-pdf {
        font-size: 14px;
    }

    .table-data .imp-link td {
        font-size: 1rem;
        padding: 5px;
    }

    .table-data .rowData td {
        font-size: 0.9rem;
        padding: 10px;
    }
}
</style>