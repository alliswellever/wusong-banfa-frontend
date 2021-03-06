/**
 * Created by yuyongyu on 2016/11/9.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, HelpBlock, Collapse} from 'react-bootstrap'
import Validator from './Validator'


/**
 *     props
 * 1.required boolean (required)
 * 2.labelName string （required）
 * 3.labelDesc string (optional)
 * 4.placeholder string (optional)
 * 5.onFileChange function (required)
 *
 * */

class FileUploadField extends React.Component{
    constructor(props){
        super(props)

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
            this.setState({
                    selectedFileNameValidationFailedInfo: validationFailedInfo
            })
        }else{
            this.setState({
                selectedFileName: selectedFile.name,
                selectedFileNameValidationFailedInfo: validationFailedInfo
            })
            this.props.onFileChange(selectedFile)
        }
    }

    handleFileRemove() {
        this.setState({
            selectedFileName: ''
        })
        this.refs.fileInput.value = ''
        this.props.onFileChange(null)
    }


    render(){
        return (
            <FormGroup className="file-upload-field" controlId="formBasicText">
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">{this.props.labelDesc}</span> : ''}
                </ControlLabel>
                <FormControl
                    className="file-upload"
                    readOnly
                    type="text"
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                />
                {/***由于目前仅支持上传一个附件，所以通过已选的附件名是否存在来决定上传按钮是否可继续点击***/}
                <Button className="chose-file" disabled={this.state.selectedFileName.length > 0} onClick={() => this.handleFileChoose()}>点击上传</Button>
                <input type="file" name="uploadFile" hidden ref="fileInput" onChange={() => this.handleFileChange()}/>
                {this.state.selectedFileName ? <div className="file-name"><span className="fa fa-file-text fa-lg"></span>{this.state.selectedFileName}<span className="fa fa-times-circle" aria-hidden="true" onClick={() => this.handleFileRemove()}></span></div> : ''}
                <Collapse in={this.state.selectedFileNameValidationFailedInfo !== null && this.state.selectedFileNameValidationFailedInfo.length > 0}>
                    <HelpBlock>{this.state.selectedFileNameValidationFailedInfo}</HelpBlock>
                </Collapse>
            </FormGroup>
        )
    }
}

export default FileUploadField