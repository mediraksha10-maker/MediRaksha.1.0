import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { AppointmentService } from "../services/appointment.service";
// import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
}

export default function AppointmentCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    doctorId: "",
    date: "",
    startTime: "",
    reason: "",
  });

  /* ---------------- LOAD APPOINTMENTS ---------------- */

//   const loadAppointments = async () => {
//     try {
//       const res = await AppointmentService.getAppointments();
//       const mapped = res.data.map((a: any) => ({
//         id: a._id,
//         title: a.reason || "Appointment",
//         start: `${a.date}T${a.startTime}`,
//       }));
//       setEvents(mapped);
//     } catch {
//       toast.error("Failed to load appointments");
//     }
//   };

//   useEffect(() => {
//     loadAppointments();
//   }, []);

  /* ---------------- ADD APPOINTMENT ---------------- */

//   const handleSubmit = async () => {
//     try {
//       await AppointmentService.bookAppointment(form);
//       toast.success("Appointment scheduled");
//       setShowModal(false);
//       setForm({ doctorId: "", date: "", startTime: "", reason: "" });
//       loadAppointments();
//     } catch {
//       toast.error("Failed to schedule appointment");
//     }
//   };

  return (
    <div className="p-6 bg-base-100 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={24} />
        </Link>

        <h2 className="text-2xl font-semibold">My Appointments</h2>
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary btn-sm"
        >
          + Add Meeting
        </button>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        height="auto"
      />

      {/* ---------------- MODAL ---------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-base-100 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Schedule Meeting</h3>

            <input
              className="input input-bordered w-full mb-3"
              placeholder="Doctor ID"
              value={form.doctorId}
              onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
            />

            <input
              type="date"
              className="input input-bordered w-full mb-3"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <input
              type="time"
              className="input input-bordered w-full mb-3"
              value={form.startTime}
              onChange={(e) =>
                setForm({ ...form, startTime: e.target.value })
              }
            />

            <textarea
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Reason (optional)"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />

            <div className="flex justify-end gap-2">
              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
