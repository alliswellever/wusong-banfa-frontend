/**
 * Created by yuyongyu on 2016/11/9.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap'
import Validator from './Validator'

class FileUpload extends React.Component{
    constructor(props){
        super(props)
        this.handleFileChoose = this.handleFileChoose.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleFileRemove = this.handleFileRemove.bind(this)

        this.state={
            selectedFile: null,//上传的附件
            selectedFileName:'',
            selectedFileNameValidationFailedInfo:'',
        }
    }


    handleFileChoose(){
        this.refs.fileInput.click()
    }

    handleFileChange(){
        const selectedFile = this.refs.fileInput.files[0]
        console.log(selectedFile)

        const validationFailedInfo = Validator.validateUploadedFile(selectedFile)
        if(validationFailedInfo && validationFailedInfo.length > 0){
            this.setState(
                {
                    selectedFileNameValidationFailedInfo: validationFailedInfo
                }
            )
        }else{
            this.setState({
                selectedFileName: selectedFile.name,
                selectedFileNameValidationFailedInfo: validationFailedInfo
            })
            this.props.onFileChange(selectedFile)
        }
    }

    handleFileRemove() {
        this.handleStateChange('selectedFileName', '')
        this.refs.fileInput.value = ''
        this.props.onFileChange(null)
    }


    render(){
        return (
            <FormGroup controlId="formBasicText">
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">请上传需要审查的合同文档。</span> : ''}
                </ControlLabel>
                <FormControl
                    className="file-upload"
                    readOnly
                    type="text"
                    value={this.state.value}
                    placeholder="目前仅支持文本格式（.doc、.docx、.page、.pdf）和压缩格式（.zip、.rar）"
                />
                {/***由于目前仅支持上传一个附件，所以通过已选的附件名是否存在来决定上传按钮是否可继续点击***/}
                <Button className="chose-file" type="submit" disabled={this.state.selectedFileName.length > 0} onClick={this.handleFileChoose}>点击上传</Button>
                <input type="file" name="uploadFile" hidden ref="fileInput" onChange={this.handleFileChange}/>
                {this.state.selectedFileName ? <div className="file-name"><span className="fa fa-file-text fa-lg"></span>{this.state.selectedFileName}<span className="fa fa-times-circle" aria-hidden="true" onClick={this.handleFileRemove}></span></div> : ''}
                <HelpBlock>{this.state.selectedFileNameValidationFailedInfo}</HelpBlock>
            </FormGroup>
        )
    }
}

export default FileUpload