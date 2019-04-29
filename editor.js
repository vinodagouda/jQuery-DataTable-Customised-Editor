$(document).ready(function () {

    $("#datepicker1").datepicker({
        dateFormat: "dd-mm-yy"
    });
    $("#datepicker2").datepicker({
        dateFormat: "dd-mm-yy"
    });

    dataSet = {
        "data": [
            {
                "id": "1",
                "vendor": "Tiger Nixon",
                "variant": "red-s",
                "stock": "",
                "group": "customer3",
                "valid_from": "",
                "valid_to": ""
					}, {
                "id": "2",
                "vendor": "Tiger Nixon1",
                "variant": "red-m",
                "stock": "",
                "group": "customer1",
                "valid_from": "",
                "valid_to": ""
					}, {
                "id": "3",
                "vendor": "Tiger Nixon2",
                "variant": "red-l",
                "stock": "",
                "group": "customer1",
                "valid_from": "",
                "valid_to": ""
					}, {
                "id": "4",
                "vendor": "Tiger Nixon3",
                "variant": "blue-s",
                "stock": "",
                "group": "customer1",
                "valid_from": "",
                "valid_to": ""
					}, {
                "id": "5",
                "vendor": "Tiger Nixon4",
                "variant": "blue-m",
                "stock": "",
                "group": "customer1",
                "valid_from": "",
                "valid_to": ""
					}, {
                "id": "6",
                "vendor": "Tiger Nixon5",
                "variant": "blue-l",
                "stock": "",
                "group": "customer1",
                "valid_from": "",
                "valid_to": ""
					}
				]
    }

    variantsTable = $('#example').DataTable({
        "data": dataSet.data,
        "columnDefs": [
            {
                "className": "dt-center",
                "targets": "_all"
            },
            {
                "targets": [0],
                "visible": false
            }
				],
        "columns": [
            {
                "data": "id",
                "render": function (data, type, row) {
                    return '<input type="checkbox" value="' + data + '" id="variant-checkbox' + data + '"/>'
                }
					},
            {
                "data": "vendor"
            },
            {
                "data": "variant"
            },
            {
                "data": "stock"
            },
            {
                "data": "group"
            },
            {
                "data": "valid_from"
            },
            {
                "data": "valid_to"
            }
				]
    });
});

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

$('#edit').click(function () {
    if ($("input:checked").length === 1) {
        console.log("id", $("input:checked").val());
        var id = $("input:checked").val();

        console.log("Data set", dataSet);

        for (var i = 0; i < dataSet.data.length; i++) {
            //console.log("Data set",dataSet.data[i].vendor, id)
            if (dataSet.data[i].id == id) {
                //alert(dataSet.data[i].vendor)
                $('#id').val(dataSet.data[i].id)
                $('#vendor').val(dataSet.data[i].vendor);
                $('#variant').val(dataSet.data[i].variant);
                $('#stock').val(dataSet.data[i].stock);
                $(".group").val(dataSet.data[i].group).find("option[value=" + dataSet.data[i].group + "]").attr('selected', true);
                $('#datepicker1').val(dataSet.data[i].valid_from);
                $('#datepicker2').val(dataSet.data[i].valid_to);
                modal.style.display = "block";
            }
        }

    } else {
        alert("Please select only variant")
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#update').click(function () {
    for (var j = 0; j < dataSet.data.length; j++) {
        if ($('#id').val() == dataSet.data[j].id) {
            //alert("Got id")
            dataSet.data[j].stock = $('#stock').val();
            dataSet.data[j].group = $('.group').val();
            dataSet.data[j].valid_from = $('#datepicker1').val();
            dataSet.data[j].valid_to = $('#datepicker2').val();
        }
    }

    //variantsTable.draw();

    console.log("New dataSet", dataSet.data)

    modal.style.display = "none";
    variantsTable.clear().draw();
    variantsTable.rows.add(dataSet.data); // Add new data
    variantsTable.columns.adjust().draw(); // Redraw the DataTable
})

//$(document).ready(function() {
$(function () {
    var table = $('#example').DataTable();

    $('#example tbody').on('dblclick', 'tr', function () {
        var data = table.row(this).data();
        console.log("row data : ", data);

        console.log("Data set", dataSet);

        for (var i = 0; i < dataSet.data.length; i++) {
            //console.log("Data set",dataSet.data[i].vendor, id)
            if (dataSet.data[i].id == data.id) {
                //alert(dataSet.data[i].vendor)
                $('#id').val(dataSet.data[i].id)
                $('#vendor').val(dataSet.data[i].vendor);
                $('#variant').val(dataSet.data[i].variant);
                $('#stock').val(dataSet.data[i].stock);
                $(".group").val(dataSet.data[i].group).find("option[value=" + dataSet.data[i].group + "]").attr('selected', true);
                $('#datepicker1').val(dataSet.data[i].valid_from);
                $('#datepicker2').val(dataSet.data[i].valid_to);
                modal.style.display = "block";
            }
        }
    });
});