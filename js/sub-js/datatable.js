$(document).ready(function(){
    let tableA = null;
    let tableB = null;
    let tableC = null;
    let commonSettings = {
    pageLength: 5,
    responsive: true,
    lengthChange: false,
    info: false,
    language: {
        paginate: {
            previous: '이전',
            next: '다음'
        },
        search: '검색 :',
    }
};


    $('#myForm').on('submit', function(e){
        e.preventDefault();

        // Hide all tables
        $('#tableA, #tableB, #tableC').hide();

        // Destroy existing DataTables instances
        if(tableA){
            tableA.destroy();
            tableA = null;
        }
        if(tableB){
            tableB.destroy();
            tableB = null;
        }
        if(tableC){
            tableC.destroy();
            tableC = null;
        }

        // Retrieve the input value
        let input = $('#myInput').val();
        // Clear the input value
        $('#myInput').val('');

        // Show the relevant table
        switch(input){
        case 'a':
            $('#tableA').show();
            tableA = $('#tableA').DataTable(commonSettings);
            break;
        case 'b':
            $('#tableB').show();
            tableB = $('#tableB').DataTable(commonSettings);
            break;
        case 'c':
            $('#tableC').show();
            tableC = $('#tableC').DataTable(commonSettings);
            break;
        default:
            alert('입력하신 번호에 대응하는 화물 추적 정보를 찾을 수 없습니다.');
        
    }
    });
});
