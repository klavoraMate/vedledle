'use client'
import Layout from "@/general_component/design/Layout";
import FormContainer from "@/general_component/form/FormContainer";
import GroomingForm from "@/app/reservation/reservation_component/GroomingForm";
import {useState} from "react";
import {Dog, Grooming} from "@/util/types";

export default function Reservation() {
    const [dog, setDog] = useState<Dog>();
    const [grooming, setGrooming] = useState<Grooming>()
    console.log(dog)
    return (
        <Layout>
            <FormContainer>
                <GroomingForm
                    dog={dog}
                    setDog={setDog}
                    grooming={grooming}
                    setGrooming={setGrooming}
                />
            </FormContainer>
        </Layout>
    )
}