<template>
    <div class="box">
        <h1 class="head-pdf">Bihar Computer Science Teacher Syllabus PDF.</h1>
        <p class="paragraph-pdf">The direct link to download Bihar Computer Science Teacher Syllabus Pdf has been given
            below. Candidate can download through the below link Bihar CS Teacher Syllabus PDF section wise.</p>
        <h3 class="table-head">Download Bihar Teacher PGT Computer Science PDF</h3>
        <hr class="horiz-line" />
        <table class="table-data">
            <tr class="imp-link">
                <td colspan="2">Important Links</td>
            </tr>
            <tr class="rowData">
                <td>BPSC Bihar Teacher Syllabus 2025</td>
                <td>Bihar Teacher in Salary Hand</td>
            </tr>
            <tr class="rowData">
                <td>Bihar Teacher Vacancy 2025 </td>
                <td>Bihar 7th Phase Selection Process</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'syllbusPdf',
}
</script>
<style scoped>
/* Default styles */
.box {
    padding: 6vh 5vw;
} 

.head-pdf {
    background-color: #94D9FF;
    color: rgb(39, 39, 209);
    padding: 8px 3vw;
    font-weight: 750;
    font-size: 2.2vw;
}

.paragraph-pdf {
    font-size: 1.2rem;
    font-weight: 490;
}

.table-head {
    margin-bottom: -4px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #ef5446;
    /* background: #FF1702; */

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
    font-size: 1.3rem;
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
    .head-pdf {
        font-size: 2rem;
    }
    .paragraph-pdf {
        font-size: 1.1rem;
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
        padding: 3vh 4vw;
    } 
    .head-pdf {
        font-size: 1.8rem;
    }
    .paragraph-pdf {
        font-size: 1rem;
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
    .head-pdf {
        font-size: 1.5rem;
        padding: 5px 15px;
    }
    .paragraph-pdf {
        font-size: 0.9rem;
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