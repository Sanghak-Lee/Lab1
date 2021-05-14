//3자리 단위마다 콤마 생성
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//모든 콤마 제거
function removeCommas(x) {
    if(!x || x.length == 0) return "";
    else return x.split(",").join("");
}

/* 휴대폰 번호 유효성 검사 */
$(function(){

    $(".phone-number-check").on('keydown', function(e){
       // 숫자만 입력받기
        var trans_num = $(this).val().replace(/-/gi,'');
	var k = e.keyCode;

	if(trans_num.length >= 11 && ((k >= 48 && k <=126) || (k >= 12592 && k <= 12687 || k==32 || k==229 || (k>=45032 && k<=55203)) ))
	{
  	    e.preventDefault();
	}
    }).on('blur', function(){ // 포커스를 잃었을때 실행합니다.
        if($(this).val() == '') return;

        // 기존 번호에서 - 를 삭제합니다.
        var trans_num = $(this).val().replace(/-/gi,'');

        // 입력값이 있을때만 실행합니다.
        if(trans_num != null && trans_num != '')
        {
            // 총 핸드폰 자리수는 11글자이거나, 10자여야 합니다.
            if(trans_num.length==11 || trans_num.length==10)
            {
                // 유효성 체크
                var regExp_ctn = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
                if(regExp_ctn.test(trans_num))
                {
                    // 유효성 체크에 성공하면 하이픈을 넣고 값을 바꿔줍니다.
                    trans_num = trans_num.replace(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");
                    $(this).val(trans_num);
                }
                else
                {
                    alert("유효하지 않은 전화번호 입니다.");
                    $(this).val("");
                    $(this).focus();
                }
            }
            else
            {
                alert("유효하지 않은 전화번호 입니다.");
                $(this).val("");
                $(this).focus();
            }
      }
  });
});

/* 텍스트에어리아 길이 늘리기 */
function adjustHeight() {
  var textEle = $('textarea');
  textEle[0].style.height = 'auto';
  var textEleHeight = textEle.prop('scrollHeight');
  textEle.css('height', textEleHeight);
};

/* 휴대폰 번호 하이픈 */
$(document).ready(function () {
    var hp = $('#myphone').text();
    hp = hp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    $('#myphone').text(hp);
});

/* 비디오 요청 */
$("input:checkbox[id='id_case']").click(function() {
  if ($("input:checkbox[id='id_case']").is(":checked")){
      $('#friend_name').css("display", "block");
  }
  else {
      $('#friend_name').css("display", "none");
  }
});

/* 비디오 재생,정지 */
function video_play(num) {
    var video_id = 'video_'+num;
    $('#'+video_id).get(0).play();

    var video_play_id = 'video_play_'+num;
    $('#'+video_play_id).css({'display':'none', 'opacity':'0'});

    var video_pause_id = 'video_pause_'+num;
    $('#'+video_pause_id).css({'display':'block', 'opacity':'1'});
}

function video_pause(num) {
    var video_id = 'video_' + num;
    $('#'+video_id).get(0).pause();

    var video_pause_id = 'video_pause_' + num;
    $('#'+video_pause_id).css({'display':'none', 'opacity':'0'});

    var video_play_id = 'video_play_' + num;
    $('#'+video_play_id).css({'display':'block', 'opacity':'1'});
}

function video_play_m(num) {
    var video_id = 'video_m_'+num;
    $('#'+video_id).get(0).play();

    var video_play_id = 'video_play_m_'+num;
    $('#'+video_play_id).css({'display':'none', 'opacity':'0'});

    var video_pause_id = 'video_pause_m_'+num;
    $('#'+video_pause_id).css({'display':'block', 'opacity':'1'});
}

function video_pause_m(num) {
    var video_id = 'video_m_' + num;
    $('#'+video_id).get(0).pause();

    var video_pause_id = 'video_pause_m_' + num;
    $('#'+video_pause_id).css({'display':'none', 'opacity':'0'});

    var video_play_id = 'video_play_m_' + num;
    $('#'+video_play_id).css({'display':'block', 'opacity':'1'});
}


/* 비디오 뮤트 */
function video_mute_false_p_(num) {
    var video_id = 'intro_video_p_' + num;
    $('#'+video_id).prop('muted', false);

    var video_mute_false_id = 'video_mute_false_p_' + num;
    $('#'+video_mute_false_id).css({'display':'none', 'opacity':'0'});

    var video_mute_true_id = 'video_mute_true_p_' + num;
    $('#'+video_mute_true_id).css({'display':'block', 'opacity':'1'});
}

function video_mute_true_p_(num) {
    var video_id = 'intro_video_p_' + num;
    $('#'+video_id).prop('muted', true);

    var video_mute_false_id = 'video_mute_false_p_' + num;
    $('#'+video_mute_false_id).css({'display':'block', 'opacity':'1'});

    var video_mute_true_id = 'video_mute_true_p_' + num;
    $('#'+video_mute_true_id).css({'display':'none', 'opacity':'0'});
}

function video_mute_false_m_(num) {
    var video_id = 'intro_video_m_' + num;
    $('#'+video_id).prop('muted', false);

    var video_mute_false_id = 'video_mute_false_m_'+num;
    $('#'+video_mute_false_id).css({'display':'none', 'opacity':'0'});

    var video_mute_true_id = 'video_mute_true_m_'+num;
    $('#'+video_mute_true_id).css({'display':'block', 'opacity':'1'});
}

function video_mute_true_m_(num) {
    var video_id = 'intro_video_m_'+num;
    $('#'+video_id).prop('muted', true);

    var video_mute_false_id = 'video_mute_false_m_'+num;
    $('#'+video_mute_false_id).css({'display':'block', 'opacity':'1'});

    var video_mute_true_id = 'video_mute_true_m_'+num;
    $('#'+video_mute_true_id).css({'display':'none', 'opacity':'0'});
}


/* 팬 전용 비디오 재생,정지 */
function video_fan_play(num) {
    var video_id = 'video_fan_'+num;
    $('#'+video_id).get(0).play();

    var video_play_id = 'video_fan_play_'+num;
    $('#'+video_play_id).css({'display':'none', 'opacity':'0'});

    var video_pause_id = 'video_fan_pause_'+num;
    $('#'+video_pause_id).css({'display':'block', 'opacity':'1'});
}

function video_fan_pause(num) {
    var video_id = 'video_fan_' + num;
    $('#'+video_id).get(0).pause();

    var video_pause_id = 'video_fan_pause_' + num;
    $('#'+video_pause_id).css({'display':'none', 'opacity':'0'});

    var video_play_id = 'video_fan_play_' + num;
    $('#'+video_play_id).css({'display':'block', 'opacity':'1'});
}

function video_fan_play_m(num) {
    var video_id = 'video_fan_m_'+num;
    $('#'+video_id).get(0).play();

    var video_play_id = 'video_fan_play_m_'+num;
    $('#'+video_play_id).css({'display':'none', 'opacity':'0'});

    var video_pause_id = 'video_fan_pause_m_'+num;
    $('#'+video_pause_id).css({'display':'block', 'opacity':'1'});
}

function video_fan_pause_m(num) {
    var video_id = 'video_fan_m_' + num;
    $('#'+video_id).get(0).pause();

    var video_pause_id = 'video_fan_pause_m_' + num;
    $('#'+video_pause_id).css({'display':'none', 'opacity':'0'});

    var video_play_id = 'video_fan_play_m_' + num;
    $('#'+video_play_id).css({'display':'block', 'opacity':'1'});
}



/* 글자수 최대 300자 제한 카운터 */
$('#id_request_text').keyup(function (e){
    var content = $(this).val();
    $('#text-counter').html("("+content.length+" / 300)");    //글자수 실시간 카운팅
    if (content.length > 300){
        alert("최대 300자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 300));
        $('#text-counter').html("(300 / 300)");
    }
});

/* 글자수 최대 500자 제한 카운터 */
$('#id_text').keyup(function (e){
    var content = $(this).val();
    $('#text-counter').html("("+content.length+" / 500)");    //글자수 실시간 카운팅
    if (content.length > 500){
        alert("최대 500자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 500));
        $('#text-counter').html("(500 / 500)");
    }
});

/* 글자수 최대 150자 제한 카운터 */
$('#id_message_text').keyup(function (e){
    var content = $(this).val();
    $('#text-counter').html("("+content.length+" / 300)");    //글자수 실시간 카운팅
    if (content.length > 300){
        alert("최대 300자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 300));
        $('#text-counter').html("(300 / 300)");
    }
});