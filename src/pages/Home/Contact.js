import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addComment } from "src/redux/actions/commentAction";
const schema = yup.object().shape({
    name: yup.string().required("* Name is requied"),
    email: yup.string().required("* Email is requied"),
    subject: yup.string().required("* Subject is requied"),
    description: yup.string().required("* Message is requied"),
})
export default function Contact() {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.comment)
    const { register, handleSubmit, reset, formState: { errors },} = useForm({ resolver: yupResolver(schema) })
    const handleAddComment = (values , e) => {
        dispatch(addComment(values));
        setTimeout(() => {
            e.target.reset();
        }, [100])   
    }
    return (
        <div className="contact" id="contact">
            <div className="width-default">
                <div className="contact-title">
                    <h3>Contact</h3>
                </div>
                <div className="contact-content">
                    <div className="row">
                        <div className="col-md-6 col-12 info">
                            <div className="info-content">
                                {status ? <p className="contact-alert alert alert-success">{status}</p> : ""}
                                <form onSubmit={handleSubmit(handleAddComment)}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" type="text" {...register("name")}></input>
                                        {errors.name && (
                                            <div className="alert alert-danger">{errors.name.message}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" {...register("email")}></input>
                                        {errors.email && (
                                            <div className="alert alert-danger">{errors.email.message}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input className="form-control" type="text" {...register("subject")}></input>
                                        {errors.subject && (
                                            <div className="alert alert-danger">{errors.subject.message}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" type="textarea" {...register("description")}></textarea>
                                        {errors.description && (
                                            <div className="alert alert-danger">{errors.description.message}</div>
                                        )}
                                    </div>
                                    <button class="btn btn-success">Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 map">
                            <div className="map-content">
                                <div className="address item">
                                    <GoLocation className="icon" />
                                    <span>219 Hoang Dieu 2, Linh Trung W, Thu Duc D, Ho Chi Minh City</span>
                                </div>
                                <div className="phone item">
                                    <AiOutlinePhone className="icon"/>
                                    <span>+(84) 333883724</span>
                                </div>
                                <div className="mail item">
                                    <AiOutlineMail className="icon"/>
                                    <span>tinhdv724@gmail.com</span>
                                </div>
                            </div>
                            <div className="map-box">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4393451210976!2d106.76964371428754!3d10.854150260723554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277596dcb693%3A0x4b7eececf5844187!2zMjE5IEhvw6BuZyBEaeG7h3UgMiwgUGjGsOG7nW5nIExpbmggVHJ1bmcsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1634717791492!5m2!1svi!2s" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
