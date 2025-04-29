<template>
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading content, please wait...</p>
    </div>
    
    <div v-else class="box">
      <div class="heading-pdf">
        <h4>{{ pdfData && pdfData.title ? pdfData.title : 'Will be available soon' }}</h4>
      </div>
      <p class="paragraph-pdf">
        {{ pdfData && pdfData.description ? pdfData.description : 'Will be available soon' }}
      </p><br>
      <h3 class="table-head">
        <u class="underline">{{ pdfData && pdfData.tableTitle ? pdfData.tableTitle : 'Will be available soon' }}</u>
      </h3><br>
      
      <table v-if="pdfData && pdfData.links && pdfData.links.length > 0" class="table-data">
        <tr class="imp-link">
          <td colspan="2">{{ pdfData.linksTitle || 'Important Links' }}</td>
        </tr>
        <tr v-for="(row, index) in pdfData.links" :key="index" class="rowData">
          <td>{{ row.leftLink }}</td>
          <td>{{ row.rightLink }}</td>
        </tr>
      </table>
      <div v-else class="no-data-message">
        <p>Important links will be available soon</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PyqSyPdf',
    data() {
      return {
        pdfData: {},
        isLoading: true
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          this.isLoading = true;
          
          // Fetch PDF data from API
          const response = await axios.get('https://cms.trehousingpublication.com/api/v2/?course_id=1&subject_id=1');
          this.pdfData = response.data || {};
          
        } catch (error) {
          console.error('Error fetching PDF data:', error);
          // No error message shown to user, just empty data
          this.pdfData = {};
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  </script>
<style scoped>
/* Loading styles */
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* No data message styles */
.no-data-message {
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
  color: #6c757d;
}

/* Your existing styles can remain here */

.box {
    padding: 3vh 3vw;
    font-family: 'Inter', sans-serif;

}

.heading-pdf {
    padding: 0px;
    border-radius: 5px;
    font-weight: bolder;

}
.underline{
    color: lightpink;
}

.heading-pdf h4 {
    font-size: 24px;
    margin: 0;
    padding: 0 0px;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
}

.paragraph-pdf {
    font-size: medium;
    color: #000;
    margin: 14px 0;
}

.table-head {
    margin-bottom: -10px;
    font-size: medium;
    font-weight: bold;
    color: lightpink;
    text-align: center;
}

/* .horiz-line {
    width: 50vw;
    border-color: #ef5446;
    margin-bottom: 15px;
} */

.table-data {
    width:100%;
    border-collapse: collapse;
    margin: 25px 0px;
}

.table-data .imp-link td {
    color: #fff;
    background-color: #d6574b;
    font-weight: 700;
    padding: 15px;
    font-size: medium;
}

.table-data .rowData {
    border: 1.5px solid #000;
}

.table-data .rowData td {
    text-decoration: underline;
    border: 1px solid #000;
    font-size: medium;
    font-weight: 550;
    padding: 1.3vw;
    color: lightpink;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .paragraph-pdf {
        font-size: 17px;
    }

    .table-head {
        font-size: 16px;
    }

    .table-data .imp-link td {
        font-size: 1rem;
    }

    .table-data .rowData td {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .box {
        padding: 1vh 4vw;
    }

    .heading-pdf h4 {
        font-size: 20px;
    }

    .paragraph-pdf {
        font-size: 14px;
    }

    .table-head {
        font-size: 1rem;
        font-weight: 700;
    }

    .table-data .imp-link td {
        font-size: 14px;
    }

    .table-data .rowData td {
        font-size: 14px;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .heading-pdf {
        width: 100%;
    }

    .heading-pdf h4 {
        font-size: 16px;
    }

    .paragraph-pdf {
        font-size: 13px;
        line-height: 1.3;
    }

    .table-head {
        font-size: 14px;
    }

    .horiz-line {
        width: 80vw;
        margin-bottom: 15px;
    }

    .table-data .imp-link td {
        font-size: 12px;
        padding: 5px;
    }

    .table-data .rowData td {
        font-size: 11px;
        padding: 10px;
    }

    .table-data .rowData {
        border: 1px solid #000;
    }

    .table-data .rowData td {
        border: 0.7px solid #000;
    }
}
</style>
