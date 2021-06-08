dummy_txt = "Fields of watermelons found on Mars, police say. Authorities say rise of fruit aliens is to blame for glut of outer space watermelons. The FBI declined to comment on reports of watermelons raining down, but confirmed that kiwis have been intercepted. This story is terribly boring."

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
} 

$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const count = parseInt(urlParams.get('count'))
    const length_type = urlParams.get('length_type')

    // set input to equal html params
    $(`#length_type option[value='${length_type}']`).prop('selected', true);
    $('#count').val(count)

    if (!count) {
        $('#output').html(dummy_txt)
    }
    else {
        var output_a = new Array()
        var output_txt = ""

        if (length_type == 'words') {
            var del = ' '
        } else if (length_type == 'sentences') {
            var del = '. '
        } else if (length_type == 'paragraphs') {
            var del = '<br><br>'
        }

        dummy_a = dummy_txt.split(del);
        dummy_length = dummy_a.length
        copies = parseInt(count / dummy_length)
        remainder = count % dummy_length

        for (i = 0; i < copies; i++) {
            output_a.push(...dummy_a)
        }

        output_a.push(...dummy_a.splice(0, remainder))

        output_txt = output_a.join(del)
        output_txt = output_txt.replaceAll('..', '.')

        $('#output').html(output_txt)
    }
})