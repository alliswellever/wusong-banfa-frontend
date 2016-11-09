/**
 * Created by yuyongyu on 2016/11/9.
 */

class Validator{
    validateSponsorName(sponsorName){
        if(sponsorName && 0 < sponsorName.length && sponsorName.length <= 20 ){
            return null
        }else{
            return '联系人姓名为必填项，且长度不超过20位！'
        }
    }

    validatePhoneNumber(phoneNumber){
        const reg = /^1[3|4|5|8][0-9]\d{8}$/;
        if(phoneNumber && reg.test(phoneNumber)){
            return null
        }else {
            return '手机号必须为11位数字！'
        }
    }

    validateUploadedFile(file){
        const supportedFileType = [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/pdf',
            'application/x-iwork-pages-sffpages',
            'application/zip',
            'application/x-rar'
        ]

        if(!supportedFileType.includes(file.type)){
            return '文件仅支持文本格式（.doc、.docx、.page、.pdf）和压缩格式（.zip、.rar）'
        }else if(file.size > 8*1024*1024){
            return '文件大小不得超过8M'
        }else{
            return null
        }
    }

}

export default new Validator()