import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm'; 
import { addComment } from './commentsSlice';

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();
    
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date().toISOString()
        };
        console.log('New Comment:', comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={toggleModal}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            rating: '', // Initial value for rating
                            author: '',
                            commentText: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor='rating'>Rating</Label>
                                    <Field
                                        name='rating'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option value=''>Select...</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </Field>
                                    <ErrorMessage name='rating'>
                                        {(msg) => <div className='text-danger'>{msg}</div>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='author'>Your Name</Label>
                                    <Field
                                        name='author'
                                        type='text'
                                        placeholder='Your Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='author'>
                                        {(msg) => <div className='text-danger'>{msg}</div>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='commentText'>Comment</Label>
                                    <Field
                                        name='commentText'
                                        as='textarea'
                                        rows='6'
                                        className='form-control'
                                    />
                                </FormGroup>
                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default CommentForm;