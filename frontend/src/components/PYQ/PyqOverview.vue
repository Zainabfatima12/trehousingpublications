<template>
    <div class="content-box">
        <div class="bpscBook">
            <img :src="bpscbook" alt="BPSC Book Dowanload">
        </div>
        <div class="text-content">
            <h2>Bihar Computer Teacher Syllabus Overview</h2>
            <p>The Bihar Computer Science Teacher Recruitment 2023 is conducted by the Education Department of Bihar. The candidates must refer to the following table for more information on the Bihar Computer Science Teacher Syllabus.</p>
        </div>
    </div>
</template>
<script>
import bpscbook from '@/assets/PYQ-Image/BPSC-book.png';
export default {
    name: 'PyqOverview',
    data() {
        return {
            bpscbook,
        }
    }
}

</script>
<style>
.content-box{
    padding: 3vh 5vw 0;
}
.bpscBook {
    width: 100%;
    height: 420px;
}

.bpscBook img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.text-content{
    width: 100%;

}
.text-content h2{
    font-size: 28px;
    color: #333399;
    font-family: 'Inter', sans-serif;
    margin-top: 20px;
    font-weight: 600;
    
}
.text-content p{
    font-size: 20px;
    font-family: 'Inter', sans-serif;

}

@media (max-width:700px){
    .bpscBook{
        height: 350px;
    }
    .text-content h2{
        font-size: 22px;
    }
    .text-content p{
        font-size: 17px;
    }
}
@media (max-width:550px){
    .bpscBook{
        height: 270px;
    }

}
@media (max-width:400px){
    .bpscBook{
        height: 200px;
    }
    .text-content h2{
        font-size: 18px;
    }
    .text-content p{
        font-size: 15px;
    }
}
</style>